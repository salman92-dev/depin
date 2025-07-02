import React, { useMemo } from 'react';
import './animateddots.css';

const AnimatedDots = ({ className = '', dotCount = 20 }) => {
  // Precompute dots ONCE per mount/prop change
  const dots = useMemo(() => {
    return Array.from({ length: dotCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      tx: (Math.random() - 0.5) * 200, // random translate X in px
      ty: (Math.random() - 0.5) * 200, // random translate Y in px
      rotate: Math.random() * 720,
      duration: 2 + Math.random() * 10, // random duration
    }));
  }, [dotCount]);

  return (
    <div className={`container ${className}`}>
      {dots.map((dot, i) => (
        <div
          key={i}
          className="dot"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            animation: `move ${dot.duration}s linear infinite alternate`,
            '--tx': `${dot.tx}px`,
            '--ty': `${dot.ty}px`,
            '--rotate': `${dot.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedDots;
