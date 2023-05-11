import Container from "./core/Container";

import client1 from "../assets/client-1.svg";
import client2 from "../assets/client-2.svg";
import client3 from "../assets/client-3.svg";
import client4 from "../assets/client-4.svg";
import client5 from "../assets/client-5.svg";
import client6 from "../assets/client-6.svg";
import client7 from "../assets/client-7.svg";

const CLIENTS = [client1, client2, client3, client4, client5, client6, client7];

const Clients = () => {
  return (
    <Container bgPrimary100>
      <ul className="flex items-center justify-between w-full">
        {CLIENTS.map((client, idx) => (
          <li key={idx}>
            <img src={client} alt="Client" className="w-24" />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Clients;
