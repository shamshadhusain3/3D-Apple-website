// src/component/Loader.jsx
import { Html } from '@react-three/drei';
import React, { useEffect, useState } from 'react';

const Loader = ({ duration = 5 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const nextProgress = prev + 100 / (duration * 1);
        if (nextProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="relative w-[10vw] h-[10vw] rounded-full border-4 border-solid border-gray-700 flex justify-center items-center">
          <div
            className="absolute inset-0 rounded-full border-t-4 border-t-indigo-500"
            style={{
              transform: `rotate(${(progress / 100) * 360}deg)`,
              transition: 'transform 0.1s linear',
            }}
          />
          <div className="absolute inset-0 flex justify-center items-center text-indigo-500 text-xl font-semibold">
            {progress.toFixed(0)}%
          </div>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
