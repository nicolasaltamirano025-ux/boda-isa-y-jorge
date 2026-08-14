import { PasswordGate } from "./components/PasswordGate";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { GalleryStrip } from "./components/GalleryStrip";
import { Hero } from "./sections/Hero";
import { Countdown } from "./sections/Countdown";
import { Programa } from "./sections/Programa";
import { ComoLlegar } from "./sections/ComoLlegar";
import { Hospedaje } from "./sections/Hospedaje";
import { RecomendacionesViaje } from "./sections/RecomendacionesViaje";
import { MesaRegalos } from "./sections/MesaRegalos";
import { DressCode } from "./sections/DressCode";
import { RSVP } from "./sections/RSVP";

function App() {
  return (
    <PasswordGate>
      <Nav />
      <main>
        <Hero />
        <GalleryStrip />
        <Countdown />
        <Programa />
        <ComoLlegar />
        <Hospedaje />
        <RecomendacionesViaje />
        <MesaRegalos />
        <DressCode />
        <RSVP />
      </main>
      <Footer />
    </PasswordGate>
  );
}

export default App;
