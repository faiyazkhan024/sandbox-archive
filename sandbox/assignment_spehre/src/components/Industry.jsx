import Grid5x8 from "./core/Grid5X8";
import Container from "./core/Container";
import Rectangle from "./core/Rectangle";
import ColorText from "./core/ColorText";
import Typography from "./core/Typography";

import preview5 from "../assets/preview-5.svg";

const Industry = () => {
  return (
    <Container className="pt-48 pb-56">
      <Typography variant="h2" color="primary">
        <ColorText primaryDark>Stay updated about</ColorText> your industry
      </Typography>
      <Typography variant="subtitle" color="secondary">
        Get up to date news about your industry. Be a part of latest discussions
        in your industry
      </Typography>
      <img src={preview5} alt="Preview 5" className="mx-auto" />

      {/* Absolute Items */}
      <Grid5x8 className="right-0 top-96" />
      <Grid5x8 className="left-0 bottom-40" />
      <Rectangle className="max-w-xl h-[751px] top-72 right-0" />
      <Rectangle className="max-w-2xl h-[751px] left-0 bottom-24" />
    </Container>
  );
};

export default Industry;
