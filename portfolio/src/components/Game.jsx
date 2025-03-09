'use client'
import { useEffect, useState } from "react";

const RunningAnimation = () => {
  const tileSize = 16; // Each tile is 16x16px
  const tileSpacing = 1; // 1px spacing
  const frameCount = 6; // Number of running frames
  const frameRate = 100; // Speed of animation (milliseconds)
  
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frameCount);
    }, frameRate);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[16px] h-[16px] overflow-hidden bg-[url('/portfolio/public/Tile.png')]"
      style={{
        backgroundPositionX: `-${frame * (tileSize + tileSpacing)}px`,
        backgroundPositionY: `-16px`, // Adjust based on row number
      }}
    />
  );
};

export default RunningAnimation;
