"use client";

import { useEffect } from 'react';
import Snowflakes from 'magic-snowflakes';

const SnowEffect = () => {
  useEffect(() => {
    const snowflakes = new Snowflakes();
    snowflakes.start();

    return () => {
      snowflakes.stop();
    };
  }, []);

  return null; // DOM 요소를 추가하지 않음
};

export default SnowEffect;