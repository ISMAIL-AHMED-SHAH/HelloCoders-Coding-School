"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Hands-On Learning",
      description:
        "Engage in interactive coding sessions where you can apply what you learn in real time. Our hands-on approach ensures you build practical skills that are essential for your coding journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          Hands-On Learning
        </div>
      ),
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals who bring real-world experience to the classroom. Our instructors are dedicated to your success, providing personalized guidance and support throughout your learning journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
          Expert Instructors
        </div>
      ),
    },
    {
      title: "Collaborative Community",
      description:
        "Join a vibrant community of learners and coders. Collaborate on projects, share ideas, and get feedback from peers. Our community fosters growth, creativity, and support.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
          Collaborative Community
        </div>
      ),
    },
    {
      title: "Flexible Learning Paths",
      description:
        "Choose from a variety of courses tailored to your goals. Whether you want to start with the basics or dive into advanced topics, we provide flexible learning paths to suit your needs.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Flexible Learning Paths
        </div>
      ),
    },
    {
      title: "Project-Based Curriculum",
      description:
        "Work on real-world projects that prepare you for the job market. Our curriculum is designed to help you build a portfolio that showcases your skills and expertise.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
          Project-Based Curriculum
        </div>
      ),
    },
  ];
  
  export default function ChooseUs() {
    return (
      <div>
        <StickyScroll content={content} />
      </div>
    );
  }


  
// const content = [
//     {
//       title: "Collaborative Editing",
//       description:
//         "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Collaborative Editing
//         </div>
//       ),
//     },
//     {
//       title: "Real time changes",
//       description:
//         "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     //   content: (
//     //     <div className="h-full w-full  flex items-center justify-center text-white">
//     //       <Image
//     //         src="/linear.webp"
//     //         width={300}
//     //         height={300}
//     //         className="h-full w-full object-cover"
//     //         alt=""
//     //       />
//     //     </div>
//     //   ),
//     },
//     {
//       title: "Version control",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//           Version control
//         </div>
//       ),
//     },
//     {
//       title: "Running out of content",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Running out of content
//         </div>
//       ),
//     },
//     {
//         title: "Collaborative Editing",
//         description:
//           "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//         content: (
//           <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//             Collaborative Editing
//           </div>
//         ),
//       },
//       {
//         title: "Real time changes",
//         description:
//           "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//         // content: (
//         //   <div className="h-full w-full  flex items-center justify-center text-white">
//         //     <Image
//         //       src="/linear.webp"
//         //       width={300}
//         //       height={300}
//         //       className="h-full w-full object-cover"
//         //       alt=""
//         //     />
//         //   </div>
//         // ),
//       },
//   ];

// export default function ChooseUs() {
//   return (
//     <div>
//       <StickyScroll content={content}/>
         
//     </div>
//   )
// }
