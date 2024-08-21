import React from "react";
import {
  ArrowRight,
  Briefcase,
  Users,
  LineChart,
  Building,
  User,
  LucideIcon,
} from "lucide-react";

interface FeatureItem {
  text: string;
  icon: LucideIcon;
  forCompany: boolean;
}

const features: FeatureItem[] = [
  { text: "AI-Powered Matching", icon: Users, forCompany: true },
  { text: "Smart Job Discovery", icon: Briefcase, forCompany: false },
  { text: "Analytics Dashboard", icon: LineChart, forCompany: true },
  { text: "Career Growth Tracking", icon: User, forCompany: false },
];

const HeroSection: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-300 to-base-200">
      <div className="hero-content text-center">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-primary">
            Hiretop: Connecting Talent with Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-base-content text-opacity-90">
            Empowering companies to find top talent and helping professionals
            discover their dream careers.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-base-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">For Companies</h2>
                <p className="mb-4">Find and hire top talent efficiently</p>
                <ul className="text-left list-disc list-inside mb-4">
                  {features
                    .filter((f) => f.forCompany)
                    .map(({ text }) => (
                      <li key={text}>{text}</li>
                    ))}
                </ul>
              </div>
              <button className="btn btn-primary">
                Start Hiring
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 bg-base-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <User className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">For Talent</h2>
                <p className="mb-4">Discover your next career opportunity</p>
                <ul className="text-left list-disc list-inside mb-4">
                  {features
                    .filter((f) => !f.forCompany)
                    .map(({ text }) => (
                      <li key={text}>{text}</li>
                    ))}
                </ul>
              </div>
              <button className="btn btn-secondary">
                Find Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
