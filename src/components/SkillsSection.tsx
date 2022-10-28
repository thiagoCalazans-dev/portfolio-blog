import { Heading } from "./design/Heading";
import { TechnologyProgress } from "./TechnologyProgress";

interface Techlonogy {
  id: string;
  value: number;
  name: string;
  image: {
    url: string;
  };
}

interface SkillSectionProps {
  technologies: Techlonogy[];
}

export function SkillSection({ technologies }: SkillSectionProps) {
  return (
    <section className="bg-terciary pt-12 flex flex-col items-center border-secondary  border-b-8">
      <Heading size="lg" className="mb-14 text-white flex items-center">
        ❏ Skills
      </Heading>
      <div className="grid grid-cols-2 gap-12 mb-28">
        {technologies?.map((tech) => (
          <TechnologyProgress tech={tech} key={tech.id} />
        ))}
      </div>
    </section>
  );
}
