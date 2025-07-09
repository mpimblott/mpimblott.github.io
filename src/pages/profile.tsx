import React from 'react';
import * as motion from "motion/react-client";
// @ts-ignore
import profile_photo from "../assets/profile_photo.jpg";

function Profile() {
  return (<div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="bg-gray-800 rounded-lg w-32 mx-auto md:w-48"
          initial={{x: -100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{type: "spring", stiffness: 100, damping: 20}}
        >
          <img src={profile_photo} alt="Profile" className="rounded-lg"/>
        </motion.div>
        <motion.div
          className="space-y-6"
          initial={{x: 100, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{type: "spring", stiffness: 100, damping: 20}}
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-gray-300">
            Hi my name is Matthew, I'm a software developer and ML Engineer based in the UK. I currently work on
            reinforcement learning control systems at a startup in the energy sector. During my degree I spent a year
            working as a research software engineer specialising
            in deep learning image processing at the UK's National Synchrotron. I did my
            Bachelor's degree in Mathematical Sciences at the University of Bath.
          </p>
        </motion.div>
      </div>
    </div>);
}

export default Profile;