import { Heading } from "./design/Heading";
import { TechnologyProgress } from "./technologyProgress";

interface Techlonogy {
  id: string,
  value: number,
  name: string,
  image: {
    url: string,
  }
}

interface SkillSectionProps {
  technologies: Techlonogy[]
}

export function SkillSection({ technologies }: SkillSectionProps) {

  return (
    <section className="bg-terciary pt-12 flex flex-col items-center">
      <Heading className="mb-14">Skills</Heading>
      <div className="grid grid-cols-2 gap-12 mb-28">
        {
          technologies?.map((tech) => (
            <TechnologyProgress tech={tech} key={tech.id} />
          ))}
      </div>
    </section>
  );
}



