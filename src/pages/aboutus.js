import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import AboutUs from '../components/AboutUs/AboutUs';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <AboutUs />
        <BgAnimation />
       </Section> 
    </Layout>
  );
};

export default Home;
