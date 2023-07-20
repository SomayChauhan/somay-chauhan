'use client';
import MainLayout from '@/components/layouts/MainLayout';
import { techStack } from '@/data/techStack';
import { motion } from 'framer-motion';

// export const metadata = {
//   title: 'About - Dale Larroder',
//   description: 'About me - Dale Larroder',
// };

export default function About() {
  return (
    <MainLayout>
      <div className="flex flex-col space-y-16 mx-auto">
        <h1 className="text-3xl font-bold mb-6">my portfolio</h1>
        {/* work experience */}
        <div className="flex flex-col items-start space-y-8 border-black500 border-0 border-b-2 pb-16 md:flex-row md:space-y-0 justify-between ">
          <h1 className="md:w-2/5 text-xl font-semibold">Work Experience</h1>
          <div className="md:w-3/5 space-y-8">
            <div className="flex flex-col md:flex-row">
              <h3 className="md:w-1/3 font-light text-sm">Jan 2023 - Present</h3>
              <div className="md:w-2/3">
                <h2 className="text-l mb-4 font-medium md:mb-0">Freelance Web Developer</h2>
                <p className="font-light text-xs tracking-wide">
                  As a freelance web developer, I have helped numerous clients turn their ideas into
                  fully-functional websites and apps. I specialize in creating professional and
                  cost-effective solutions that meet my clients unique needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <h3 className="md:w-1/3 font-light text-sm">Jul 2020 - Dec 2022</h3>
              <div className="md:w-2/3">
                <h2 className="text-l mb-4 font-medium md:mb-0">Web Developer at Innow8apps</h2>
                <p className="font-light text-xs tracking-wide">
                  During my time at Innow8apps, I worked on a variety of web projects, which
                  provided me valuable experience in both front-end and back-end web development.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <h3 className="md:w-1/3 font-light text-sm">Jan 2020 - Jul 2020</h3>
              <div className="md:w-2/3">
                <h2 className="text-l mb-4 font-medium md:mb-0">Intern</h2>
                <p className="font-light text-xs tracking-wide">
                  As a web development intern at ABC Company, I assisted the development team with
                  various tasks, including website maintenance and bug fixing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className="flex flex-col items-start space-y-8 border-black500 border-0 border-b-2 pb-16 md:flex-row md:space-y-0 justify-between ">
          <h1 className="md:w-2/5 text-xl font-semibold">Education</h1>
          <div className="md:w-3/5 space-y-8">
            <div className="flex flex-col md:flex-row">
              <h3 className="md:w-1/3 font-light text-sm">2016 - 2020</h3>
              <div className="md:w-2/3">
                <h2 className="text-l mb-4 font-medium md:mb-0">
                  Bachelor's Degree in Information Technology
                </h2>
                <p className="font-light text-xs tracking-wide">
                  I received my Bachelor's Degree in Information Technology from Panjab University.
                  During my studies, I gained a strong foundation in programming and software
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Skills & Expertise */}
        <div className="flex flex-col items-start space-y-8 border-black500 md:flex-row md:space-y-0 justify-between ">
          <h1 className="md:w-2/5 text-xl font-semibold">Skills & Expertise</h1>
          <div className="md:w-2/5 space-y-8">
            {Object.keys(techStack).map((key: string) => (
              <div className="flex flex-col">
                <h2 className="text-l mb-4 font-medium md:mb-0">{key}</h2>
                <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
                  {techStack[key].map((el: { name: string; link?: string }) => (
                    <motion.div
                      initial="hidden"
                      whileInView={'visible'}
                      variants={{
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            type: 'spring',
                          },
                        },
                        hidden: { opacity: 1, y: 80 },
                      }}
                      className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                    >
                      <img alt="" src={el.link} className="w-12" />
                      <h4 className="text-md ml-4">{el.name}</h4>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
            {/* <div className="flex flex-col">
              <h2 className="text-l mb-4 font-medium md:mb-0">Frontend</h2>
              <p className="font-light text-xs tracking-wide">
                As a freelance web developer, I have helped numerous clients turn their ideas into
                fully-functional websites and apps. I specialize in creating professional and
                cost-effective solutions that meet my clients unique needs.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-l mb-4 font-medium md:mb-0">Backend</h2>
              <p className="font-light text-xs tracking-wide">
                As a freelance web developer, I have helped numerous clients turn their ideas into
                fully-functional websites and apps. I specialize in creating professional and
                cost-effective solutions that meet my clients unique needs.
              </p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-l mb-4 font-medium md:mb-0">Other</h2>
              <p className="font-light text-xs tracking-wide">
                As a freelance web developer, I have helped numerous clients turn their ideas into
                fully-functional websites and apps. I specialize in creating professional and
                cost-effective solutions that meet my clients unique needs.
              </p>
            </div> */}
            {/* <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
