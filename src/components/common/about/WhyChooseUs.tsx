"use client";

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Опыт и экспертиза",
      description: "Более 5 лет создаем digital-продукты для бизнеса различных масштабов - от стартапов до корпораций."
    },
    {
      number: "02",
      title: "Индивидуальный подход",
      description: "Не используем шаблонные решения. Каждый проект разрабатывается с учетом уникальных потребностей вашего бизнеса."
    },
    {
      number: "03", 
      title: "Прозрачность процесса",
      description: "Регулярные отчеты о ходе работы, демо-показы на каждом этапе. Вы всегда в курсе прогресса."
    },
    {
      number: "04",
      title: "Соблюдение сроков",
      description: "Строгое соблюдение дедлайнов благодаря Agile-методологии и четкому планированию."
    },
    {
      number: "05",
      title: "Пост-релизная поддержка",
      description: "Не бросаем после сдачи проекта. Предоставляем гарантийное обслуживание и консультации."
    },
    {
      number: "06",
      title: "Конкурентные цены",
      description: "Оптимальное соотношение цены и качества. Гибкая система оплаты под ваш бюджет."
    }
  ];

  return (
    <div className="space-y-8">
      {reasons.map((reason, index) => (
        <div key={index} className="flex items-start gap-6 group">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {reason.number}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
              {reason.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {reason.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
