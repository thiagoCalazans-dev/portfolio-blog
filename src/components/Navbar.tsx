export function Navbar() {
  return (
    <header className="h-20 w-full bg-terciary flex justify-between items-center px-5">
      <div className="bg-zinc-700 w-14 h-14"></div>
      <nav className="flex gap-9 items-center">
        <a>❏ Skills</a>
        <a>❏ Projects</a>
        <a>❏ About</a>
        <a>❏ Social</a>
        <button className="w-44 bg-primary h-14 shadow-xl shadow-black hover:bg-primary-hover transition-all">
          Download CV
        </button>
      </nav>
    </header>
  );
}
