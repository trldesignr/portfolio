/**
 * Portfolio Auth Utility
 * Client-side password protection for Case Studies pages
 * 
 * NOTE: This is portfolio-grade protection, not enterprise security.
 * The goal is controlled sharing with recruiters and stakeholders.
 */

const PortfolioAuth = (function() {
  // SHA-256 hash of the password
  // To change password, run in browser console:
  // crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_NEW_PASSWORD')).then(h => console.log(Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('')))
  // Then replace PASSWORD_HASH below and increment HASH_VERSION
  const PASSWORD_HASH = 'c147cec5363db47bab82d4d4f7641d90104b32821646b43482c7eea14853c19d'; // 
  
  const STORAGE_KEY = 'portfolio_access';
  const HASH_VERSION_KEY = 'portfolio_hash_version';
  const REDIRECT_KEY = 'portfolio_redirect';
  
  // Hash version - increment this when changing password to invalidate old sessions
  const HASH_VERSION = '4';
  
  /**
   * Hash a string using SHA-256
   */
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  
  /**
   * Check if user has valid access
   */
  function hasAccess() {
    const accessGranted = localStorage.getItem(STORAGE_KEY);
    const storedVersion = localStorage.getItem(HASH_VERSION_KEY);
    
    // Invalidate if hash version changed (password was updated)
    if (storedVersion !== HASH_VERSION) {
      revokeAccess();
      return false;
    }
    
    return accessGranted === 'true';
  }
  
  /**
   * Validate password and grant access if correct
   */
  async function checkPasswordAndSet(password) {
    const inputHash = await hashPassword(password);
    
    if (inputHash === PASSWORD_HASH) {
      localStorage.setItem(STORAGE_KEY, 'true');
      localStorage.setItem(HASH_VERSION_KEY, HASH_VERSION);
      return true;
    }
    
    return false;
  }
  
  /**
   * Revoke access (logout)
   */
  function revokeAccess() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(HASH_VERSION_KEY);
    localStorage.removeItem(REDIRECT_KEY);
  }
  
  /**
   * Store the current URL for post-login redirect
   */
  function storeRedirect() {
    localStorage.setItem(REDIRECT_KEY, window.location.href);
  }
  
  /**
   * Get and clear stored redirect URL after successful login
   * Returns relative path for GitHub Pages compatibility
   */
  function getRedirectUrl(defaultUrl) {
    const redirect = localStorage.getItem(REDIRECT_KEY);
    localStorage.removeItem(REDIRECT_KEY);
    
    if (redirect) {
      // Convert absolute URL to relative path for GitHub Pages compatibility
      try {
        const url = new URL(redirect);
        // Extract pathname, keeping it relative to current location
        const currentPath = window.location.pathname;
        const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
        const redirectPath = url.pathname;
        
        // If same directory, just use filename
        if (redirectPath.startsWith(currentDir)) {
          return redirectPath.substring(currentDir.length) || defaultUrl;
        }
        // Otherwise return the full pathname (works for both local and GH Pages)
        return redirectPath;
      } catch (e) {
        return redirect;
      }
    }
    
    return defaultUrl;
  }
  
  /**
   * Redirect to gate page if not authenticated
   * Stores current URL for post-login redirect
   */
  function guardPage(gatePath) {
    if (!hasAccess()) {
      storeRedirect();
      window.location.replace(gatePath);
      return false;
    }
    return true;
  }
  
  /**
   * Logout and redirect to gate
   */
  function logout(gatePath) {
    revokeAccess();
    window.location.href = gatePath;
  }
  
  return {
    hasAccess,
    checkPasswordAndSet,
    revokeAccess,
    storeRedirect,
    getRedirectUrl,
    guardPage,
    logout
  };
})();
