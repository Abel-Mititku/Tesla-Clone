import Navigation from "./components/navbar";
import HeaderHero from "./components/headhero";
import FirstSlide from "./components/firstslider";
import StaticSection from "./components/staticsection";
import DrivingSection from "./components/drivingsection";
import FooterSlide from "./components/footerslide";
import Footer from "./components/footer";
import AskQuestion from "./components/askquestion";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeaderHero />
      <FirstSlide />
      <StaticSection />
      <DrivingSection />
      <FooterSlide />
      <Footer />
      <AskQuestion />
    </div>
  );
}
