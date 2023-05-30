import Image from "next/image"

const sections = [
  {
    title: 'Login',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UEW_KM43cM5YH1fz_6knulTAQQzKzXPAA2SCMIqANe9dAeKFX1LeY0mrDtbst12q6W4&usqp=CAU'
  },
  {
    title: 'Home',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1N0aWy3PasQcFLJIcXG4DtHei25VhI8Wi32SiyXF_4xvI7tPEmeJfSAZps1U9i3XfS0&usqp=CAU'
  }
]

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map(section => (
        <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}