import React from "react";

export const Skills = () => {
  // Array of skill items
  const skills = [
    "Functional Testing", "API Testing", "Integration Testing", "Mobile App Testing",
    "End-to-End Testing", "Web App Testing", "User Acceptance Testing", "Desktop App Testing",
    "Regression Testing", "Exploratory Testing", "Codeless Automation", "JIRA",
    "MS Azure DevOps Test Manager", "Postman", "Insomnia", "ACCELQ", "BrowserStack", "AWS",
    "JavaScript", "HTML", "CSS"
  ];

  // Array of shades of grey
  const greyShades = ["bg-gray-300", "bg-gray-400", "bg-gray-500"];

  // Function to shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffling the skills array
  const shuffledSkills = shuffleArray([...skills]);

  return (
    <div>
      <main className="bg-gray-100 px-10 md:px-10 lg:px-40">
        <section className="min-h-screen">
          <div className="flex flex-wrap justify-center">
            {shuffledSkills.map((skill, index) => (
              <div
                key={index}
                className={`px-6 py-4 m-2 rounded-lg shadow-lg text-lg font-medium text-center ${greyShades[Math.floor(Math.random() * greyShades.length)]
                  }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
