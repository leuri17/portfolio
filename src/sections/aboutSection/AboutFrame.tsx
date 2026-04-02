import SocialCard from './SocialCard';

const AboutFrame = () => {
  return (
    <div className="text-center md:text-start">
      <h2 className="text-5xl font-black mb-4">About</h2>
      <div className="text-muted-foreground leading-relaxed text-lg">
        <p className="mb-6">
          I am a Full-Stack Software Engineer with experience building and maintaining web applications across frontend
          and backend systems. I have worked with technologies such as React, TypeScript and Java/Spring, contributing
          to <span className="text-accent-foreground font-bold">scalable and maintainable</span> solutions in enterprise
          environments.
        </p>
        <p className="mb-12">
          Experience in the banking sector taught me the importance of{' '}
          <span className="text-destructive font-bold">security, performance and reliability</span> when building
          software at scale. I collaborate in Agile teams, working closely with developers, QA engineers and product
          managers to deliver robust software. I focus on writing clean, maintainable code and building systems that are
          reliable, scalable and easy to evolve over time.
        </p>
      </div>
      <SocialCard />
    </div>
  );
};

export default AboutFrame;
