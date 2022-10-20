import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <header className="h-20 w-full bg-secondary flex justify-between items-center px-5">
        <div className="bg-zinc-700 w-14 h-14"></div>
        <nav className="flex gap-9 items-center">
          <a>Skills</a>
          <a>Projects</a>
          <a>About</a>
          <a>Social-medias</a>
          <button className="w-44 bg-primary h-14 shadow-xl shadow-black">
            Download CV
          </button>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <h2>Thiago Calazans</h2>
            <span>Front-End Developer</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
