import Navbar from './components/Navbar';
import SOSButton from './components/SOSButton';
import Hero from './components/Hero';
import EmergencyContact from './components/EmergencyContact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Precautions from './components/Precautions';
import styles from './styles/home.module.css'

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="mx-auto">
        <SOSButton/>
        <Hero/>
        <EmergencyContact/>
        <Precautions/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  );
}
