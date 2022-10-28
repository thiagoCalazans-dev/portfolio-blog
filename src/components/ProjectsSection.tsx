import { Heading } from "./design/Heading";
import icon from "../../public/images/icons/ico_react.svg";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section className="bg-black pt-12 flex flex-col items-center border-primary  border-b-8 px-5">
      <Heading size="lg" className="mb-16">
        ❏ Projects
      </Heading>
      <div className="w-full flex justify-evenly">
        <div className="w-72 h-auto flex flex-col gap-4 p-4 shadow-xl shadow-white bg-primary">
          <Heading className="text-center">project name</Heading>
          <div className="relative w-64 h-64">
            <Image src={icon} alt="" layout="fill" />
          </div>
          <div className="flex gap-2 justify-evenly">
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
          </div>
        </div>
        <div className="w-72 h-auto flex flex-col gap-4 p-4 shadow-xl shadow-white bg-primary">
          <Heading className="text-center">project name</Heading>
          <div className="relative w-64 h-64">
            <Image src={icon} alt="" layout="fill" />
          </div>
          <div className="flex gap-2 justify-evenly">
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
          </div>
        </div>
        <div className="w-72 h-auto flex flex-col gap-4 p-4 shadow-xl shadow-white bg-primary">
          <Heading className="text-center">project name</Heading>
          <div className="relative w-64 h-64">
            <Image src={icon} alt="" layout="fill" />
          </div>
          <div className="flex gap-2 justify-evenly">
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
            <Image src={icon} alt="" width={30} height={30} />
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full mb-4 mt-16">
        <Link href="projects">View More</Link>
      </div>
    </section>
  );
}
