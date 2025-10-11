import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-white border shadow-md">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10 mix-blend-multiply"
          style={{
            backgroundImage: 'url(/logo.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right -10% top -10%',
          }}
        />
        <div className="relative px-6 py-12 md:px-12 md:py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Learnify
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Learnify is your all-in-one academic platform where teachers design interactive
              courses and students explore, enroll, and track their learning journey — from
              credits and progress to schedules and past achievements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/student" className="btn-primary">Enter Student Portal</Link>
              <Link to="/teacher" className="btn-ghost">Enter Teacher Portal</Link>
            </div>

            <p className="mt-3 text-sm text-neutral-600">
              * Sign-up and authentication features coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-6 md:grid-cols-3 mt-8">
        <div className="card">
          <div className="text-sm text-neutral-600">For Teachers</div>
          <h3 className="text-xl font-semibold mt-1">Create & Manage Courses</h3>
          <p className="text-neutral-700 mt-2">
            Design, publish, and manage your classes and monitor student engagement.
          </p>
        </div>
        <div className="card">
          <div className="text-sm text-neutral-600">For Students</div>
          <h3 className="text-xl font-semibold mt-1">Discover & Enroll Easily</h3>
          <p className="text-neutral-700 mt-2">
            Explore courses, enroll instantly, and stay on top of your learning progress.
          </p>
        </div>
        <div className="card">
          <div className="text-sm text-neutral-600">Beautiful & Academic</div>
          <h3 className="text-xl font-semibold mt-1">Inspired by Excellence</h3>
          <p className="text-neutral-700 mt-2">
            Elegant crimson palette and timeless typography that reflect academic prestige.
          </p>
        </div>
      </section>
    </div>
  )
}
