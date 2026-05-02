import { useEffect } from 'react';

export const useSaoPauloLogic = () => {
  useEffect(() => {
    // Simple number tick animation for the population
    const popElement = document.getElementById('totalPop');
    if (!popElement) return;

    const finalPop = 11451245;

    // Format numbers to Brazilian standard
    const formatter = new Intl.NumberFormat('pt-BR');

    let currentPop = 11450000; // start slightly below
    let animationFrameId: number;

    const animate = () => {
      currentPop += Math.floor(Math.random() * 50);
      if (currentPop >= finalPop) {
        popElement.innerText = formatter.format(finalPop);
      } else {
        popElement.innerText = formatter.format(currentPop);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // start animation
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
};
