
import React, { useRef, useEffect, useState } from "react";

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  delay?: number; // ms
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  className = "",
  animationClass = "animate-fade-in-up",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let timeoutId: NodeJS.Timeout | null = null;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={
        `${className} transition-all duration-700 ${isVisible ? animationClass : 'opacity-0 translate-y-8'}`.trim()
      }
    >
      {children}
    </div>
  );
};

export default AnimatedContent;
