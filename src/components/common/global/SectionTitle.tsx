"use client";
import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      {description && (
        <p className={cn("text-lg opacity-70")}>{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
