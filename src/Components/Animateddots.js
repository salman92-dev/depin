import React, { useEffect } from 'react';
import './animateddots.css';

const AnimatedDots = ({ className, dotCount }) => {
  useEffect(() => {
    const container = document.querySelector(`.${className}`);

    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      container.appendChild(dot);

      dot.style.left = `${Math.random() * 100}%`;
      dot.style.top = `${Math.random() * 100}%`;
      dot.style.animation = `move-${i} 25s linear infinite alternate`;

      const keyframes = `
        0% {
          transform: translate(0, 0) rotate(0deg);
          filter: brightness(100%);
        }
        100% {
          transform: translate(${Math.random() * containerWidth - containerWidth / 2}px, ${Math.random() * containerHeight - containerHeight / 2}px) rotate(${Math.random() * 720}deg);
        }
      `;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes move-${i} {
          ${keyframes}
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      container.innerHTML = ''; // Clean up dots on unmount or prop change
      const styles = document.querySelectorAll('style');
      styles.forEach(style => {
        if (style.textContent.includes('@keyframes move-')) {
          style.remove();
        }
      });
    };
  }, [className, dotCount]);

  return <div className={`container ${className}`}></div>;
};

export default AnimatedDots;
