import React from 'react';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/reactjs.png';
import NodeJS from '../assets/nodejs.png';
import Sass from '../assets/scss.png';
import MongoDB from '../assets/mongodb.png';
import VueJS from '../assets/vuejs.png';
import TailwindCSS from '../assets/tailwindcss.png';
import Github from '../assets/github.png';

const Skills = () => {
  const topSkills = [
    {
      id: 1,
      icon: Javascript,
      name: 'Javascript',
    },
    {
      id: 2,
      icon: ReactImg,
      name: 'React JS',
    },
    {
      id: 3,
      icon: NodeJS,
      name: 'Node JS',
    },
    {
      id: 4,
      icon: Sass,
      name: 'Sass',
    },
    {
      id: 5,
      icon: MongoDB,
      name: 'Mongo DB',
    },
    {
      id: 6,
      icon: VueJS,
      name: 'Vue JS',
    },
    {
      id: 7,
      icon: TailwindCSS,
      name: 'Tailwind CSS',
    },
    {
      id: 8,
      icon: Github,
      name: 'Github',
    },
  ];
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {topSkills.map((item) => (
            <div key={item.id} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={item.icon} alt={item.name} />
              <p className="my-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
