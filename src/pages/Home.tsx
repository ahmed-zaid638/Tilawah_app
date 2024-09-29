import Hero from "../components/pages/Home/Hero";
import QuranReading from "../components/pages/Home/QuranReading";
import QuranListening from "../components/pages/Home/QuranListening";
import Footer from "../components/pages/Home/Footer";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <QuranReading />
      <QuranListening />
      <Footer />
    </div>
  );
}

export default Home;
