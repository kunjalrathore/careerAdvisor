import React from "react";

export default function AdvisorSection() {
  const features = [
    {
      title: "Personalized Guidance",
      desc: "AI analyzes your skills, interests, and goals to give tailored advice.",
    },
    {
      title: "Career Path Suggestions",
      desc: "Discover the best career paths based on your strengths.",
    },
    {
      title: "Job & Internship Alerts",
      desc: "Get notified about relevant opportunities to boost your career.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          How CareerAI Helps You
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
