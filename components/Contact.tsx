import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"

const Contact = () => {
  return (
    <div id="contact" className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[75vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
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