import Button from "./core/Button";
import Grid4X8 from "./core/Grid4X8";
import Grid5X8 from "./core/Grid5X8";
import Container from "./core/Container";
import ColorText from "./core/ColorText";
import BoxShadow from "./core/BoxShadow";
import Typography from "./core/Typography";

import HRCard from "../assets/hr-card.svg";
import preview1 from "../assets/preview-1.svg";
import easyApply from "../assets/easy-apply.svg";
import JaneCooper from "../assets/jane-cooper.svg";

const Welcome = () => {
  return (
    <Container className="pb-44">
      <Typography variant="h2" color="primary">
        Create a <ColorText primaryDark>Perfect CV </ColorText>
        & Get Your Dream Job
        <img
          src={easyApply}
          alt="Easy Apply"
          className="absolute w-32 -right-44 bottom-3"
        />
      </Typography>

      <Typography variant="subtitle" color="secondary">
        <ColorText primary>Spehre</ColorText> is a platform that will help you
        create a perfect CV for your desired job.
      </Typography>

      <div className="flex justify-center gap-6 mb-28">
        <Button size="large">Sign In</Button>
        <Button size="large">Create CV</Button>
      </div>

      <div className="relative w-full max-w-2xl">
        <BoxShadow className="top-14 left-10" />
        <img src={preview1} alt="Preview 1" />
      </div>

      {/* Absolute Items */}
      <Grid5X8 className="left-0 top-44" />
      <Grid4X8 className="right-0 bottom-48" />
      <img
        src={JaneCooper}
        alt="Jane Cooper"
        className="absolute right-0 w-80 top-72"
      />
      <img
        src={HRCard}
        alt="Hr Card"
        className="absolute w-80 right-14 bottom-96"
      />
      <img
        src={HRCard}
        alt="Hr Card"
        className="absolute w-80 right-32 bottom-60"
      />
    </Container>
  );
};

export default Welcome;
