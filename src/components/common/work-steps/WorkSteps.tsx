"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const WorkSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Анализ и консультация",
      description: "Проводим глубокий анализ вашего бизнеса, целей и целевой аудитории. Определяем ключевые метрики успеха.",
    },
    {
      number: "2", 
      title: "Стратегия и план",
      description: "Разрабатываем детальную стратегию продвижения, включая каналы, бюджет и временные рамки."    },
    {
  number: "3",
  title: "SEO-оптимизация и продвижение", 
  description: "Повышаем видимость вашего сайта в поисковых 
системах, работаем над органическим трафиком и позициями.",
},    {
      number: "4",
      title: "Оптимизация и рост",
      description: "Постоянно анализируем результаты, оптимизируем кампании для максимальной эффективности.",
    },
    {
      number: "5",
      title: "Отчетность и scaling", 
      description: "Предоставляем детальные отчеты и масштабируем успешные стратегии на новые рынки.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="work-steps-container">
      {/* Упрощенный заголовок */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          5 этапов работы
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          от анализа к результату
        </p>
      </div>

      {/* Блок с этапами */}
      <div className="steps-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "step-card group relative p-6 rounded-2xl border border-[var(--border-secondary)] bg-[var(--bg-primary)] transition-all duration-500 hover:border-[var(--main)] hover:shadow-lg",
              activeStep === index
                ? "border-[var(--main)] shadow-lg"
                : ""
            )}
            onMouseEnter={() => setActiveStep(index)}
          >
            {/* Номер этапа */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Этап {step.number}
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: parseInt(step.number) }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-[var(--main)] rounded-full"
                  ></span>
                ))}
              </div>
            </div>

            {/* Заголовок этапа */}
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[var(--main)] transition-colors">
              {step.title}
            </h3>

            {/* Описание этапа */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {step.description}
            </p>

            {/* Индикатор активного состояния */}
            <div
              className={cn(
                "absolute bottom-0 left-0 h-1 bg-[var(--main)] transition-all duration-500",
                activeStep === index ? "w-full" : "w-0"
              )}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSteps;
