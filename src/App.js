import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* 🔶 Student Project Banner */}
      <div className="bg-yellow-100 border-b border-yellow-300 text-yellow-800 text-sm text-center p-2">
        🚧 This is a student-made project by <strong>Vyom Sagar</strong> for
        educational purposes. It is not the official BBIT website.
      </div>
      

      {/* 🔷 BBIT Top Navigation */}
      <header className="bg-[#007DC5] text-white text-sm font-medium">
        <div className="flex justify-between items-center px-4 py-2">
          {/* 🔹 Left: Menu Links */}
          <nav className="space-x-4">
            <a
              href="https://www.bbit.edu.in/pages/research"
              className="hover:underline"
            >
              Research
            </a>
            <a
              href="https://www.bbit.edu.in/pages/alumni"
              className="hover:underline"
            >
              Alumni
            </a>
            <a
              href="https://www.flickr.com/photos/bbitpict/collections/72157666248476002/"
              className="hover:underline"
            >
              Photo Gallery
            </a>
            {/* <a href="#" className="hover:underline">Notice</a>
      <a href="#" className="hover:underline">News & Events</a>
      <a href="#" className="hover:underline">Grievance/Feedback</a> */}
            <span className="ml-2">For Enquiry:</span>
          </nav>

          {/* 🔹 Right: Apply Button + Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.bbit.edu.in/apply-now-admission"><div className="bg-[#b71c50] px-3 py-1 text-white font-semibold rounded-md text-center leading-tight hover:opacity-90">
              Apply <br /> Now
            </div>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </header>

      {/* 🖼️ Hero Carousel */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[400px] w-full"
      >
        <SwiperSlide>
          <img
            src="https://www.bbit.edu.in/assets/upload/837715_518677_bannere0011.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bbit.edu.in/assets/upload/94560_banner003.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.bbit.edu.in/assets/upload/935594_bbit22.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      
      {/* 💬 Chatbot Usage Instruction */}
      <div className="bg-blue-50 border border-blue-300 text-blue-900 text-center font-semibold text-xl p-3 rounded-md mt-6 mx-4">
        💡 <strong>Tip:</strong> To get help from the chatbot, just say{" "}
        <span className="text-blue-700">"Hi"</span> first, then ask any question
        related to <strong>BBIT</strong>.
      </div>
      <div className="bg-blue-100 border-b border-blue-300 text-sl text-center p-6">
        <div className="text-xl text-blue-900"><strong>About the Chatbot</strong></div> for
        This website features an intelligent chatbot developed using Botpress, designed to assist users with comprehensive information about the Budge Budge Institute of Technology (BBIT). Whether you're curious about admission procedures, eligibility criteria, faculty members, or academic offerings — the chatbot is ready to help. Simply start by saying "Hi" and ask any question related to BBIT. It responds with detailed, step-by-step guidance and even provides official links when needed. This chatbot was built as part of a student project by Vyom Sagar to enhance the user experience and demonstrate the power of AI-driven support in education.
      </div>

      {/* 🔷 Info Section */}
      <main className="w-full mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-[#004aad] text-center mb-4 mr-8 ml-8">
          Welcome to BBIT
        </h2>
        {/* 🔔 Notice Board Section */}
        <section className="mt-12 mx-[10%]">
          <h3 className="text-2xl font-bold text-[#004aad] mb-4 flex items-center gap-2">
            📌 Notice Board
          </h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 shadow-sm rounded-md space-y-2">
            <p className="text-sm text-gray-800">
              🎓 Admission open for 2025 batch. Apply before{" "}
              <strong>30th July</strong>.
            </p>
            <p className="text-sm text-gray-800">
              🗓️ Orientation program for 1st year students on{" "}
              <strong>10th August</strong>.
            </p>
            <p className="text-sm text-gray-800">
              🧪 Mid-Sem exams scheduled from <strong>15th September</strong>.
            </p>
          </div>
        </section>

        {/* 🎉 Upcoming Events Section */}
        <section className="mt-12 mx-[10%]">
          <h3 className="text-2xl font-bold text-[#004aad] mb-4">
            🎉 Upcoming Events
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Tech Fest 2025",
                date: "20th August 2025",
                location: "BBIT Campus",
                emoji: "🚀",
              },
              {
                title: "Guest Lecture: AI & Robotics",
                date: "28th August 2025",
                location: "Seminar Hall A",
                emoji: "🤖",
              },
              {
                title: "Annual Sports Meet",
                date: "5th September 2025",
                location: "BBIT Grounds",
                emoji: "🏅",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white p-4 border border-gray-200 rounded-md shadow hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-blue-700 mb-1">
                  {event.emoji} {event.title}
                </h4>
                <p className="text-sm text-gray-600">📍 {event.location}</p>
                <p className="text-sm text-gray-600">📅 {event.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 📰 News & Announcements Section */}
        <section className="mt-12 mx-[10%]">
          <h3 className="text-2xl font-bold text-[#004aad] mb-4">
            📰 News & Announcements
          </h3>
          <div className="space-y-4">
            {[
              {
                title:
                  "BBIT ranked among top engineering colleges in West Bengal",
                date: "15 June 2025",
              },
              {
                title: "MoU signed with Tata Consultancy Services (TCS)",
                date: "5 June 2025",
              },
              {
                title: "Scholarship applications open for meritorious students",
                date: "25 May 2025",
              },
            ].map((news, idx) => (
              <div
                key={idx}
                className="bg-white border border-blue-100 shadow-sm p-4 rounded-md hover:shadow-md transition"
              >
                <h4 className="font-semibold text-blue-800 mb-1">
                  {news.title}
                </h4>
                <p className="text-sm text-gray-500">
                  Published on: {news.date}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* 👤 Leadership Section - Full Width */}
        <section className="bg-[#0c2b5b] w-full text-white py-12">
          <div className="w-full px-4 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {/* 👨 Chairman */}
              <div className="flex flex-col items-center">
                <img
                  src="https://www.bbit.edu.in/assets/frontend/images/chairman.jpg"
                  alt="Shri Jagannath Gupta"
                  className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                />
                <p className="mt-4 text-sm max-w-xs">
                  It gives me immense pleasure to welcome each of you to our
                  family at Budge Budge Insti...
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Shri Jagannath Gupta
                </h3>
                <span className="text-sm text-gray-300">Chairman</span>
              </div>

              {/* 👩 Executive Director */}
              <div className="flex flex-col items-center">
                <img
                  src="https://www.bbit.edu.in/assets/frontend/images/ShubhangiGupta.jpg"
                  alt="Dr. Shubhangi Gupta"
                  className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                />
                <p className="mt-4 text-sm max-w-xs">
                  The success story of an Educational institution is woven
                  around its pillars which supp...
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Dr. Shubhangi Gupta
                </h3>
                <span className="text-sm text-gray-300">
                  Executive Director
                </span>
              </div>

              {/* 👨 Principal */}
              <div className="flex flex-col items-center">
                <img
                  src="https://www.bbit.edu.in/assets/frontend/images/proincipal.jpeg"
                  alt="Prof. (Dr.) Sandeep Malik"
                  className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
                />
                <p className="mt-4 text-sm max-w-xs">
                  THE PRINCIPAL: On behalf of all our Faculty, Staff and
                  Students, I would like to welco...
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  Prof. (Dr.) Sandeep Malik
                </h3>
                <span className="text-sm text-gray-300">Principal</span>
              </div>
            </div>
          </div>
        </section>

        <p className="text-gray-700 text-center max-w-2xl mx-[10%] leading-relaxed">
          BBIT is committed to offering top-tier engineering and management
          education. This site is a **student project clone** with a chatbot to
          help explore features interactively.
        </p>
      </main>

      {/* 🔷 Footer */}
      <footer className="bg-[#004aad] text-white text-center p-4">
        &copy; {new Date().getFullYear()} BBIT Clone | Made by Vyom Sagar
      </footer>
    </div>
  );
}

export default App;
