import { Heading } from "./design/Heading";
import Image from "next/image";
import * as Progress from "@radix-ui/react-progress";

interface techProps {
    tech: {
        id: string,
        name: string,
        image: {
            url: string
        },
        value: number
    }
}

export function TechnologyProgress({ tech }: techProps) {

    return (
        <article className="flex justify-center items-center gap-3">
            <div className="relative h-full w-full">
                <Image
                    className="bg-transparent"
                    width={70}
                    height={70}
                    src={tech.image.url}
                    alt="logo do HTML"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Heading asChild>
                    <h3>{tech.name}</h3>
                </Heading>
                <progress className="h-10 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden text-primary" value={tech.value} max={100} />
                {/* <Progress.Root
                    className=" flex h-9 w-80 border-zinc-900 border-4 bg-zinc-800  relative overflow-hidden"
                    max={100}
                    value={barValue}
                >
                    <Progress.Indicator className={progressBarClass} />
                </Progress.Root> */}
            </div>
        </article>)
}