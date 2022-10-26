import { Heading } from "./design/Heading";
import icon from "../../public/images/icons/ico_react.svg"
import Image from "next/image";

export function ProjectsSection() {
    return (<section className="bg-black pt-12 flex flex-col items-center border-black  border-b-8">
        <Heading size="lg" className="mb-16">Projects</Heading>
        <div>
            <div className="w-72 h-auto flex flex-col gap-4 p-4 shadow-xl shadow-white bg-secondary">
                <Heading className="text-center">project name</Heading>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quasi quas earum doloremque quae perferendis cum possimus explicabo dolor eveniet! Inventore odio dolore neque culpa possimus laudantium similique, voluptate cupiditate.</p>
                <div className="flex gap-2 justify-center">
                    <Image src={icon} alt="" width={30} height={30} />
                    <Image src={icon} alt="" width={30} height={30} />
                    <Image src={icon} alt="" width={30} height={30} />
                    <Image src={icon} alt="" width={30} height={30} />
                    <Image src={icon} alt="" width={30} height={30} />
                    <Image src={icon} alt="" width={30} height={30} />
                </div>
            </div>
        </div>
    </section>)
}