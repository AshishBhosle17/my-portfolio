import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";

import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Ashish Bhosle | Web Developer"
        description="Learn more about Ashish Bhosle, a dedicated Web Application Developer with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`/about`}
        openGraph={{
          url: `/about`,
          title: "Learn About Ashish Bhosle - Web Developer",
          description:
            "Dive into the story of Ashish Bhosle, a Web Application Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.twitterImage}`,
              alt: "Ashish Bhosle - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "About Me, MERN Stack Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />

      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
