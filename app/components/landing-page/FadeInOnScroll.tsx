"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInWrapper({ children, className = "" }: FadeInWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // remove when out of view
        }
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
   <div
  ref={ref}
  className={`${className} ${isVisible ? "fade-in" : "opacity-0"}`}
>
  {children}
</div>

  );
}
