import React from 'react';
import * as motion from "motion/react-client";

const ANIMATION_CONFIG = {
  spring: {type: "spring", stiffness: 100, damping: 20},
  slideLeft: {x: -100, opacity: 0},
  slideRight: {x: 100, opacity: 0},
  visible: {x: 0, opacity: 1}
} as const;

interface ProfileProps {
  animate?: boolean;
}

const AnimatedContainer = ({children, initial, className}: {
  children: React.ReactNode;
  initial: typeof ANIMATION_CONFIG.slideLeft | typeof ANIMATION_CONFIG.slideRight;
  className?: string;
}) => (
  <motion.div
    className={className}
    initial={initial}
    whileInView={ANIMATION_CONFIG.visible}
    viewport={{once: true}}
    transition={ANIMATION_CONFIG.spring}
  >
    {children}
  </motion.div>
);

const ProfileImage = () => (
  <div className="bg-gray-800 rounded-lg w-32 mx-auto md:w-48">
    <img src="/profile_photo.jpg" alt="Profile" className="rounded-lg"/>
  </div>
);

const ProfileBio = () => (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold">About Me</h1>
    <p className="text-lg text-gray-300">
      Hi my name is Matthew, I'm a software developer and ML Engineer based in the UK. I currently work on
      reinforcement learning control systems at a startup in the energy sector. During my degree I spent a year
      working as a research software engineer specialising
      in deep learning image processing at the UK's National Synchrotron. I did my
      Bachelor's degree in Mathematical Sciences at the University of Bath.
    </p>
  </div>
);

/**
 * Hero section with a headshot and bio
 * @param animate If true the components will animate upon coming into view
 */
function Profile({animate = true}: ProfileProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {animate ? (
          <AnimatedContainer initial={ANIMATION_CONFIG.slideLeft}>
            <ProfileImage/>
          </AnimatedContainer>
        ) : (
          <ProfileImage/>
        )}
        {animate ? (
          <AnimatedContainer initial={ANIMATION_CONFIG.slideRight}>
            <ProfileBio/>
          </AnimatedContainer>
        ) : (
          <ProfileBio/>
        )}
      </div>
    </div>
  );
}

export default Profile;