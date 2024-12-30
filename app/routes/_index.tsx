import Profile from "~/components/Profile";
import Me from "/me.png";
import About from "~/components/About";
import { AboutProps, LanguageProps, TimelineProps } from "~/utils/interface";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { hygraph } from "~/utils/hygraph.server";
import { GET_ABOUT, GET_LANGUAGES, GET_TIMELINE } from "~/graphql/queries";
import { useLoaderData } from "@remix-run/react";

interface AppProps {
    aboutData: AboutProps;
    languagesData: LanguageProps;
    timelineData: TimelineProps;
}

export async function loader({}: LoaderFunctionArgs) {
  let languagesData: LanguageProps[] = [];
  let aboutData: AboutProps | null = null;
  let timelineData: TimelineProps[] = [];

  try {
    languagesData = await hygraph.request(GET_LANGUAGES);
  } catch (error) {
    console.error("Error fetching languages data:", error);
  }

  try {
    aboutData = await hygraph.request(GET_ABOUT);
  } catch (error) {
    console.error("Error fetching about data:", error);
  }

  try {
    timelineData = await hygraph.request(GET_TIMELINE);
  } catch (error) {
    console.error("Error fetching timeline data:", error);
  }


  return new Response(
    JSON.stringify({
      languagesData,
      aboutData,
      timelineData
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}


export default function Index() {
  const {
    languagesData,
    aboutData,
    timelineData,
  } = useLoaderData<AppProps>();

  return (
    <div>
      <Profile
        imageSrc={Me}
        name="Avril Henry"
        description="Software Developer who is constantly learning and loving it!"
        width={220}
        height={220} 
      />

      <About 
        aboutData={aboutData}
        languagesData={languagesData}
        timelineData={timelineData}
      />
    </div>
  );
}
