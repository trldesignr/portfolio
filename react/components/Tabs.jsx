/**
 * Peraa Design System - Tabs Component (React)
 * 
 * @example
 * <Tabs defaultTab="tab1">
 *   <TabList>
 *     <Tab id="tab1">Tab 1</Tab>
 *     <Tab id="tab2">Tab 2</Tab>
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel id="tab1">Content 1</TabPanel>
 *     <TabPanel id="tab2">Content 2</TabPanel>
 *   </TabPanels>
 * </Tabs>
 */

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

const TabsContext = createContext();

export const Tabs = ({
  children,
  defaultTab,
  variant = 'pills',
  size = 'md',
  className = '',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const classNames = [
    'peraa-tabs',
    variant === 'underline' && 'peraa-tabs--underline',
    variant === 'pills-full' && 'peraa-tabs--pills-full',
    size !== 'md' && `peraa-tabs--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={classNames} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabList = ({ children, className = '', ...props }) => {
  return (
    <div className={`peraa-tabs__list ${className}`} role="tablist" {...props}>
      {children}
    </div>
  );
};

export const Tab = ({ children, id, disabled = false, className = '', ...props }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === id;

  const classNames = [
    'peraa-tabs__tab',
    isActive && 'peraa-tabs__tab--active',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      className={classNames}
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabPanels = ({ children, className = '', ...props }) => {
  return (
    <div className={`peraa-tabs__content ${className}`} {...props}>
      {children}
    </div>
  );
};

export const TabPanel = ({ children, id, className = '', ...props }) => {
  const { activeTab } = useContext(TabsContext);
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div
      className={`peraa-tabs__panel peraa-tabs__panel--active ${className}`}
      role="tabpanel"
      id={`panel-${id}`}
      {...props}
    >
      {children}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultTab: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['pills', 'underline', 'pills-full']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Tabs;
