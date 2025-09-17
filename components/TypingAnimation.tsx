"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface TypingAnimationProps {
  sequence: (string | number)[];
  style?: React.CSSProperties;
  className?: string;
}

const TypingAnimation = ({ sequence, style, className }: TypingAnimationProps) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span" // Use a span for inline text
      cursor={true} // Display the blinking cursor
      repeat={Infinity} // Repeat the animation forever
      style={style}
      className={className}
    />
  );
};

export default TypingAnimation;