import type { GetStaticProps, NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { LandingSection } from "../components/LandingSection";
import { SkillSection } from "../components/SkillsSection";
import { gql } from "@apollo/client";
import client from "../lib/apollo";

interface Technology {
  id: string,
  value: number,
  name: string,
  image: {
    url: string,
  }
}

interface HomeProps {
  data: Technology[]
}

const Home = ({ data: technologies }: HomeProps) => {

  console.log(technologies)

  return (
    <>
      <Navbar />
      <main>
        <LandingSection />
        <SkillSection technologies={technologies} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
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


  const { technologies } = data

  console.log(technologies)


  return {
    props: {
      technologies: technologies
    },
  };
}

