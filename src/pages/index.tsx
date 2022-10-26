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

interface HomeProps {
  technologies: Technology[]
}

const Home = ({ technologies }: HomeProps) => {

  console.log(technologies)

  return (
    <>
      <Navbar />
      <main>
        <LandingSection />
        <SkillSection technologies={technologies} />
        <ProjectsSection />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetStaticProps = async () => {

  const { data } = await client.query({
    query: gql`
    query Technologies {
      technologies {
        id
        value
        name
        image {
          url
        }      
      }
    }`
  });

  console.log(data)


  return {
    props: {
      technologies: data.technologies
    },
  };
}

