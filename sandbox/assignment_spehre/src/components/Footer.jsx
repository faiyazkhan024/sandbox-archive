import ListLink from "./core/ListLink";
import Typography from "./core/Typography";

import map from "../assets/map.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import copyright from "../assets/copyright.svg";
import spehreLogo from "../assets/spehre-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="flex px-6 py-16 justify-evenly bg-primary-100">
        <div className=" max-w-[192px]">
          <img src={spehreLogo} alt="Spehre Logo" className="h-12 mb-3" />
          <Typography variant="xs" color="primary-dark">
            Spehre is a platform that will help you create a perfect CV for your
            desired job.
          </Typography>
        </div>

        <div>
          <Typography variant="h6" color="primary-dark">
            Links
          </Typography>
          <ul className="mt-5 space-y-3">
            <ListLink variant="xs">About us</ListLink>
            <ListLink variant="xs">Profile</ListLink>
            <ListLink variant="xs">Jobs</ListLink>
            <ListLink variant="xs">Reviews</ListLink>
          </ul>
        </div>

        <div>
          <Typography variant="h6" color="primary-dark">
            Help
          </Typography>
          <ul className="mt-5 space-y-3">
            <ListLink variant="xs">My Account</ListLink>
            <ListLink variant="xs">Returns & Refunds</ListLink>
            <ListLink variant="xs">Payment Policy</ListLink>
            <ListLink variant="xs">FAQ</ListLink>
          </ul>
        </div>

        <div>
          <Typography variant="h6" color="primary-dark">
            Contact Us
          </Typography>
          <ul className="mt-5 space-y-3">
            <ListLink flex variant="xs">
              <img src={map} alt="map" />
              2464 Royal Ln. Mesa, New Jersey 45463
            </ListLink>
            <ListLink flex variant="xs">
              <img src={phone} alt="phone" />
              (505) 555-0125
            </ListLink>
            <ListLink flex variant="xs">
              <img src={email} alt="email" />
              connect@ewing
            </ListLink>
          </ul>
        </div>
      </footer>

      <p className="flex justify-center gap-2 py-3">
        <img src={copyright} alt="copyright" /> Spehre 2022. All Rights
        Reserved.
      </p>
    </>
  );
};

export default Footer;
