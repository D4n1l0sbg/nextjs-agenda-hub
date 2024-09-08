import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>Mais&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>agilidade&nbsp;</h1>
        <br />
        <h1 className={title()}>
          praticidade e informação na hora de agendar.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
        Tudo em um so lugar, Agenda HUB.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.create}
        >
          Agendar
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
