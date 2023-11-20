import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import OffcanvasExample from './components/OffcanvasExample';
import 'animate.css';

const App = () => {
  return (
    <main className="relative">
      {/* <Nav /> */}
      <OffcanvasExample />
      <Hero />
      {/* <Card /> */}
      <Subscribe />
      <Footer />

    </main>
  )
}

export default App
