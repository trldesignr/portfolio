/**
 * Peraa Contact Modal
 *
 * Handles the "Book a Workshop" and "Start a Conversation" modal flows.
 * Sends via EmailJS — no email client required.
 *
 * Usage:
 *   Add data-modal-trigger="workshop"      to open the Workshop form
 *   Add data-modal-trigger="conversation"  to open the Conversation form
 */

(function () {
  'use strict';

  /* ─── EmailJS config ────────────────────────────────────────────────────── */
  const EMAILJS_PUBLIC_KEY  = 'QqvrHdbBCfSWyVGwj';
  const EMAILJS_SERVICE_ID  = 'service_sojxe0s';
  const RECIPIENT_EMAIL     = 'trldesignr@gmail.com';

  const TEMPLATES = {
    workshop:     'template_snotsri',
    conversation: 'template_s2eoihd',
  };

  /* ─── Modal config per type ─────────────────────────────────────────────── */
  const MODAL_CONFIG = {
    workshop: {
      title:    'Book a Workshop',
      subtitle: 'Provide a few details for us to connect. I will reach out to discuss more.',
      fields: [
        { id: 'from_name',    label: 'Full Name',    type: 'text',   placeholder: 'Jane Smith',          required: true },
        { id: 'reply_to',     label: 'Email',        type: 'email',  placeholder: 'jane@company.com',    required: true },
        { id: 'company',      label: 'Company',      type: 'text',   placeholder: 'Acme Corp',           required: true },
        {
          id: 'session_type',
          label: 'Session Type',
          type: 'select',
          required: true,
          options: [
            { value: '',              label: 'Select a session type' },
            { value: '1:1 Session',   label: '1:1 Session' },
            { value: 'Team Workshop', label: 'Team Workshop' },
          ],
        },
      ],
      successTitle: 'Request received.',
      successBody:  'Thanks for reaching out. I\'ll be in touch within 24 hours.',
    },
    conversation: {
      title:    'Start a Conversation',
      subtitle: 'No pitch, no commitment. Just a conversation.',
      fields: [
        { id: 'from_name', label: 'Full Name', type: 'text',  placeholder: 'Jane Smith',       required: true },
        { id: 'reply_to',  label: 'Email',     type: 'email', placeholder: 'jane@company.com', required: true },
        { id: 'message',   label: 'Message',   type: 'textarea', placeholder: 'What\'s on your mind?', required: true },
      ],
      successTitle: 'Message sent.',
      successBody:  'Thanks for reaching out. I\'ll get back to you soon.',
    },
  };

  /* ─── State ─────────────────────────────────────────────────────────────── */
  let overlay, modal, currentType;

  /* ─── Build the modal DOM (once) ────────────────────────────────────────── */
  function buildModal() {
    overlay = document.createElement('div');
    overlay.className = 'peraa-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'peraa-modal-title');

    overlay.innerHTML = `
      <div class="peraa-modal" id="peraa-modal-dialog">

        <!-- Success view (shown after send) -->
        <div class="peraa-modal__success-view" id="peraa-modal-success">
          <svg class="peraa-modal__success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <p class="peraa-modal__success-title" id="peraa-modal-success-title"></p>
          <p class="peraa-modal__success-body" id="peraa-modal-success-body"></p>
          <button class="peraa-btn peraa-btn--secondary" id="peraa-modal-done">Done</button>
        </div>

        <!-- Form view -->
        <div id="peraa-modal-form-view">
          <div class="peraa-modal__header">
            <div>
              <h2 class="peraa-modal__title" id="peraa-modal-title"></h2>
              <p class="peraa-modal__subtitle" id="peraa-modal-subtitle"></p>
            </div>
            <button class="peraa-modal__close" id="peraa-modal-close" aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <form class="peraa-modal__body" id="peraa-modal-form" novalidate>
            <!-- Fields injected by renderFields() -->
          </form>

          <div class="peraa-modal__footer">
            <div class="peraa-modal__feedback" id="peraa-modal-feedback"></div>
            <button type="submit" form="peraa-modal-form" class="peraa-btn peraa-btn--primary peraa-modal__submit" id="peraa-modal-submit">
              Send
            </button>
            <p class="peraa-modal__privacy">All information provided is only used for the purposes of us to connect. I do not share, sell, or store information for any other reason.</p>
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(overlay);

    modal = overlay.querySelector('#peraa-modal-dialog');

    /* Close button */
    overlay.querySelector('#peraa-modal-close').addEventListener('click', closeModal);
    overlay.querySelector('#peraa-modal-done').addEventListener('click', closeModal);

    /* Click outside */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    /* ESC key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    /* Form submit */
    overlay.querySelector('#peraa-modal-form').addEventListener('submit', handleSubmit);
  }

  /* ─── Render fields for the active type ─────────────────────────────────── */
  function renderFields(type) {
    const config = MODAL_CONFIG[type];
    const form = overlay.querySelector('#peraa-modal-form');
    form.innerHTML = '';

    config.fields.forEach(function (field) {
      const group = document.createElement('div');
      group.className = 'peraa-form-group';

      const label = document.createElement('label');
      label.className = 'peraa-form-label' + (field.required ? ' peraa-form-label--required' : '');
      label.setAttribute('for', 'modal-field-' + field.id);
      label.textContent = field.label;
      group.appendChild(label);

      let input;

      if (field.type === 'select') {
        input = document.createElement('select');
        input.className = 'peraa-form-select';
        field.options.forEach(function (opt) {
          const option = document.createElement('option');
          option.value = opt.value;
          option.textContent = opt.label;
          if (!opt.value) option.disabled = true;
          input.appendChild(option);
        });
        input.value = '';
      } else if (field.type === 'textarea') {
        input = document.createElement('textarea');
        input.className = 'peraa-form-input';
        input.placeholder = field.placeholder || '';
        input.rows = 4;
        input.style.resize = 'vertical';
      } else {
        input = document.createElement('input');
        input.type = field.type;
        input.className = 'peraa-form-input';
        input.placeholder = field.placeholder || '';
      }

      input.id = 'modal-field-' + field.id;
      input.name = field.id;
      if (field.required) input.required = true;
      group.appendChild(input);

      const errorMsg = document.createElement('span');
      errorMsg.className = 'peraa-form-error-msg';
      errorMsg.id = 'modal-error-' + field.id;
      errorMsg.setAttribute('aria-live', 'polite');
      group.appendChild(errorMsg);

      form.appendChild(group);
    });
  }

  /* ─── Populate header text ───────────────────────────────────────────────── */
  function populateHeader(type) {
    const config = MODAL_CONFIG[type];
    overlay.querySelector('#peraa-modal-title').textContent    = config.title;
    overlay.querySelector('#peraa-modal-subtitle').textContent = config.subtitle;
    overlay.querySelector('#peraa-modal-submit').textContent   = 'Send';
  }

  /* ─── Open ───────────────────────────────────────────────────────────────── */
  function openModal(type) {
    currentType = type;

    /* Reset state */
    overlay.querySelector('#peraa-modal-success').classList.remove('peraa-modal__success-view--visible');
    overlay.querySelector('#peraa-modal-form-view').style.display = '';
    setFeedback('', null);
    setSubmitState(false);

    populateHeader(type);
    renderFields(type);

    overlay.classList.add('peraa-modal-overlay--open');
    document.body.style.overflow = 'hidden';

    /* Focus first field */
    setTimeout(function () {
      const first = modal.querySelector('input, select, textarea');
      if (first) first.focus();
    }, 50);
  }

  /* ─── Close ──────────────────────────────────────────────────────────────── */
  function closeModal() {
    overlay.classList.remove('peraa-modal-overlay--open');
    document.body.style.overflow = '';
  }

  /* ─── Validation ─────────────────────────────────────────────────────────── */
  function validateForm() {
    const config = MODAL_CONFIG[currentType];
    let valid = true;

    config.fields.forEach(function (field) {
      const input    = overlay.querySelector('#modal-field-' + field.id);
      const errorEl  = overlay.querySelector('#modal-error-' + field.id);
      const value    = input ? input.value.trim() : '';

      errorEl.textContent = '';
      if (input) input.classList.remove('peraa-form-input--error', 'peraa-form-select--error');

      if (field.required && !value) {
        errorEl.textContent = field.label + ' is required.';
        if (input) input.classList.add(field.type === 'select' ? 'peraa-form-select--error' : 'peraa-form-input--error');
        valid = false;
      } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorEl.textContent = 'Please enter a valid email address.';
        if (input) input.classList.add('peraa-form-input--error');
        valid = false;
      }
    });

    return valid;
  }

  /* ─── Collect form data ──────────────────────────────────────────────────── */
  function collectData() {
    const config = MODAL_CONFIG[currentType];
    const data = {};
    config.fields.forEach(function (field) {
      const input = overlay.querySelector('#modal-field-' + field.id);
      data[field.id] = input ? input.value.trim() : '';
    });
    return data;
  }

  /* ─── Submit ─────────────────────────────────────────────────────────────── */
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const templateId = TEMPLATES[currentType];
    if (!templateId) {
      setFeedback('This form is not yet configured. Please try again later.', 'error');
      return;
    }

    setSubmitState(true);
    setFeedback('', null);

    const data = Object.assign({ to_email: RECIPIENT_EMAIL }, collectData());

    emailjs.send(EMAILJS_SERVICE_ID, templateId, data)
      .then(function () {
        showSuccess();
      })
      .catch(function (err) {
        console.error('EmailJS error:', err);
        const detail = (err && (err.text || err.message)) ? ' (' + (err.text || err.message) + ')' : '';
        setFeedback('Something went wrong' + detail + '. Please try again or email me directly.', 'error');
        setSubmitState(false);
      });
  }

  /* ─── Helpers ────────────────────────────────────────────────────────────── */
  function setSubmitState(loading) {
    const btn = overlay.querySelector('#peraa-modal-submit');
    btn.disabled = loading;
    btn.textContent = loading ? 'Sending…' : 'Send';
  }

  function setFeedback(msg, type) {
    const el = overlay.querySelector('#peraa-modal-feedback');
    el.textContent = msg;
    el.className = 'peraa-modal__feedback';
    if (type === 'success') el.classList.add('peraa-modal__feedback--success');
    if (type === 'error')   el.classList.add('peraa-modal__feedback--error');
  }

  function showSuccess() {
    const config = MODAL_CONFIG[currentType];
    overlay.querySelector('#peraa-modal-success-title').textContent = config.successTitle;
    overlay.querySelector('#peraa-modal-success-body').textContent  = config.successBody;
    overlay.querySelector('#peraa-modal-form-view').style.display  = 'none';
    overlay.querySelector('#peraa-modal-success').classList.add('peraa-modal__success-view--visible');
  }

  /* ─── Bind all triggers ──────────────────────────────────────────────────── */
  function bindTriggers() {
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('[data-modal-trigger]');
      if (!trigger) return;
      e.preventDefault();
      openModal(trigger.getAttribute('data-modal-trigger'));
    });
  }

  /* ─── Init ───────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof emailjs === 'undefined') {
      console.warn('EmailJS SDK not loaded.');
      return;
    }
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    buildModal();
    bindTriggers();
  });

})();
