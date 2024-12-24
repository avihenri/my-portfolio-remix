import Profile from "~/components/Profile";
import Me from "/me.png";
import About from "~/components/About";
import { AboutProps, LanguageProps } from "~/utils/interface";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { hygraph } from "~/utils/hygraph.server";
import { GET_ABOUT, GET_LANGUAGES } from "~/graphql/queries";
import { useLoaderData } from "@remix-run/react";

interface AppProps {
    aboutData: AboutProps;
    languagesData: LanguageProps;
}

export async function loader({}: LoaderFunctionArgs) {
  try {
    const [languagesData, aboutData] = await Promise.all([
        hygraph.request(GET_LANGUAGES),
        hygraph.request(GET_ABOUT),
    ]);

    return json({ languagesData, aboutData });
} catch (error) {
    console.error("Error fetching data:", error);
    return json({ languagesData: [], aboutData: null });
}
}


export default function Index() {
  const { languagesData, aboutData } = useLoaderData<AppProps>();
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
        bio={aboutData?.about?.bio}
        languagesData={languagesData}
      />
    </div>
  );
}
