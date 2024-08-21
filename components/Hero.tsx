import React from "react";
import { Search, Users, Briefcase } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-8">Hiretop</h1>
          <p className="text-2xl mb-8">Revolutionize Your Hiring Process</p>
          <div className="flex justify-center space-x-4 mb-12">
            <div className="flex flex-col items-center">
              <Search size={36} className="text-primary mb-2" />
              <span>Smart Search</span>
            </div>
            <div className="flex flex-col items-center">
              <Users size={36} className="text-secondary mb-2" />
              <span>Talent Pool</span>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase size={36} className="text-accent mb-2" />
              <span>Job Matching</span>
            </div>
          </div>
          <button className="btn btn-primary btn-lg mr-4">Get Started</button>
          <button className="btn btn-outline btn-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
