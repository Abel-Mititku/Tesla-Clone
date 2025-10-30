import CarBody from "./components/carbody";
import Hero from "./components/herosection";
import Navigation from "./components/navbar";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <main>
          <Hero />
          <Navigation />
          <CarBody />
        </main>
      </Suspense>
    </div>
  );
}
