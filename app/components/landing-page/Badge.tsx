import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
      {children}
    </span>
  );
}
