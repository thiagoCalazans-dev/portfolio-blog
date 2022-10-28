import type { GetStaticProps, NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { LandingSection } from "../components/LandingSection";
import { SkillSection } from "../components/SkillsSection";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import { ProjectsSection } from "../components/ProjectsSection";

interface Technology {
  id: string,
  value: number,
  name: string,
  image: {
    url: string,
  }

}

export interface Project {
  id: string,
  name: string,
  cover: {
    url: string,
  },
  libraries: {
    icon: {
      url: string
    }
  }[]

}

interface HomeProps {
  technologies: Technology[]
  projects: Project[]
}

const Home = ({ technologies, projects }: HomeProps) => {

  console.log(projects)

  return (
    <>
      <Navbar />
      <main>
        <LandingSection />
        <SkillSection technologies={technologies} />
        <ProjectsSection projects={projects} />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetStaticProps = async () => {

  const { data } = await client.query({
    query: gql`
    query LandingPage {
  technologies {
    id
    value
    name
    image {
      url
    }
  }
  projects {
    cover {
      url
    }
    id
    name  
    libraries {      
      icon {
        url
      }
    }
  }
}
`
  });

  console.log(data)


  return {
    props: {
      technologies: data.technologies,
      projects: data.projects
    },
  };
}

