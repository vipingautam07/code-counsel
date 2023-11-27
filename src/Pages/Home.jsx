import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Subscriber } from "../components/Subscriber";
import 'animate.css';


const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Subscriber />
      <Footer />

    </main>
  )
}

export default Home