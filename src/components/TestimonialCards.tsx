'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      name: "Steve Jobs",
      title: "Co-founder of Apple Inc.",
    },
    {
      quote: "Code is like humor. When you have to explain it, it’s bad.",
      name: "Cory House",
      title: "Software Architect",
    },
    {
      quote: "Simplicity is the soul of efficiency.",
      name: "Austin Freeman",
      title: "Software Engineer",
    },
    {
      quote: "First, solve the problem. Then, write the code.",
      name: "John Johnson",
      title: "Software Developer",
    },
    {
      quote: "Programming isn't about what you know; it's about what you can figure out.",
      name: "Chris Pine",
      title: "Author of 'Learn to Program'",
    },
    {
      quote: "Good code is its own best documentation.",
      name: "Steve McConnell",
      title: "Author of 'Code Complete'",
    },
    {
      quote: "In programming, the hard part isn’t solving problems, but deciding what problems to solve.",
      name: "Paul Graham",
      title: "Co-founder of Y Combinator",
    },
    {
      quote: "The best way to predict the future is to invent it.",
      name: "Alan Kay",
      title: "Computer Scientist",
    },
    {
      quote: "Talk is cheap. Show me the code.",
      name: "Linus Torvalds",
      title: "Creator of Linux",
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      name: "Franklin D. Roosevelt",
      title: "32nd President of the United States",
    },
  ];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full text-white dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10"> 
      Inspiration Through Code: Words from the Wise
      </h2>
      <div className="flex justify-centerw-full overflow-hidden px-4  sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
            <InfiniteMovingCards
            items={quotes}
            direction="right"
            speed="slow"
            />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards
