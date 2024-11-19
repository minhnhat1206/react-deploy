// src/views/CourseView.jsx
import React from "react";
import { FaFilter, FaSort } from "react-icons/fa";

const CourseView = ({ courses}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col h-full hover:text-orange-500">
            <img
              src={`https://${course.image}`}
              alt={course.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1516116216624-53e697fedbea";
              }}
            />
            <div className="p-4 flex-grow" style={{ minHeight: "150px" }}>
              <p className="text-gray-600 mb-2">by {course.author}</p>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex items-center text-gray-500 text-sm space-x-2">
                <span>{course.timeforlearn}</span>
                <span>{course.student}</span>
              </div>
            </div>
            <div className="border-t border-gray-200 p-4 flex items-center justify-between mt-auto hover:text-orange-500">
              <p className="text-gray-400 line-through">${course.price.toFixed(2)}</p>
              <p className="text-gray-500 font-semibold ml-2 ">Free</p>
            </div>
            <div className="p-4">
              <button className="bg-white-400 text-organge rounded-md px-4 py-2 w-full font-semibold hover:text-white hover:bg-orange-600 focus:outline-none">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseView;