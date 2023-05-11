import { CiServer } from "react-icons/ci";

import Chip from "./core/Chip";
import Image from "./core/Image";
import Button from "./core/Button";
import Typography from "./core/Typography";

import banner from "../assets/banner.png";
import community from "../assets/community.avif";

import { TAGS } from "../data";

const CommunityHeader = () => {
  return (
    <section className="max-w-6xl pb-8 mx-auto space-y-8 card">
      <Image src={banner} banner className="h-44 rounded-t-xl" />

      <div className="relative flex items-start justify-between px-6">
        <Image src={community} profile className="absolute w-40 h-40 -top-24" />
        <div className="ml-48">
          <Typography variant="h2">DesignersIndia</Typography>
          <Typography variant="xs" flex>
            <CiServer /> 12.3k Members
          </Typography>
        </div>
        <Button variant="outlined">Manage Community</Button>
      </div>

      <div className="px-6 space-y-2">
        <Typography>
          Welcome to <b>DeveloperIndia</b>. This page dedicated to bringing
          together developers from India and around the world to share their
          knowledge, experience insights in the field of design.
        </Typography>
        <Typography variant="sm">Created on 23 February 2023</Typography>
      </div>

      <div className="flex flex-wrap gap-4 px-6">
        <Typography variant="h4" className="w-full">
          Related tags
        </Typography>
        {TAGS.map((tag, idx) => (
          <Chip key={tag + idx}>{tag}</Chip>
        ))}
      </div>
    </section>
  );
};

export default CommunityHeader;
