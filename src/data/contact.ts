/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  faFacebook as facebook,
  faGithub as github,
  faLinkedin as linkedin,
  faInstagram as instagram,
  faYoutube as youtube,
  faSquareUpwork as upwork,
  faXTwitter as x,
  faDribbble as dribble,
  faBehance as behance,
} from "@fortawesome/free-brands-svg-icons";

/*
  Available Social media icons
  |
  1 - facebook
  2 - github
  3 - linkedin
  4 - instagram
  5 - youtube
  6 - upwork
  7 - dribble
  8 - x
  9 - behance
*/

// ==================[ Social Links ]================== //
export const social_links = [
  // 1
  {
    Icon: dribble,
    link: "https://dribble.com",
    color: "pink",
  },

  // 2
  {
    Icon: github,
    link: "https://github.com",
    color: "black",
  },

  // 3
  {
    Icon: linkedin,
    link: "https://linkedin.com",
    color: "blue",
  },

  // 4
  {
    Icon: x,
    link: "https://x.com",
    color: "black",
  },

  // 5
  {
    Icon: instagram,
    link: "https://instagram.com",
    color: "fuchsia",
  },

  // 6
  {
    Icon: behance,
    link: "https://behance.com",
    color: "blue",
  },

  // 7
  {
    Icon: upwork,
    link: "https://upwork.com",
    color: "green",
  },

  // 8
  {
    Icon: youtube,
    link: "https://youtube.com",
    color: "red",
  },
] as const;
//

// ==================[ Contact Info ]================== //
export const contact_info = [
  // 1
  {
    title: "Телефон",
    info: "+375(44) 577 77 24",
  },

  // 2
  {
    title: "Email",
    info: "karelinseo@gmail.com",
  },

  // 3
  {
    title: "Location",
    info: "New york, 1322",
  },
] as const;
//
