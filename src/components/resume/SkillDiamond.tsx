import { Texts } from "@/lib/Texts2";
import Image from "next/image";

export default function SkillDiamond() {
    const texts = Texts.en.resume;
    return (
        <section className=" -translate-x-1/2 flex flex-col justify-center items-center">
            <article className="flex flex-col items-center justify-center text-center w-[80%] -mb-2">
                <h2 className="font-semibold text-2xl">{texts.top.title}</h2>
                <span className="space-y-2">
                    <h3 className="font-normal">{texts.top.subtitle}</h3>
                    <p>{texts.top.description}</p>
                </span>
            </article>
            <article>
                <Image
                    src="/diamond.png"
                    alt=""
                    width={600}
                    height={600}
                    className=""
                />
            </article>
            <section className="flex w-full -mt-[54%]">
                <article className="w-1/2 flex flex-col items-center justify-start text-center pr-2">
                    <h2 className="font-semibold text-2xl">{texts.left.title}</h2>
                    <span className="space-y-2">
                        <h3 className="font-normal">{texts.left.subtitle}</h3>
                        <p>{texts.left.description}</p>
                    </span>
                </article>
                <article className="w-1/2 flex flex-col items-center justify-center text-center pl-2">
                    <h2 className="font-semibold text-2xl">{texts.right.title}</h2>
                    <span className="space-y-2">
                        <h3 className="font-normal">{texts.right.subtitle}</h3>
                        <p>{texts.right.description}</p>
                    </span>
                </article>
            </section>
        </section>
    )
}