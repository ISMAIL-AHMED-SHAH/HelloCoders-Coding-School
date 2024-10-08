import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 md:py-0 text-white"
    >
      <Spotlight
        className="-top-40 left-0 md:left-100 md:-top-20"
        fill="purple"
      />
      <div className="p-4 relative z-10 w-ful text-center text-white">
        <h1
          className="mt-20 mb-5 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b overflow-y-visible from-neutral-50 to-neutral-400"
        >Hello Coders Coding School</h1>
        <h2
          className=" relative z-10 mt-10 mb-3 md:mt-0 text-3xl md:text-3xl font-bold from-neutral-400"
        >
          Master the art of coding
        </h2>


        <p
          className="mt-4 font-normal text-base md:text-lg text-center text-neutral-300 w-full max-w-2xl mx-auto"
        >  Welcome to Hello Coders Coding School, where your coding journey begins! Unlock your potential with our hands-on courses, expert instructors, and a supportive community. Whether you're a complete beginner or looking to advance your skills, we offer a diverse range of coding languages and technologies to help you thrive in the digital world. Join us and transform your passion for coding into a rewarding career!!</p>
        <div className="mt-4">
          <Link href={'/courses'}>
          <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default HeroSection
