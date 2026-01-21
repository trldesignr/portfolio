/**
 * Peraa Design System - Flip Card Component (React)
 * 
 * @example
 * <FlipCard
 *   title="Card Title"
 *   description="Short description"
 *   backTitle="Back Title"
 *   backDescription="Detailed description on the back"
 * />
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FlipCard.css';

export const FlipCard = ({
  title,
  description,
  backTitle,
  backDescription,
  backList,
  imageSrc,
  imageAlt = '',
  expanded = false,
  className = '',
  ...props
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const classNames = [
    'peraa-flip-card',
    isFlipped && 'is-flipped',
    expanded && 'peraa-flip-card--expanded',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={classNames} onClick={handleClick} {...props}>
      <div className="peraa-flip-card__inner">
        {/* Front */}
        <div className="peraa-flip-card__front">
          <div className="peraa-flip-card__image">
            {imageSrc && <img src={imageSrc} alt={imageAlt} />}
          </div>
          <div className="peraa-flip-card__content">
            <h3 className="peraa-flip-card__title">{title}</h3>
            <p className="peraa-flip-card__description">{description}</p>
            <div className="peraa-flip-card__hint">
              <svg className="peraa-flip-card__hint-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
              Click to learn more
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="peraa-flip-card__back">
          <h3 className="peraa-flip-card__back-title">{backTitle || title}</h3>
          <p className="peraa-flip-card__back-description">{backDescription}</p>
          {backList && backList.length > 0 && (
            <ul className="peraa-flip-card__back-list">
              {backList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  /** Front card title */
  title: PropTypes.string.isRequired,
  /** Front card description */
  description: PropTypes.string.isRequired,
  /** Back card title (defaults to front title) */
  backTitle: PropTypes.string,
  /** Back card detailed description */
  backDescription: PropTypes.string.isRequired,
  /** Optional list items for back */
  backList: PropTypes.arrayOf(PropTypes.string),
  /** Optional image source */
  imageSrc: PropTypes.string,
  /** Image alt text */
  imageAlt: PropTypes.string,
  /** Expanded card height for more content */
  expanded: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default FlipCard;
