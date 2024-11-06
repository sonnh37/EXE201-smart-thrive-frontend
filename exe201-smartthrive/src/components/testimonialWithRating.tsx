import React from "react";
import {Star} from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  courseName: string;
}

const TestimonialWithRating: React.FC<TestimonialProps> = ({
  courseName,
  name,
  role,
  content,
  rating,
}) => {
  return (
    <div className="max-w-md mx-auto mb-24 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <div className="text-black text-xl my-6 font-bold">{courseName}</div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>
        <p className="text-gray-500 mb-4">{content}</p>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 font-semibold">--{name}--</p>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWithRating;
