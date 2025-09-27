"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon as FAI } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faList, faLayerGroup, faHome } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 200) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const sections = [
    { name: "about-me", Icon: faUser },
    { name: "services", Icon: faList },
    { name: "portfolio", Icon: faLayerGroup },
    { name: "contact", Icon: faEnvelope },
  ];

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={cn("fixed z-30 bottom-0 left-1/2 max-w-full -translate-x-1/2 duration-300", show ? "-translate-y-4" : "translate-y-full")}>
        <div className="flex items-center gap-2 pb-3 bg-[#bbb]/25 dark:bg-[#666]/25 backdrop-blur-lg rounded-full duration border border-[var(--border)] px-4 py-2">
          {sections.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <button
                key={idx}
                onClick={() => scrollTo(item.name.toLowerCase())}
                className="aspect-square w-12 h-12 rounded-full transition-colors duration-300 group bg-[var(--bg-secondary)] hover:bg-[var(--main)] flex-center border border-[var(--border)]"
                title={item.name.split("-").join(" ")}
              >
                <FAI icon={Icon} className="text-[var(--text-primary)] group-hover:text-white duration-300" />
              </button>
            );
          })}
        </div>
      </nav>

      <div
        className={cn("fixed bottom-0 right-4 size-16 flex-center border border-[var(--border)] z-40 cursor-pointer group rounded-full bg-[var(--bg-primary)] duration-300", show ? "sm:-translate-y-4 -translate-y-24" : "translate-y-full")}
        onClick={() => scrollTo("home")}
        aria-label="back to home section"
      >
        <div className="bg-[var(--bg-secondary)] rounded-full size-10 group-hover:size-12 flex-center border border-[var(--border)] duration-300 group-hover:bg-[var(--main)]">
          <FAI icon={faHome} className="text-[var(--text-primary)] group-hover:text-white duration-300" />
        </div>
      </div>
    </>
  );
};

export default NavLinks;
