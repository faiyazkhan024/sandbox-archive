import { IoGrid } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import {
  BsChatTextFill,
  BsFillEnvelopePaperFill,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsLink45Deg,
  BsCardImage,
} from "react-icons/bs";
import { GoListOrdered, GoListUnordered } from "react-icons/go";

import community1 from "../assets/community-1.webp";
import community2 from "../assets/community-2.jpg";
import community3 from "../assets/community-3.jpg";
import community4 from "../assets/community-4.webp";

export const POST_OPTIONS = [
  { value: "text", name: "text" },
  { value: "image/video", name: "image/video" },
];

export const RTE_TOOLBAR_ICON = [
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsLink45Deg,
  BsCardImage,
  GoListOrdered,
  GoListUnordered,
];

export const TAGS = [
  "#designs",
  "#designsIndia",
  "#logoDesigns",
  "#webPageDesigns",
  "#ui-uxDesign",
  "#figmaDesigns",
  "#designerCommunity",
  "#adobeXDDesigns",
  "#openSourceDesigns",
];

export const NAV_ITEMS = [
  {
    to: "/home",
    name: "Home",
    icon: IoGrid,
    isActive: true,
  },
  {
    to: "/message",
    name: "Message",
    icon: BsChatTextFill,
  },
  {
    to: "/invites?type=job",
    name: "Job Invites",
    icon: BsFillEnvelopePaperFill,
  },
  {
    to: "/analytic",
    name: "Analytic",
    icon: IoMdAnalytics,
  },
  {
    to: "/profile",
    name: "My Profile",
    icon: FaUserAlt,
  },
];

export const COMMUNITY_DATA = [
  {
    to: "#",
    logo: community1,
    title: "Indonesia UI Designer",
    subtitle: "734 members",
  },
  {
    to: "#",
    logo: community2,
    title: "Indonesia UX Resea..",
    subtitle: "125 members",
  },
  ,
  {
    to: "#",
    logo: community3,
    title: "Prototyping Club",
    subtitle: "891 members",
  },
  ,
  {
    to: "#",
    logo: community4,
    title: "Indonesia UI Designer",
    subtitle: "241 members",
  },
];

export const TOP_USERS = [
  {
    to: "#",
    logo: community1,
    title: "Ridwan Beler",
    subtitle: "159 like in last 2 days",
    action: "View Profile",
  },
  {
    to: "#",
    logo: community2,
    title: "Maria Galau",
    subtitle: "121 likes in last 2 days",
    action: "View Profile",
  },
  ,
  {
    to: "#",
    logo: community3,
    title: "Ridwan Beler",
    subtitle: "159 likes in last 2 days",
    action: "View Profile",
  },
  ,
  {
    to: "#",
    logo: community3,
    title: "Ridwan Beler",
    subtitle: "159 likes in last 2 days",
    action: "View Profile",
  },
  {
    to: "#",
    logo: community3,
    title: "Ridwan Beler",
    subtitle: "159 likes in last 2 days",
    action: "View Profile",
  },
];
