import Button from "./core/Button";
import Grid4X8 from "./core/Grid4X8";
import Rectangle from "./core/Rectangle";
import Container from "./core/Container";
import ColorText from "./core/ColorText";
import Typography from "./core/Typography";

import preview4 from "../assets/preview-4.svg";
import checkMark from "../assets/check-circle.svg";

const PERKS = [
  "Checkout new job opportunities in your field.",
  "Apply to jobs and check theirs status get job invites in your industry.",
  "Easy to apply Jobs.",
];

const CPandAP = () => {
  return (
    <Container className="text-start pt-96">
      <Typography variant="h2" color="primary" className="mb-12">
        <ColorText primaryDark>Check your</ColorText> Profile{" "}
        <ColorText primaryDark>&</ColorText>{" "}
        <ColorText primaryDark>Application</ColorText> Progress
      </Typography>

      <div className="relative gap-16 px-20 center py-14">
        <img src={preview4} alt="Preview 4" />

        <div className="space-y-8">
          <ul className="max-w-md space-y-2">
            {PERKS.map((opportunity, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img src={checkMark} alt="check mark" className="mt-1.5" />
                <Typography variant="xl" color="secondary">
                  {opportunity}
                </Typography>
              </li>
            ))}
          </ul>
          <Button size="large">Know more</Button>
        </div>

        {/* Absolute Item */}
        <Rectangle className="bottom-0 max-w-2xl -left-16" />
      </div>

      {/* Absolute Items */}
      <Grid4X8 className="top-[216px] right-0" />
      <Grid4X8 className="left-0 bottom-[78px]" />
    </Container>
  );
};

export default CPandAP;
