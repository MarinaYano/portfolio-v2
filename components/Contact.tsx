import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"

const Contact = () => {
  return (
    <div id="contact" className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[75vw]">
          Share your goals with me, and let&apos;s make them a <span className="text-purple">reality</span>.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Interested in working with me? Let&apos;s talk!
        </p>
        <a href="mailto:myano2621@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  )
}

export default Contact