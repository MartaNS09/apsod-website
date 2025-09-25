"use client";
import { process } from "@/data/process";
import { useRef } from "react";
import { useStackedCards } from "@/hooks/useStackedCards";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import ProcessIcon from "@/components/common/ProcessIcon";

const adaptedProcess = process.map((step, index) => ({
  title: step.event,
  description: step.description,
  images: [],
  tags: [step.year],
  tools_used: [step.icon],
  duration: "Этап",
  link: "#process-" + (index + 1),
  icon: step.icon,
  index: index,
}));

interface ProcessCardProps {
  idx: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

const CustomStackedCard = ({
  title,
  description,
  tags,
}: Omit<ProcessCardProps, "idx">) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const StackedProcessCardWithIcon = ({ idx, ...props }: ProcessCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <ProcessIcon icon={props.icon} index={idx} />
      <div className="mt-6 w-full">
        <CustomStackedCard {...props} />
      </div>
    </div>
  );
};

const ProcessCardWithIcon = ({ idx, ...props }: ProcessCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <ProcessIcon icon={props.icon} index={idx} />
      <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
        {props.title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {props.description}
      </p>
      <div className="mt-4">
        <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
          {props.tags[0]}
        </span>
      </div>
    </div>
  );
};

const HowWeWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { projectCard } = useThemeVariantsContext();
  
  useStackedCards(containerRef, { selector: ".process-card" });

  if (projectCard === "stacked-cards") {
    return (
      <div className="relative" ref={containerRef}>
        {adaptedProcess.map((step, i) => (
          <div
            key={i}
            className="process-card md:sticky relative top-16 z-30 sm:h-screen sm:py-0 first:pt-0 last:pb-0 py-16"
          >
            <StackedProcessCardWithIcon key={i} idx={i} {...step} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid 2xl:grid-cols-2 mt-4 gap-8">
      {adaptedProcess.map((item, i) => (
        <ProcessCardWithIcon key={i} idx={i} {...item} />
      ))}
    </div>
  );
};

export default HowWeWork;
