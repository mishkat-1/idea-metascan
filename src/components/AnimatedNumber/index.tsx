import React from "react";
import { useSpring, animated } from "react-spring";

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: value },
    config: { duration: 500 }, // Animation duration in milliseconds
  });

  return <animated.span>{number.to((val) => val.toFixed(0))}</animated.span>;
};

export default AnimatedNumber;
