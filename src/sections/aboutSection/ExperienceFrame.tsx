import ExperienceItem from '@/components/experience/ExperienceItem';
import { experienceList } from '@/data/experience';

const ExperienceFrame = () => {
  return (
    <div className="space-y-20">
      <h2 className="text-5xl font-black mb-4">Experience</h2>

      {experienceList.map((exp) => (
        <ExperienceItem experience={exp} key={exp.title} />
      ))}
    </div>
  );
};

export default ExperienceFrame;
