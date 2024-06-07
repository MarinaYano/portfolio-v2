import { about } from "@/data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import Image from "next/image"

const About = () => {
  return (
    <div>
      <BentoGrid className="">
        {about.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon && item.icon.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt={item.title}
                width={36}
                height={36}
              />
            ))}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default About