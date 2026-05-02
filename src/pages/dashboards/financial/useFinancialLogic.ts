import { useEffect } from 'react';

export const useFinancialLogic = () => {
  useEffect(() => {
    // Interactive hover logic
    const cards = document.querySelectorAll('.card');

    const handleMouseEnter = function (this: HTMLElement) {
      this.style.borderColor = 'rgba(59, 130, 246, 0.4)';
    };

    const handleMouseLeave = function (this: HTMLElement) {
      this.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    };

    cards.forEach((card) => {
      card.addEventListener('mouseenter', handleMouseEnter as EventListener);
      card.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        card.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, []);
};
