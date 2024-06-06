import { socialMedia } from "@/data"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex mt-16 md:flex-row flex-col gap-y-4 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Marina Yano
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Footer