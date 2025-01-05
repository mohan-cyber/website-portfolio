import React from "react";
import FadeInAnimation from "./FadeInAnimation";

const About = () => {
  return (
    <div
      id="about"
      className="w-full lg:h-screen  bg-gradient-to-b from-gray-800 to-black text-white pt-[50px] pb-[50px] lg:pt-0 lg:pb-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8 ">
          <FadeInAnimation>
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </FadeInAnimation>
        </div>

        <FadeInAnimation>
          <p class="mb-4">
Hi there 👋! I’m Mohan — a passionate Python and Full Stack Developer. 
My goal is to secure a dynamic role where I can blend my technical expertise and creative problem-solving skills to drive meaningful impact and contribute to the growth of an organization. Let’s connect and create something amazing together!

📬 Reach out to me at mohan0310selvan@gmail.com — I’d love to hear from you!
          </p>
        </FadeInAnimation>
        <FadeInAnimation>
          <p class="mb-4">
            <strong>
              Tandem Crystals Pvt Limited, Chennai— Full Stack Developer (Dec
              2022 – Present):
            </strong>
          </p>
          <ul class="list-disc ml-6 mb-4">
            <li>
              Collaborated with a team of 3 members to successfully integrate an
              e-commerce site from scratch. Leveraged Django and Alpine JS to
              create a robust backend and smooth interactive frontend.
            </li>
            <li>
              Conducted design to code conversion, efficiently translating
              wireframes into functional models. Utilized Tailwind CSS to
              implement visually appealing and responsive designs.
            </li>
          </ul>
        </FadeInAnimation>
        <FadeInAnimation>
          <p class="mb-4">
            <strong>
              Sageflare Tech Pvt Limited, Chennai— Junior Full Stack Developer
              (Jan 2021 - Dec 2022):
            </strong>
          </p>
          <ul class="list-disc ml-6 mb-4">
            <li>
              Worked collaboratively with a team of 3 members to integrate
              applications using Django and React JS. Primarily responsible for
              performing CRUD operations and creating API endpoints.
            </li>
            <li>
              Conducted unit testing using Pytest and ensured seamless frontend
              workflow using Cypress. Skillfully converted frontend React
              components using TypeScript.
            </li>
            <li>
              Managed AWS servers deployed on EC2 instances, demonstrating
              proficiency in server management and deployment.
            </li>
          </ul>
        </FadeInAnimation>
        <FadeInAnimation>
          <p class="mb-4">
            <strong>Technical Proficiencies:</strong>
          </p>
          <ul class="list-disc ml-6 mb-4">
            <li>Programming Languages: Python, TypeScript</li>
            <li>Backend Frameworks: Django</li>
            <li>Frontend Libraries: React JS, Alpine JS</li>
            <li>Styling: Tailwind CSS</li>
            <li>Testing: Pytest, Cypress</li>
            <li>Cloud Platforms: AWS (Amazon Web Services)</li>
            <li>Version Control: Git</li>
          </ul>
        </FadeInAnimation>
      </div>
    </div>
  );
};

export default About;
