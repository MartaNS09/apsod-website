interface ProcessIconProps {
  icon: string;
  index: number;
}

const ProcessIcon = ({ icon, index }: ProcessIconProps) => {
  const gradientColors = [
    "from-blue-500 to-purple-600", // 1. Аудит
    "from-green-500 to-teal-600", // 2. Дизайн
    "from-orange-500 to-red-600", // 3. Разработка
    "from-purple-500 to-pink-600", // 4. Запуск
  ];

  return (
    <div
      className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradientColors[index]} text-white text-2xl shadow-lg`}
    >
      {icon}
    </div>
  );
};

export default ProcessIcon;
