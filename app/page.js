import Layout from '@/components/layout/Layout';
import About2 from '@/components/sections/About2';
import AlfredFeature from '@/components/sections/AlfredFeature';
import Callback1 from '@/components/sections/Callback1';
import Services3 from '@/components/sections/Services3';
import Slider1 from '@/components/sections/Slider1';

export const metadata = {
  title: 'Motta Financial — Tech-Forward CPAs. Powered by ALFRED Ai.',
  description:
    'Motta Financial is a tech-forward CPA firm built around proactive tax strategy, integrated advisory, and the full Office of the CFO. Boston · Las Vegas.',
};

export default function Home() {
  return (
    <>
      <Layout headerStyle={5} footerStyle={1} transparent>
        <Slider1 />
        <About2 />
        <AlfredFeature />
        <Services3 />
        <Callback1 />
      </Layout>
    </>
  );
}
