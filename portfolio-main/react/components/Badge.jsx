/**
 * Peraa Design System - Badge Component (React)
 * 
 * @example
 * <Badge>Default</Badge>
 * <Badge variant="brand">Featured</Badge>
 * <Badge variant="success" size="sm">Complete</Badge>
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  outline = false,
  dot = false,
  className = '',
  ...props
}) => {
  const classNames = [
    'peraa-badge',
    variant !== 'default' && `peraa-badge--${variant}`,
    size !== 'md' && `peraa-badge--${size}`,
    outline && 'peraa-badge--outline',
    dot && 'peraa-badge--dot',
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  /** Badge content */
  children: PropTypes.node.isRequired,
  /** Badge variant */
  variant: PropTypes.oneOf(['default', 'brand', 'success', 'warning', 'error', 'info']),
  /** Badge size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Outlined style */
  outline: PropTypes.bool,
  /** Show status dot */
  dot: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Badge;
