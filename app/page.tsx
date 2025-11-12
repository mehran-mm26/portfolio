import Link from 'next/link';
import Navigation from '../components/navigation';
import SectionHeader from '@/components/section-header';
import Hero from '@/components/home/hero';
import WorkExperienceSection from '@/components/home/work-experience';
import SkillSetSection from '@/components/home/skill-set';
import ContactSection from '@/components/home/contact';
import Projects from "@/components/home/projects";
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className='relative'>
      <Navigation />
      <main>
        <Hero />

        <section className='mb-28'>
          <div className='container'>
            <SectionHeader
              emoji={'👨‍💻'}
              title={'About'}
              link={<a rel={"noreferrer noopener"} target={"_blank"} href={'https://www.linkedin.com/in/mehran13mome/'}>{'View LinkedIn'}</a>}
            />
            <WorkExperienceSection />

            <SkillSetSection />
          </div>
        </section>

        <section className='mb-28'>
          <div className='container'>
            <SectionHeader
                emoji={'🚀'}
                title={'Projects'}
            />

            <Projects />

          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
