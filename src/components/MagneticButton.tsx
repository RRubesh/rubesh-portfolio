import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  title?: string;
  strength?: number; // max offset in px, default ~8px
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  download,
  title,
  strength = 8,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || window.innerWidth < 768 || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Constrain button movement to strength (8px max)
    const moveX = (distanceX / (width / 2)) * strength;
    const moveY = (distanceY / (height / 2)) * strength;

    // Independent icon movement for parallax effect
    const iconMoveX = (distanceX / (width / 2)) * (strength * 1.5);
    const iconMoveY = (distanceY / (height / 2)) * (strength * 1.5);

    setPosition({ x: moveX, y: moveY });
    setIconPosition({ x: iconMoveX, y: iconMoveY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
    setIconPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 250, damping: 18, mass: 0.5 },
  };

  const content = (
    <div className="relative group overflow-hidden rounded-2xl">
      {/* Subtle hover gradient highlight effect */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 transition-opacity duration-300 pointer-events-none rounded-2xl ${
          isHovered ? 'opacity-100' : ''
        }`}
      />
      {children}
    </div>
  );

  if (href) {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...motionProps}
        className={`inline-block relative ${className}`}
      >
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          onClick={onClick}
          title={title}
          className="block"
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
      onClick={onClick}
      className={`inline-block relative cursor-pointer ${className}`}
      title={title}
    >
      {content}
    </motion.div>
  );
};
