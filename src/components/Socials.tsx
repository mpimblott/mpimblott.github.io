import React from 'react';
import { CV_PATH, GITHUB_LINK, LINKEDIN_LINK } from "../../config";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

/**
 * Socials links
 */
function Socials() {
  return (<>
    <div className="flex gap-x-4">
      <div className="relative group">
        <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" data-tooltip-target="tooltip-light"
           className="hover:text-blue-300"><FaGithub
          size={30}/></a>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block z-100">
          <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
            Github
          </div>
          <div className="w-2 h-2 bg-gray-800 rotate-45 absolute left-1/2 -translate-x-1/2 -top-1"></div>
        </div>
      </div>
      <div className="relative group">
        <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedin
          size={30}/></a>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block z-100">
          <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
            LinkedIn
          </div>
          <div className="w-2 h-2 bg-gray-800 rotate-45 absolute left-1/2 -translate-x-1/2 -top-1"></div>
        </div>
      </div>
      {/*<div className="relative group">*/}
      {/*  <a href={"mailto:" + CONTACT_EMAIL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><MdEmail*/}
      {/*    size={30}/></a>*/}
      {/*  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block z-100">*/}
      {/*    <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">*/}
      {/*      Email Me!*/}
      {/*    </div>*/}
      {/*    <div className="w-2 h-2 bg-gray-800 rotate-45 absolute left-1/2 -translate-x-1/2 -top-1"></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="relative group">
        <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><MdDownload
          size={30}/></a>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block z-100">
          <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
            CV
          </div>
          <div className="w-2 h-2 bg-gray-800 rotate-45 absolute left-1/2 -translate-x-1/2 -top-1"></div>
        </div>
      </div>
    </div>
  </>);
}

export default Socials;