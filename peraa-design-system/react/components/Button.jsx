/**
 * Peraa Design System - Button Component (React)
 * 
 * @example
 * <Button intent="primary">Click me</Button>
 * <Button intent="secondary" size="lg">Large Button</Button>
 * <Button intent="tertiary" disabled>Disabled</Button>
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({
  children,
  intent = 'primary',
  size = 'md',
  iconOnly = false,
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const classNames = [
    'peraa-btn',
    `peraa-btn--${intent}`,
    size !== 'md' && `peraa-btn--${size}`,
    iconOnly && 'peraa-btn--icon-only',
    fullWidth && 'peraa-btn--full',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Visual style intent */
  intent: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Square button for icons only */
  iconOnly: PropTypes.bool,
  /** Full width button */
  fullWidth: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
  /** Button type attribute */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Button;
