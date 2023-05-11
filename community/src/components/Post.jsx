import { AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

import Comment from "./Comment";
import Image from "./core/Image";
import Button from "./core/Button";
import Typography from "./core/Typography";

const Post = ({ postImg, profileImg }) => {
  return (
    <article className="relative py-6 space-y-4 card">
      <div className="flex items-center gap-2 px-8">
        <Image src={profileImg} profile />
        <div>
          <Typography variant="h4">Karim Saif</Typography>
          <Typography>
            14 min ago <b>Figma Community</b>
          </Typography>
        </div>
      </div>

      <Typography className="px-8">
        What is the reason guys that i updated some type of content and they
        approved it and today I tried to upload they say we no longer accept
        this type of content.
      </Typography>

      <Image src={postImg} banner />

      <div className="flex items-center gap-6 px-8 pb-4 text-gray-400 border-b">
        <Button variant="text" icon={AiFillLike} className="text-blue-500 ">
          1.5k
        </Button>
        <Button variant="text" icon={BiCommentDetail}>
          45
        </Button>
        <Button variant="text" icon={BsSend} />
      </div>

      <Comment />
    </article>
  );
};

export default Post;
