"use client";
import {
  faUser,
  faList,
  faLayerGroup,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
  const sections = [
    { name: "about-me", Icon: faUser },
    { name: "services", Icon: faList },
    { name: "portfolio", Icon: faLayerGroup },
    { name: "contact", Icon: faEnvelope },
  ];

  const handleClick = (name: string) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("flex lg:flex-col flex-row lg:space-y-4 space-x-4 lg:space-x-0", className)}>
      {sections.map(({ name, Icon }) => (
        <button
          key={name}
          className={cn(
            "group flex items-center lg:justify-start justify-center gap-4 lg:p-4 p-3 rounded-2xl transition-all duration-300 hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          )}
          onClick={() => handleClick(name)}
        >
          <FontAwesomeIcon
            icon={Icon}
            className="lg:size-5 size-4 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-medium capitalize lg:block hidden">
            {name.split("-").join(" ")}
          </span>
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
