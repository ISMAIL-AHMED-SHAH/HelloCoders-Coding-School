'use client';

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background"

const mentors = [
  {
    id: 1,
    name: "ISMAIL AHMED SHAH",
    designation: "Software Engineer",
    image:
    "https://avatars.githubusercontent.com/u/159659680?v=4",
  },
  {
    id: 2,
    name: "Okasha Ejaz",
    designation: "Project Incharge",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEK6LkMORru_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707429703778?e=1734566400&v=beta&t=CVxiZRBRj4Hk41YjfqCA7Y5MTYweTBFEIGwGF_N_fIc",
  },
    {
      id: 3,
      name: "Miss Atia Jabbar",
      designation: "Project Manager",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQH_93NbHTM5Bg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704015619605?e=1730937600&v=beta&t=pCe34VqVWp9RZjuQmVw30QnObnySVavt5OetBq64Aik",
    },
    {
      id: 4,
      name: "Naimal Sallahh",
      designation: "Data Scientist",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQFCeJa_1NgP6A/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1711379792917?e=1726167600&v=beta&t=Kpl3i-NwBNBAl5v9BmubFK6uBM72E5KtgFCqK8hgxMM",
    },
    {
      id: 5,
      name: "Kanwal Mehmat",
      designation: "UX Designer",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQECmqtLHKz3sA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723986164893?e=1730937600&v=beta&t=Ho-OlYxgLm9B1JRNPiV1I0AiKVOytws2xE-_xSJf6RA",
    },
    {
      id: 6,
      name: "Filza Sultana",
      designation: "Soap Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D5635AQH9vokGnLa7Og/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1715079069759?e=1726167600&v=beta&t=sDhf5Ih2sUbGTS8p_Pmf8JdJWO8H357P8nImsQU6Fag",
    },
    {
      id: 7,
      name: "Hammad Abbasi",
      designation: "The Explorer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQEZmWAZsRlL-w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1723807039370?e=1729965600&v=beta&t=HTLwS8m0vjH4MyM7f-g66wlD_04tTAwye1VfXg_U0is",
    },
    {
      id: 8,
      name: "Furqan Khan",
      designation: "Figma Expert",
      image:
        "https://media.licdn.com/dms/image/v2/D4E22AQHMrxOb-1ZetQ/feedshare-shrink_800/feedshare-shrink_800/0/1725797318028?e=1732147200&v=beta&t=ppwB_pabEh7csrUvBFAMDiGVNQ-O7uFPijD_14W5GXk",
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center h-full"
      >
            <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center mt-36 bg-gradient-to-r from-purple-600 via-blue-400 to-pink-500 bg-clip-text text-transparent">
    Meet Our Instructors
</h2>

            <p className="text-base md:text-lg text-blue-200 text-center  mt-4">Discover the talented professionals who will guide your coding Journey</p>
            <div className="flex flex-row items-center justify-center mb-19 w-full">
                <AnimatedTooltip items={mentors}/>
            </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
