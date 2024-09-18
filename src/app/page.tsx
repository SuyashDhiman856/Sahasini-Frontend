import Navbar from './components/Navbar';
import SOSButton from './components/SOSButton';
import Hero from './components/Hero';
import EmergencyContact from './components/EmergencyContact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Precautions from './components/Precautions';
import Map from './components/Map';
import styles from './styles/home.module.css'
import Favicon from './static/images/Logo and Favicon/sahasiniFav.ico'; 

export default function Home() {
  return (
    <>
        <link rel="icon" href={Favicon.src} sizes="any" />
        <Navbar/>
        <div style={{margin: "0 auto"}} className='container'>
        <Hero/>
        <SOSButton/>
        <Map/>
        <EmergencyContact/>
        <Precautions/>
        <Testimonials/>
        </div>
        <Footer/>
    </>
  );
}
