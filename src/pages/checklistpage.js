
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Checklist from '../components/Checklist/Checklist';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <Checklist />
        <BgAnimation />
       </Section> 
    </Layout>
  );
};

export default Home;
