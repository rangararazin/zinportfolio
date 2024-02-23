import React from "react";
import { Experience } from "./Experience";

const Exp = () => {
  return (
    <div className="p-4 bg-gray-100">

      <Experience
        title="User Acceptance Tester – The Lettings Hub | Peterborough | June 2023 – Present"
        descrip="Conducting user acceptance testing (UAT) and exploratory testing for various software applications
        to verify system functionality, usability adherence to business requirements, and specifications.
        Collaborating closely with change manager, developers, and business analysts to understand user
stories, facilitating effective test planning, defect resolutions and ensure software met user
expectations.Developing detailed test cases and scenarios based on user stories and acceptance criteria,
ensuring the thorough coverage.Detecting, documenting, and tracking defects using industry-standard defect tracking tools (JIRA),
ensuring accurate communication with development teams and project stakeholders, facilitating
informed decision-making.Performing regression testing to verify that new software releases do not introduce issues into
existing functionality.Demonstrating adaptability to evolving project priorities and timelines
        "
      />
      <Experience
        title="Manual Test Analyst – AAR Software Ltd | Leicester | Jan 2023 – Jun2023"
        descrip="Analyzed client requirements for testing needs
        .Estimated and prioritized testing tasks to meet project deadlines
        .Executed test cases based on requirements, ensuring software functionality and reliability
        .Reported bugs to the development team with clear communication
        .Collaborated in an agile environment with cross-functional teams for timely project delivery"
      />
      <Experience title="Traffic Office Administrator - Royal Mail | Northampton | Jul 2021 – June2023" descrip="Assisting in maintaining the quick, efficient, and safe operation of the Transport Office using
organisational and communication skills.Allocating vehicles and monitoring vehicle defects to ensure compliance with safety standards.Providing instructions to drivers regarding their duties and responsibilities.
Working with in-house driver attendance, vehicle, and trailer tracking systems, including
maintaining attendance records, and debriefing drivers after their duties were completed.Adapting to changing priorities and demonstrating flexibility in meeting the needs of the Transport
Office" />

      <Experience title="Junior Software Developer – Northcoders | Oct 2022 – Jan 2023" descrip="Completed a 13-week course in full-stack application development, including TDD, GIT, and pair
programming.Gained proficiency in frontend (HTML, CSS, React, JavaScript) and backend (Node, Express)
technologies.Utilized agile methodology to build projects.Tools and Technologies: JavaScript, React, React Native, HTML, CSS, Node, Express, PostgreSQL,
SQL, Firestore NoSQL, Firebase Authentication, Firebase Storage, Jest, GIT, Figma, Trello" />

      <Experience title="Quality Assurance (Software Test Engineer) - 1Rivet | Gujarat, India | May 2019 - Aug 2020" descrip="Conducted client requirements analysis to determine testing needs and objectives.Estimated, prioritised, planned, and coordinated testing activities to meet project timelines and
goals.Developed and executed test cases based on the requirements to ensure software functionality and
reliability.Logged and reported bugs to the development team, ensuring clear and concise communication.Performed thorough regression testing after bug fixes to ensure software quality and stability.Collaborated with cross-functional teams in an agile environment to ensure alignment and timely
delivery of projects.Maintained accurate and up-to-date records of testing activities.Mentored junior test engineers, providing guidance and support to facilitate their professional growth.Tools & Technologies: Jira, Microsoft Azure DevOps Test Manager, Postman/Insomnia API Client,
Microsoft SQL Server, MS Excel" />

      <Experience title="Quality Assurance Intern - 1Rivet | Gujarat, India | Dec 2018 – Apr 2019" descrip="Assisted in developing and implementing quality assurance processes.Conducted functional testing of software applications to ensure they met quality standards.Assisted with user acceptance testing (UAT) to ensure software met client requirements.Utilised testing tools such as Jira, Selenium, and TestNG to support testing efforts.Assisted in the documentation of test plans, test cases, and test results.Participated at all stages of SDLC, STLC and Bug life Cycle" />

      {/* <Experience title="Firebase or Supabase?" descrip="I am using Supabase!" /> */}



     





    </div>
  );
};

export default Exp;