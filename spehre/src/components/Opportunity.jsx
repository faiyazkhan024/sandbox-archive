import Button from "./core/Button";
import Grid5X8 from "./core/Grid5X8";
import ColorText from "./core/ColorText";
import Container from "./core/Container";
import BoxShadow from "./core/BoxShadow";
import Typography from "./core/Typography";

import wheel from "../assets/wheel.svg";
import reward from "../assets/reward.svg";

const OPPORTUNITIES = [
  "Update your Profile",
  "Add new skills",
  "Earn points",
  "Increase Profile strength",
];

const Opportunity = () => {
  return (
    <Container bgPrimary100>
      <Typography variant="h2" color="primary">
        <ColorText primaryDark>Wheel of</ColorText> Opportunity
      </Typography>
      <Typography variant="subtitle" color="secondary">
        Update your Profile and keep adding new skills to earn points and gain
        reward.
      </Typography>
      <Button size="large">Know more</Button>

      <div className="flex translate-y-36 gap-14">
        <div className="relative max-w-md">
          <img src={wheel} alt="Wheel of Opportunities" />
          <BoxShadow className="-top-14 -left-14" />
        </div>

        <ul className="mt-14 space-y-4 text-secondary-500 text-xl font-medium leading-[35px]">
          {OPPORTUNITIES.map((opportunity, idx) => (
            <li key={idx} className="flex gap-2">
              <img src={reward} alt="Reward" />
              <Typography>{opportunity}</Typography>
            </li>
          ))}
        </ul>
      </div>

      {/* Absolute Item */}
      <Grid5X8 className="right-0 top-48" />
    </Container>
  );
};

export default Opportunity;
