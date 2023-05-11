import Grid4X8 from "./core/Grid4X8";
import Container from "./core/Container";
import ColorText from "./core/ColorText";
import Rectangle from "./core/Rectangle";
import Typography from "./core/Typography";
import IconButton from "./core/IconButton";

import preview2 from "../assets/preview-2.svg";
import checkMark from "../assets/check-circle.svg";
import arrowLeft from "../assets/arrow-left-circle.svg";
import arrowRight from "../assets/arrow-right-circle.svg";

const BENEFITS = [
  {
    title: "One Workflow",
    description:
      "Easily collaborate with terms to find & hire the right candidate",
  },
  {
    title: "Easy Applying",
    description: "Create account that will engage your profile",
  },
];

const STEPS = [
  {
    title: "Login or Register",
    description: "Follow the steps and you’re just ready to get started.",
  },
  {
    title: "Fill your Personal Data",
    description: "Finish your register and complete your personal data.",
  },
  {
    title: "Create your Resume",
    description: "Create your resume that matches your background. ",
  },
  {
    title: "Find the Match Job",
    description: "Look for job vacancy and immediately get your dream job.",
  },
];

const GetStarted = () => {
  return (
    <Container className="text-start">
      <Typography variant="h2" color="primary">
        <ColorText primaryDark>Get</ColorText> Started!
      </Typography>

      <div className="relative flex items-center w-full gap-2 pt-28">
        <IconButton>
          <img src={arrowLeft} />
        </IconButton>

        <div className="center gap-14">
          <img src={preview2} alt="Preview 2" className="flex-1 max-w-2xl" />

          <div className="flex-1 max-w-md">
            <Typography variant="h4" color="primary">
              Login or Register
            </Typography>
            <Typography variant="xl" color="secondary" className="mt-4 mb-7">
              Follow the steps and you’re just ready to get started to get your
              dream job.
            </Typography>
            <ul className="space-y-4">
              {BENEFITS.map(({ title, description }, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <img src={checkMark} alt="Check Mark" className="mt-1" />
                  <Typography color="secondary" className="max-w-xs">
                    <b>{title}.</b> {description}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <IconButton>
          <img src={arrowRight} />
        </IconButton>

        {/* Absolute Items */}
        <Rectangle className="max-w-2xl -left-6" />
      </div>

      <ul className="flex justify-between pt-32 gap-14">
        {STEPS.map(({ title, description }, idx) => (
          <li key={idx} className="flex-1 group">
            <p className="w-10 h-10 text-3xl font-semibold text-center text-white align-middle rounded-full bg-primary-300 group-hover:bg-primary">
              {idx + 1}
            </p>
            <Typography
              variant="h6"
              className="mt-5 mb-1.5  group-hover:text-primary"
            >
              {title}
            </Typography>
            <Typography variant="sm" color="secondary">
              {description}
            </Typography>
          </li>
        ))}
      </ul>

      {/* Absolute Items */}
      <Rectangle className="right-0 top-10 h-36" />
      <Grid4X8 className="right-0 top-[183px]" />
    </Container>
  );
};

export default GetStarted;
