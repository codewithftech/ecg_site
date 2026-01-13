import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import MissionValues from '../components/about/MissionValues';
import CompanyTimeline from '../components/about/CompanyTimeline';
import WhyChooseUs from '../components/about/WhyChooseUs';
import ComplianceCertification from '../components/about/ComplianceCertification';
import AboutFinalCta from '../components/about/AboutFinalCta';

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <MissionValues />
      <CompanyTimeline />
      <WhyChooseUs />
      <ComplianceCertification />
      <AboutFinalCta />
    </>
  );
};

export default About;
