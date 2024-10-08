'use client';

import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const featuredWebinars = [
        {
          title: 'Introduction to Web Development',
          description:
            'Learn the basics of HTML, CSS, and JavaScript to create your first website.',
          slug: 'introduction-to-web-development',
          isFeatured: true,
        },
        {
          title: 'Building Responsive Applications',
          description:
            'Discover how to create applications that look great on any device.',
          slug: 'building-responsive-applications',
          isFeatured: true,
        },
        {
          title: 'JavaScript Deep Dive',
          description:
            'Explore advanced JavaScript concepts to enhance your coding skills.',
          slug: 'javascript-deep-dive',
          isFeatured: true,
        },
        {
          title: 'Version Control with Git',
          description:
            'Understand the importance of version control and how to use Git effectively.',
          slug: 'version-control-with-git',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Introduction to Data Science',
          description:
            'An overview of data science principles and tools for aspiring data scientists.',
          slug: 'introduction-to-data-science',
          isFeatured: true,
        },
        {
          title: 'Creating APIs with Node.js',
          description:
            'Learn how to build robust APIs using Node.js and Express.',
          slug: 'creating-apis-with-nodejs',
          isFeatured: true,
        },
    ];
    
  return (
    <div className="p-12 bg-gray-900">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center 1">
                <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase"> FEATURED WEBINAR </h2>
                <p className="text-white"
                >Enhance Your Coding Journey</p>
            </div>
            <div className="mt-10" >
                <HoverEffect
                items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }
                ))}
                />
            </div>
            <div className="mt-10 text-center">
            <Link href={"/"}
    className="px-4 py-2 rounded border border-neutral-600 text-white bg-blue-500 hover:bg-teal-400 transition-duration-200">
    View All Webinars
</Link>
            </div>

        </div>
    </div>
  )
}

export default UpcomingWebinars
