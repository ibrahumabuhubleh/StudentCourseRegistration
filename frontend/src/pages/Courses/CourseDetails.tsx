import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CourseDetails() {
  const { id } = useParams();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-12">

      {/* LEFT CONTENT */}
      <div className="md:col-span-2">

        <h1 className="text-4xl font-bold text-gray-900">
          Introduction to Python Programming
        </h1>

        <p className="text-gray-600 mt-2 text-lg leading-relaxed">
          Master the foundations of Python with hands-on projects, practical exercises,
          and real-world applications. This course is designed for complete beginners
          and engineers looking to expand their programming skills.
        </p>

        <p className="mt-4 text-gray-800 text-lg">
          Instructor: <span className="font-semibold">Mosh Hamedani</span>
        </p>

        {/* LONG DESCRIPTION */}
        <div className="mt-8 text-gray-700 leading-relaxed space-y-4">
          <p>
            Python is one of the most powerful, user-friendly programming languages in the world.
            In this course, you will explore Python from the ground up while building solid
            problem-solving skills. You’ll learn how to write clean, efficient code and understand
            how Python is used across fields such as software engineering, data science, automation,
            artificial intelligence, machine learning, and cloud technologies.
          </p>

          <p>
            With step-by-step guidance, you will practice everything from printing text and handling
            variables to writing functions, using loops, working with data structures, and designing
            algorithms. The course includes a wide selection of examples and real engineering-focused
            exercises that help you understand not just how Python works—but why it works.
          </p>

          <p>
            By the end of this course, you will be able to:
            build small automation scripts, process data, handle errors, understand modules and
            packages, and create your own mini-projects. Whether you want to move into backend
            engineering, machine learning, cybersecurity, or embedded systems, Python is the perfect
            starting point.
          </p>
        </div>

        {/* WHAT YOU’LL LEARN */}
        <h2 className="text-2xl font-bold mt-10 mb-4">What you’ll learn</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Python basics & syntax</li>
          <li>✔ Variables, loops & conditionals</li>
          <li>✔ Functions & modular programming</li>
          <li>✔ Lists, dictionaries & data structures</li>
          <li>✔ Error handling & debugging</li>
          <li>✔ Working with real datasets</li>
          <li>✔ Writing automation scripts</li>
          <li>✔ Building mini projects</li>
        </ul>

      </div>

      {/* SIDEBAR */}
      <div className="bg-white shadow-md border rounded-lg p-6">

        {/* CLICK-TO-PLAY VIDEO */}
        {!showVideo ? (
          <div
            onClick={() => setShowVideo(true)}
            className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
          >
            <p className="text-center text-gray-600 font-medium">
              ▶ Click to preview video
            </p>
          </div>
        ) : (
          <div className="rounded-lg overflow-hidden mb-4">
            {/* You can replace this YouTube video with your own */}
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/kqtD5dpn9C8"
              title="Python Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <p className="text-3xl font-bold mb-4">$19.99</p>

        <button className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800">
          Enroll Now
        </button>

        <p className="text-center text-gray-500 text-sm mt-4">
          Full lifetime access • Certificate included
        </p>
      </div>

    </div>
  );
}
