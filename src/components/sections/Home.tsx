import { personal_data } from "@/data/home";
import SocialLinks from "../common/global/SocialLinks";
import HeroImage from "../common/home/HeroImage";
import { landing_background_image } from "@/data/config";
import HeroName from "../common/home/HeroName";
import HomeBackground from "../common/home/HomeBackground";

const hero_job_text_class =
  "font-black sm:tracking-wider select-none 2xl:text-[10.5rem] 2xl:leading-[10.5rem] xl:text-[9rem] xl:leading-[9rem] md:text-[6.5rem] md:leading-[6.5rem] sm:text-[4.5rem] sm:leading-[4.5rem] text-[3.5rem] leading-[3.5rem] text-wrap outlinedPureText";

const Home = () => {
  return (
    <section
      className="!sticky top-0 left-0 z-10 bg-no-repeat bg-center bg-cover"
      id="home"
      style={{ backgroundImage: `url(${landing_background_image})` }}
    >
      <HomeBackground />

      <HeroImage />

      <div className="absolute md:p-8 p-4 rad top-[50%] translate-y-[-50%] z-50">
        <div
          className="uppercase sm:space-y-8"
          style={{ wordBreak: "break-word" }}
        >
          <HeroName />

          <div className="sm:space-y-8">
            <h1 className={hero_job_text_class}>{personal_data.job.part1}</h1>
            <h1 className={hero_job_text_class}>{personal_data.job.part2}</h1>
          </div>

          <div className="bg-white/15 dark:bg-black/15 dark:md:bg-transparent md:bg-transparent rad w-fit">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
