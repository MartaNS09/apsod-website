"use client";
import { ReactNode } from "react";

const VCardSection = ({
  title,
  children,
  className = ""
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section id={title} className={className}>
      {title && (
        <h1 className="mb-16 font-extrabold md:text-8xl sm:text-7xl text-5xl tracking-wide text-query">
          {title.split("-").join(" ")}
        </h1>
      )}
      <>{children}</>
    </section>
  );
};

export default VCardSection;
