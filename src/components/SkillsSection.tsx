import { Heading } from "./design/Heading";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";

import htmlIcon from "../../public/images/icons/ico_html5.svg";
import cssIcon from "../../public/images/icons/ico_css3.svg";
import jsIcon from "../../public/images/icons/ico_js.svg";
import reactIcon from "../../public/images/icons/ico_react.svg";
import nodeIcon from "../../public/images/icons/ico_nodejs.svg";
import tddIcon from "../../public/images/icons/ico_tdd.svg";
import restIcon from "../../public/images/icons/ico_restapi.svg";
import uxIcon from "../../public/images/icons/ico_ux.svg";

export function SkillSection() {
  return (
    <section className="bg-terciary pt-12 flex flex-col items-center">
      <Heading className="mb-14">Skills</Heading>
      <div className="grid grid-cols-2 gap-12 mb-28">
        <article className=" flex justify-center items-center gap-3">
          <Image
            width={70}
            height={70}
            src={htmlIcon}
            alt="logo do HTML"
          ></Image>
          <div>
            <Heading asChild>
              <h3>HTML</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
        <article className=" flex justify-center items-center gap-3">
          <Image width={70} height={70} src={cssIcon} alt="logo do CSS"></Image>
          <div>
            <Heading asChild>
              <h3>CSS</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
        <article className=" flex justify-center items-center gap-3">
          <Image
            width={70}
            height={70}
            src={jsIcon}
            alt="logo do javascript"
          ></Image>
          <div>
            <Heading asChild>
              <h3>Javascript</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
        <article className=" flex justify-center items-center gap-3">
          <Image
            width={70}
            height={70}
            src={reactIcon}
            alt="logo do React"
          ></Image>
          <div>
            <Heading asChild>
              <h3>React</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
        <article className=" flex justify-center items-center gap-3">
          <Image
            width={70}
            height={70}
            src={nodeIcon}
            alt="logo do NodeJS"
          ></Image>
          <div>
            <Heading asChild>
              <h3>NodeJS</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
        <article className="flex justify-center items-center gap-3">
          <Image width={70} height={70} src={tddIcon} alt="logo do TDD"></Image>
          <div>
            <Heading asChild>
              <h3>TDD</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
        <article className=" flex justify-center items-center gap-3">
          <Image width={70} height={70} src={restIcon} alt="Nuvem"></Image>
          <div>
            <Heading asChild>
              <h3>Rest API</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
        <article className=" flex justify-center items-center gap-3">
          <Image width={70} height={70} src={uxIcon} alt="UX"></Image>
          <div>
            <Heading asChild>
              <h3>UX</h3>
            </Heading>
            <Progress.Root
              className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
              max={100}
              value={70}
            >
              <Progress.Indicator className=" flex1 h-10 bg-primary w-[70%]" />
            </Progress.Root>
          </div>
        </article>
      </div>
    </section>
  );
}
