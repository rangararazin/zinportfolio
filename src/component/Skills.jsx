import React from "react";

export const Skills = () => {
  return (
    <div>
      <main className="bg-gray-100 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="flex flex-wrap">
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">Functional</div>
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">Integration</div>
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">End-to-End</div>
            {/* Add more skill divs as needed */}
          </div>
          <div className="flex flex-wrap">
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">JIRA</div>
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">MS Azure DevOps Test Manager</div>
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">Postman</div>
            {/* Add more tool divs as needed */}
          </div>
          <div className="flex flex-wrap">
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">Javascript</div>
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">HTML</div>
            <div className="bg-gray-200 px-4 py-2 m-2 rounded-lg">CSS</div>
            {/* Add more technical divs as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};
