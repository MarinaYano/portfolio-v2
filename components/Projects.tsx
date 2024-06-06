import { projects } from "@/data"
import { CardBody, CardContainer, CardItem } from "./ui/3dCard"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <div id="projects" className="pt-80 sm:pt-40">
      <h1 className="heading">
        A small section of {' '}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center justify-center gap-4">
        {projects.map((item) => (
          <div key={item.id} className="lg:min-h-[32.5rem] flex items-center justify-center sm:w-fit w-[80vw]">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black-200 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white line-clamp-1"
                >
                 {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="w-fit flex flex-wrap gap-2 relative my-4"
                >
                  {item.iconLists.map((icon, index) => (
                    <Image
                      key={index}
                      src={icon}
                      height={36}
                      width={36}
                      className="object-cover"
                      alt="icon"
                    />
                  ))}
                </CardItem>
                <div className="flex justify-between items-center mt-12">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={item.demoLink}
                    target="__blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-black-100 dark:bg-white dark:text-black text-white text-sm font-semibold cursor-pointer"
                  >
                    Demo
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={item.ghLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaGithub className="dark:text-white" size={32} />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects