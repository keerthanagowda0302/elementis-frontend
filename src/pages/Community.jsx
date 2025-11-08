import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import Introduction from '../components/Introduction';
import WellnessSanctuary from '../components/WellnessSanctuary';
import StorySection from '../components/StorySection';
import Sustainability from '../components/Sustainability';
import MembershipForm from '../components/MembershipForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHero />
      <Introduction />
      <WellnessSanctuary />
      <StorySection />
      <Sustainability />
      <MembershipForm />
      <Footer />
    </>
  );
}