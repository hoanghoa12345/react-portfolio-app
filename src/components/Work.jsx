import React from 'react';

const Work = () => {
  const workProjects = [
    {
      id: 1,
      title: 'React JS Application',
      thumbnailSrc: 'https://picsum.photos/id/0/367/267.jpg',
      codeLink: 'https://github.com/hoanghoa12345',
      demoLink: 'https://github.com/hoanghoa12345',
    },
    {
      id: 2,
      title: 'React JS Application',
      thumbnailSrc: 'https://picsum.photos/id/137/536/354.jpg',
      codeLink: 'https://github.com/hoanghoa12345',
      demoLink: 'https://github.com/hoanghoa12345',
    },
    {
      id: 3,
      title: 'React JS Application',
      thumbnailSrc: 'https://picsum.photos/id/1001/367/267.jpg',
      codeLink: 'https://github.com/hoanghoa12345',
      demoLink: 'https://github.com/hoanghoa12345',
    },
    {
      id: 4,
      title: 'React JS Application',
      thumbnailSrc: 'https://picsum.photos/id/1018/3914/2935.jpg',
      codeLink: 'https://github.com/hoanghoa12345',
      demoLink: 'https://github.com/hoanghoa12345',
    },
    {
      id: 5,
      title: 'React JS Application',
      thumbnailSrc: 'https://picsum.photos/id/1033/367/267.jpg',
      codeLink: 'https://github.com/hoanghoa12345',
      demoLink: 'https://github.com/hoanghoa12345',
    },
    {
      id: 6,
      title: 'React JS Application',
      thumbnailSrc: 'https://picsum.photos/id/1039/6945/4635.jpg',
      codeLink: 'https://github.com/hoanghoa12345',
      demoLink: 'https://github.com/hoanghoa12345',
    },
  ];
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {workProjects.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.thumbnailSrc})`,
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">{item.title}</span>
                <div className="pt-8 text-center">
                  <a href={item.demoLink}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                  </a>
                  <a href={item.codeLink}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
