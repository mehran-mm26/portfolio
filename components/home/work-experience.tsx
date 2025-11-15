import { workExperiences } from "@/constants";
import WorkExperiences from "../work-experiences";

export default function WorkExperienceSection() {
  return (
    <div className='flex flex-col sm:flex-row gap-16'>
      <section className='flex flex-col sm:w-1/2 mb-16'>
        <h2 className=' font-medium text-lg text-gray-500 mb-4'>
          {'My Story'}
        </h2>
          <div className={'flex flex-col gap-2'}>
              <p className=' leading-6 text-zinc-800'>
                  {'Over the past 10 years, since I chose software development as my profession, I\'ve had the chance to work with diverse teams across various working environments—remote, onsite, full-time, and freelance. Each experience taught me something valuable, not only about writing better code but also about understanding people, collaboration, and communication.'}
              </p>
              <p className='leading-6 text-zinc-800'>
                  {
                      'I began my journey with Java and Android development, and over the years, evolved into a full-stack developer with a strong focus on frontend engineering. Along the way, I worked on a range of exciting projects—from employee management and smart parking systems to security-focused authentication platforms and admin dashboards. But beyond the technical challenges, what really stood out to me was the human side of software development.'
                  }
              </p>
              <p className='leading-6 text-zinc-800'>
                  {
                      'In recent years, I’ve intentionally shifted my focus toward developing soft skills—mentoring junior developers, facilitating better teamwork, leading small groups, and creating an environment where collaboration leads to efficiency. I’ve come to believe that while technical knowledge gets projects off the ground, it\'s soft skills that help teams truly thrive.'
                  }
              </p>
              <p className='leading-6 text-zinc-800'>
                  {
                      'Looking ahead, I’m planning to dive deeper into the fields of artificial intelligence and cybersecurity, combining my software background with emerging technologies to build secure, intelligent, and impactful solutions.'
                  }
              </p>
          </div>

      </section>
      <section className='flex flex-col sm:w-1/2'>
        <h2 className=' font-medium text-lg text-gray-500 mb-4'>
          {"Where I've Worked"}
        </h2>

        <WorkExperiences workExperiences={workExperiences} />
      </section>
    </div>
  );
}
