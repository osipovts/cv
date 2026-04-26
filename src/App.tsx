import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
