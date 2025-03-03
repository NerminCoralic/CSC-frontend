import Camp from "@/components/Camp";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Features from "@/components/Features";
import TourApplication from "@/components/TourApplication";
import Gallery from "@/components/Gallery";
import Accordion from "@/components/Accordion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fetchBlogs = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_BLOGS}`,
    },
  };

  try {
    const res = await fetch(
      `https://scintillating-adaptation-production.up.railway.app/api/blogs?populate=*`,
      options
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

const fetchGallery = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_GALERY}`,
    },
  };

  try {
    const res = await fetch(
      `https://scintillating-adaptation-production.up.railway.app/api/galleries?populate=*`,
      options
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

const fetchQuestions = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_QA}`,
    },
  };

  try {
    const res = await fetch(
      `https://scintillating-adaptation-production.up.railway.app/api/qas`,
      options
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

const Home = async () => {
  const [blogs, gallery, qas] = await Promise.all([
    fetchBlogs(),
    fetchGallery(),
    fetchQuestions(),
  ]);
  return (
    <>
      <Hero />
      <Camp blogs={blogs} />
      <AboutMe />
      <Features />
      <TourApplication />
      <Gallery gallery={gallery} />
      <Accordion qas={qas?.data || []} />
      <Analytics />
      <SpeedInsights />
    </>
  );
};
export default Home;
