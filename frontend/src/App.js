import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
          LuxeStay Hotel Management
        </h1>
        <div className="flex items-center gap-4">
          <button className="bg-gray-200 px-4 py-2 rounded-xl hover:bg-gray-300 transition">
            Logout
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="p-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 shadow-md">
          <h2 className="text-3xl font-bold">Welcome Back, Manager</h2>
          <p className="mt-2 text-lg opacity-90">
            Here’s the live overview of today’s hotel operations.
          </p>
        </div>
      </section>

      {/* DASHBOARD CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-10">

        {/* Bookings */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Today's Bookings</h3>
          <p className="text-4xl font-bold mt-4 text-blue-600">34</p>
          <p className="mt-2 text-gray-500 text-sm">Updated 5 mins ago</p>
        </div>

        {/* Occupancy */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Room Occupancy</h3>
          <p className="text-4xl font-bold mt-4 text-green-600">78%</p>
          <p className="mt-2 text-gray-500 text-sm">Peak hours incoming</p>
        </div>

        {/* Revenue */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Revenue Today</h3>
          <p className="text-4xl font-bold mt-4 text-purple-600">₹ 1,45,500</p>
          <p className="mt-2 text-gray-500 text-sm">Bookings + Facilities</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2025 LuxeStay Hotels — All Rights Reserved
      </footer>
    </div>
  );
}
