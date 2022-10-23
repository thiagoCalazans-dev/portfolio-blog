import type { NextPage } from "next";
import Image from "next/image";
import { Heading } from "../components/design/Heading";
import photo from "../../public/images/picwish.png";
import { Navbar } from "../components/Navbar";
import { LandingSection } from "../components/LandingSection";
import { SkillSection } from "../components/SkillsSection";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <LandingSection />
        <SkillSection />
      </main>
    </>
  );
};

export default Home;
