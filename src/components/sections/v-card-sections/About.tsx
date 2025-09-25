"use client";
import AboutCard from "../../common/about/AboutCard";
import Goals from "../../common/about/Goals";
import VCardSection from "@/components/common/global/VCardSection";
import Languages from "../../common/about/Languages";
import Clients from "@/components/common/about/Clients";
import WorkSteps from "@/components/common/work-steps/WorkSteps";
import HowWeWork from "../../common/about/HowWeWork";
import TechnologiesExpertise from "../../common/about/TechnologiesExpertise";
import WhyChooseUs from "../../common/about/WhyChooseUs";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import { cn } from "@/lib/utils";

const About = () => {
  const { aboutSection } = useThemeVariantsContext();

  return (
    <VCardSection title="" className="pt-8"> {/* Добавляем меньший отступ сверху */}
      <div
        className={cn(
          "lg:grid lg:grid-cols-12",
          aboutSection === "cards" ? "space-y-6" : "space-y-16"
        )}
      >
        {/* Наши цели */}
        <AboutCard title="Наши цели">
          <Goals />
        </AboutCard>

        {/* Почему выбирают нас */}
        <AboutCard title="Почему выбирают нас">
          <WhyChooseUs />
        </AboutCard>

        {/* Технологии и экспертиза */}
        <AboutCard title="Технологии и экспертиза">
          <TechnologiesExpertise />
        </AboutCard>

        {/* Как мы работаем */}
        <AboutCard title="Как мы работаем">
          <HowWeWork />
        </AboutCard>

        {/* Этапы работы */}
        <AboutCard title="Этапы работы">
          <WorkSteps />
        </AboutCard>

        <div
          className={cn(
            "lg:col-span-12 lg:grid lg:grid-cols-12 lg:space-y-0",
            aboutSection === "cards"
              ? "lg:gap-6 space-y-6"
              : "lg:gap-12 space-y-12"
          )}
        >
          <AboutCard title="Languages" className="2xl:col-span-12">
            <Languages />
          </AboutCard>
        </div>

        <AboutCard title="Отзывы клиентов">
          <Clients />
        </AboutCard>
      </div>
    </VCardSection>
  );
};

export default About;
