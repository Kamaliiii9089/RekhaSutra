import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ConstellationVisualizer = () => {
  const [stars, setStars] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const newConnections = [];
      
      // Generate random stars
      for (let i = 0; i < 30; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          brightness: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 3 + 1,
        });
      }

      // Generate connections between nearby stars
      for (let i = 0; i < newStars.length; i++) {
        for (let j = i + 1; j < newStars.length; j++) {
          const distance = Math.sqrt(
            Math.pow(newStars[i].x - newStars[j].x, 2) +
            Math.pow(newStars[i].y - newStars[j].y, 2)
          );
          
          if (distance < 25 && Math.random() > 0.7) {
            newConnections.push({
              id: `${i}-${j}`,
              x1: newStars[i].x,
              y1: newStars[i].y,
              x2: newStars[j].x,
              y2: newStars[j].y,
              opacity: Math.random() * 0.3 + 0.1,
            });
          }
        }
      }

      setStars(newStars);
      setConnections(newConnections);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Constellation Lines */}
        {connections.map((connection) => (
          <motion.line
            key={connection.id}
            x1={`${connection.x1}%`}
            y1={`${connection.y1}%`}
            x2={`${connection.x2}%`}
            y2={`${connection.y2}%`}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.1"
            opacity={connection.opacity}
            animate={{
              opacity: [connection.opacity, connection.opacity * 0.3, connection.opacity],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size * 0.1}
            fill="white"
            opacity={star.brightness}
            animate={{
              opacity: [star.brightness, star.brightness * 0.3, star.brightness],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.twinkleSpeed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Shooting Stars */}
      <motion.div
        className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"
        animate={{
          x: [0, 200, 400],
          y: [0, 50, 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeOut",
        }}
      />
      
      <motion.div
        className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"
        animate={{
          x: [0, -150, -300],
          y: [0, 75, 150],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default ConstellationVisualizer;
