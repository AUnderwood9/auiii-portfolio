import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let top = triggerRect.top - tooltipRect.height - 8;
    let left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;

    // Adjust for viewport boundaries
    if (top < 8) {
      // If tooltip would go above viewport, show below trigger
      top = triggerRect.bottom + 8;
    }

    if (left < 8) {
      left = 8;
    } else if (left + tooltipRect.width > viewport.width - 8) {
      left = viewport.width - tooltipRect.width - 8;
    }

    setPosition({ top, left });
  };

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  // Handle mobile tap to show/hide
  const handleMobileInteraction = (e: React.TouchEvent) => {
    e.preventDefault();
    if (isVisible) {
      hideTooltip();
    } else {
      showTooltip();
    }
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      
      // Update position on scroll/resize
      const handlePositionUpdate = () => updatePosition();
      window.addEventListener('scroll', handlePositionUpdate);
      window.addEventListener('resize', handlePositionUpdate);
      
      return () => {
        window.removeEventListener('scroll', handlePositionUpdate);
        window.removeEventListener('resize', handlePositionUpdate);
      };
    }
  }, [isVisible]);

  // Hide tooltip when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        hideTooltip();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [isVisible]);

  return (
    <>
      <div
        ref={triggerRef}
        className={`relative inline-block ${className}`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onTouchStart={handleMobileInteraction}
        style={{ WebkitTouchCallout: 'none' }} // Prevent long-press menu on mobile
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`fixed z-50 px-2 py-1 text-sm text-white bg-gray-800 border border-gray-600
                    rounded shadow-lg pointer-events-none transition-opacity duration-200 opacity-100`}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Tooltip; 