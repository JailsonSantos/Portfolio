import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/logo-tech.png"
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo da empresa"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800">
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a href="https://www.linkedin.com/in/jailson-santos-726395104/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ WorkLink
          </a>
          <h4 className="text-gray-300">Desenvolvedor Front End</h4>
          <span className="text-gray-500">
            Janeiro de 2021 # O momento # (2 anos e 5 meses)
          </span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero minima veniam dolorum voluptate expedita eos accusantium ab explicabo aliquid similique.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="ReactJS" />
          <TechBadge name="ReactJS" />
          <TechBadge name="ReactJS" />
          <TechBadge name="ReactJS" />
          <TechBadge name="ReactJS" />
          <TechBadge name="ReactJS" />
        </div>
      </div>
    </div>
  )
}