"use client";
import { personal_data } from "@/data/home";
import Image from "next/image";
import styles from "../../../styles.module.css";
import { cn } from "@/lib/utils";
import HeroSpinningText from "../global/HeroSpinningText";
const { fadeIn } = styles;

const HeroImage = () => {
  return (
    <div className="absolute left-0 top-0 size-full z-40">
      <Image
        src={personal_data.image}
        alt={personal_data.name}
        fill
        sizes="75vw"
        className={cn(
          "object-cover !w-auto !h-[112%] -z-10 duration-1000",
          fadeIn
        )}
        style={{
          left: "unset",
          top: "unset",
          right: 0,
          bottom: "-32px",
        }}
      />

      <div className="sm:block hidden">
        <HeroSpinningText />
      </div>
    </div>
  );
};

export default HeroImage;
