"use client";
import React from "react";
import {
  ArrowRight,
  Briefcase,
  Users,
  LineChart,
  Building,
  User,
  LucideIcon,
  Snowflake,
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
    <div className="hero min-h-screen bg-gradient-to-br from-base-200 to-base-300 relative overflow-hidden">
      {/* Snowflake decorations */}
      <div className="absolute top-10 left-10 text-primary opacity-20">
        <Snowflake size={40} />
      </div>
      <div className="absolute bottom-10 right-10 text-primary opacity-20">
        <Snowflake size={40} />
      </div>
      <div className="hero-content text-center z-10">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-6 text-primary">
            Hiretop: Connecting Talent with Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-base-content">
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
                className="flex items-start space-x-4 bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">
                    {text}
                  </h3>
                  <p className="text-base-content">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
