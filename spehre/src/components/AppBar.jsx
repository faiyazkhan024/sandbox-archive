import Button from "./core/Button";
import ListLink from "./core/ListLink";
import logo from "../assets/spehre-logo.png";

const AppBar = () => {
  return (
    <header className="flex justify-between gap-4 py-4 px-14 bg-primary-100">
      <img src={logo} alt="Spehre Logo" className="h-12" />

      <nav className="flex items-center gap-12">
        <ul className="flex gap-6">
          <ListLink variant="lg">About Us</ListLink>
          <ListLink variant="lg">
            For Companies <span className="text-primary">(Coming soon)</span>
          </ListLink>
          <ListLink variant="lg">Testimonials</ListLink>
          <ListLink variant="lg">Our Team</ListLink>
        </ul>

        <Button>Login/Signup</Button>
      </nav>
    </header>
  );
};

export default AppBar;
