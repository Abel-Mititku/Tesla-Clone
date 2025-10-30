import CarBody from "./component/carbody";
import Hero from "./component/herosection";
import TeslaLogo from "./component/teslalogo";

export default function Page() {
  return (
    <div>
      <Hero />
      <TeslaLogo />
      <CarBody />
    </div>
  );
}
