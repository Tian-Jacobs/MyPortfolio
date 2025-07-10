
import React, { useRef, useState } from "react";

interface GlareHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  borderRadius?: string;
  className?: string;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  children,
  glareColor = "rgba(255,255,255,0.5)",
  glareOpacity = 0.6,
  borderRadius = "1rem",
  className = "",
  ...rest
}) => {
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlareStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, ${glareColor} ${glareOpacity * 100}%, transparent 80%)`,
      borderRadius,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 1,
      transition: "background 0.2s",
    });
  };

  const handleMouseLeave = () => {
    setGlareStyle({});
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius, position: "relative" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <div
        style={{
          ...glareStyle,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};

export default GlareHover;
