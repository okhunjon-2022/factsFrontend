import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="text-blue-300 text-center mt-2">
            Discover the truth behind the facts!
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-4 md:px-8 py-12">
        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At **Facts**, our mission is to provide reliable, accurate, and engaging factual 
            content that empowers people to learn and grow. We believe in delivering the truth, 
            separating myths from reality, and sparking curiosity about the world around us.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Accuracy: We prioritize truth and correctness in every piece of information.</li>
            <li>Transparency: We believe in open, honest communication.</li>
            <li>Engagement: We aim to make learning fun and accessible for everyone.</li>
            <li>Curiosity: We inspire people to explore and question the world around them.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Alex Smith</h3>
              <p className="text-blue-500">Content Researcher</p>
              <p className="text-gray-700 mt-2">
                Alex ensures every fact is verified and backed by credible sources.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Sophia Johnson</h3>
              <p className="text-blue-500">Editor & Writer</p>
              <p className="text-gray-700 mt-2">
                Sophia crafts compelling stories that make facts come alive.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Ryan Wilson</h3>
              <p className="text-blue-500">Developer</p>
              <p className="text-gray-700 mt-2">
                Ryan ensures our website is fast, secure, and user-friendly.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
