import Button from "./core/Button";
import Grid4X8 from "./core/Grid4X8";
import Grid5X8 from "./core/Grid5X8";
import ColorText from "./core/ColorText";
import Container from "./core/Container";
import Typography from "./core/Typography";

import preview3 from "../assets/preview-3.svg";

const BuildCV = () => {
  return (
    <Container bgPrimary100 className="pb-96">
      <Typography variant="h2" color="primary">
        <ColorText primaryDark>Build Professional</ColorText> CV
      </Typography>
      <Typography variant="subtitle" color="secondary">
        Upscale your CV with help of Spehre to get your dream job in a quicker
        way possible.
      </Typography>
      <Button size="large">Know more</Button>

      {/* Absolute Items */}
      <img
        src={preview3}
        alt="Preview 3"
        className="absolute left-0 right-0 max-w-2xl mx-auto -bottom-64"
      />
      <Grid4X8 className="right-0 top-40" />
      <Grid5X8 className="left-0 -bottom-20" />
    </Container>
  );
};

export default BuildCV;
