"use client";

import React, { useEffect } from 'react';

const SnowEffect: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    (async () => {
      const MagicSnowflakes = (await import('magic-snowflakes')).default;
      const snowflakes = new MagicSnowflakes({ color: '#fff', count: 50 });
      return () => snowflakes.destroy();
    })();
  }, []);

  return null;
};

export default SnowEffect;