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
  description: string;
}

const features: FeatureItem[] = [
  {
    text: "AI-Powered Matching",
    icon: Users,
    description:
      "Connect companies with ideal candidates using advanced AI algorithms",
  },
  {
    text: "Smart Job Discovery",
    icon: Briefcase,
    description:
      "Help talent find their perfect role with personalized job recommendations",
  },
  {
    text: "Analytics Dashboard",
    icon: LineChart,
    description: "Gain insights into hiring trends and candidate preferences",
  },
  {
    text: "Career Growth Tracking",
    icon: User,
    description:
      "Enable professionals to visualize and plan their career progression",
  },
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="btn btn-primary btn-lg">
              For Companies
              <Building className="ml-2 h-5 w-5" />
            </button>
            <button className="btn btn-secondary btn-lg">
              For Talent
              <User className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {features.map(({ text, icon: Icon, description }) => (
              <div
                key={text}
                className="flex items-start space-x-4 bg-base-100 p-6 rounded-lg shadow-md"
              >
                <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{text}</h3>
                  <p className="text-base-content text-opacity-80">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">
              Join the Hiretop Community
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered flex-grow max-w-xs"
              />
              <select className="select select-bordered max-w-xs">
                <option disabled selected>
                  I am a...
                </option>
                <option>Job Seeker</option>
                <option>Employer</option>
                <option>Recruiter</option>
              </select>
              <button className="btn btn-accent">
                Get Started
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
