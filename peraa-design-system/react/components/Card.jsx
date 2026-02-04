/**
 * Peraa Design System - Card Component (React)
 * 
 * @example
 * <Card interactive>
 *   <CardImage src="image.jpg" alt="Description" />
 *   <CardContent>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Brief description here.</CardDescription>
 *   </CardContent>
 * </Card>
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({
  children,
  interactive = false,
  horizontal = false,
  compact = false,
  featured = false,
  className = '',
  onClick,
  ...props
}) => {
  const classNames = [
    'peraa-card',
    interactive && 'peraa-card--interactive',
    horizontal && 'peraa-card--horizontal',
    compact && 'peraa-card--compact',
    featured && 'peraa-card--featured',
    className,
  ].filter(Boolean).join(' ');

  return (
    <article className={classNames} onClick={onClick} {...props}>
      {children}
    </article>
  );
};

export const CardImage = ({ src, alt = '', className = '', ...props }) => {
  return (
    <div className={`peraa-card__image-wrapper ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="peraa-card__image" {...props} />
      ) : (
        <div className="peraa-card__image" />
      )}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`peraa-card__content ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, as: Component = 'h3', className = '', ...props }) => {
  return (
    <Component className={`peraa-card__title ${className}`} {...props}>
      {children}
    </Component>
  );
};

export const CardDescription = ({ children, className = '', ...props }) => {
  return (
    <p className={`peraa-card__description ${className}`} {...props}>
      {children}
    </p>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`peraa-card__footer ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  interactive: PropTypes.bool,
  horizontal: PropTypes.bool,
  compact: PropTypes.bool,
  featured: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  className: PropTypes.string,
};

export default Card;
