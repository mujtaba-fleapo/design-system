import React, { useEffect, useRef, useState } from 'react';

interface OnScreenProps {
  children: (isVisible: boolean) => React.ReactNode;
  threshold?: number;
}

export const OnScreen: React.FC<OnScreenProps> = ({
  children,
  threshold = 1
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setIsVisible(true);
      else setIsVisible(false);
    });
  };

  useEffect(() => {
    const options: IntersectionObserverInit = { threshold: threshold };
    const observer = new IntersectionObserver(handleIntersection, options);
    const currentRef = targetRef.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return <div ref={targetRef}>{children(isVisible)}</div>;
};
