import { GrTestDesktop } from "react-icons/gr";
import { TbCloudComputing } from "react-icons/tb";
import SvgIcon from '@mui/material/SvgIcon';
import BugReportIcon from '@mui/icons-material/BugReport';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { FaDiagramProject } from "react-icons/fa6";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { FcCollaboration } from "react-icons/fc";





export const Resume = () => {
  return (
    <div>
      <main className="bg-gray-100 px-10 md:px-20 lg:px-40 ">
        <section className="min-h-screen">
          <div className="text-center p-5">
            <h2 className="text-5xl py-1 text-teal-600 font-medium md:text-6xl">
              Razin Rangara
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl ">
              Software Test Analyst/Quality Assurance Engineer

            </h3>
            <p className="text-2xl py-5 leading-8 text-gray-800 md-text-2xl max-w-xl mx-auto ">
              Dynamic software tester fueled by a passion for uncovering bugs
              <span className="inline-flex items-center  px-2"><BugReportIcon className="ml-1"/></span>     
              and ensuring flawless software experiences. With a passion for precision and an eye for detail, I collaborate 
              <span className="inline-flex items-center px-2"><FcCollaboration className="ml-1" /></span> 
               seamlessly to drive innovation and ensure quality assurance at every stage of development.
            </p>
            <p className="text-2xl py-5 leading-8 text-gray-800 md-text-2xl max-w-xl mx-auto ">
              Now, I'm diving into test automation basics and exploring cloud solution architecture
              <span className="inline-flex items-center px-2"><TbCloudComputing className="fill-indigo-500  ml-1" />  </span>,
              eager to learn and innovate.
            </p>
            <p className="text-2xl py-5 leading-8 text-gray-800 md-text-2xl max-w-xl mx-auto ">
              I love expanding my skills through personal projects
              <span className="inline-flex items-center px-2"><AccountTreeIcon className="ml-1" />  </span>,
               and online courses
               <span className="inline-flex items-center px-2"><LocalLibraryIcon className="ml-1" />  </span>
               , always staying ahead of the curve!
            </p>
          </div>

        </section>


      </main>
    </div>
  );
};
