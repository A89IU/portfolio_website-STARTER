import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Description from '../components/Description/Description';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid> 
        <Description />
        <BgAnimation />
       </Section> 
    </Layout>
  );
};

export default Home;
