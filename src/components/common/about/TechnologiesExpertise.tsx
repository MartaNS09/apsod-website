"use client";

const TechnologiesExpertise = () => {
  const advantages = [
    {
      icon: "🚀",
      title: "Современный стек технологий",
      description: "Используем только актуальные технологии: Next.js, React, TypeScript, Tailwind CSS. Это гарантирует высокую производительность и безопасность вашего проекта."
    },
    {
      icon: "💎",
      title: "Качество кода премиум-класса",
      description: "Пишем чистый, поддерживаемый код с полным покрытием тестами. Каждый проект проходит многоэтапный код-ревью."
    },
    {
      icon: "⚡",
      title: "Оптимизация производительности",
      description: "Достигаем 90+ баллов в Google PageSpeed Insights. Быстрая загрузка = больше конверсий и лучшее SEO."
    },
    {
      icon: "🛡️",
      title: "Безопасность на первом месте",
      description: "Внедряем лучшие практики безопасности: защита от SQL-инъекций, XSS-атак, валидация данных."
    },
    {
      icon: "📱",
      title: "Полная адаптивность",
      description: "Сайты идеально работают на всех устройствах - от смартфонов до десктопов."
    },
    {
      icon: "🔧",
      title: "Техническая поддержка 24/7",
      description: "Гарантируем оперативное решение любых технических вопросов после запуска проекта."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {advantages.map((advantage, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl mb-4">{advantage.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {advantage.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {advantage.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesExpertise;
