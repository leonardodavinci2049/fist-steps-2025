import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABOUT",
  description: "Generated by create ABOUT",
};

const AboutPage = () => {
  return (
    <div className="text-7xl">
      About Page: { 1 + 2 }
      </div>
  )
}

export default AboutPage