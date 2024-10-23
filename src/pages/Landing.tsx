import Hero from "../components/pages/Landing/Hero";
import QuranReading from "../components/pages/Landing/QuranReading";
import QuranListening from "../components/pages/Landing/QuranListening";
import Footer from "../components/pages/Landing/Footer";

function Landing() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <QuranReading />
      <QuranListening />
      <Footer />
    </div>
  );
}

export default Landing;
