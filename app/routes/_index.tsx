import Profile from "~/components/Profile";
import Me from "/me.png";
import About from "~/components/About";
import { AboutProps, TagProps, PhotoGalleryProps, TimelineProps } from "~/utils/interface";
import { LoaderFunctionArgs } from "@remix-run/node";
import { hygraph } from "~/utils/hygraph.server";
import { GET_ABOUT, GET_IMAGES, GET_TAGS, GET_TIMELINE } from "~/graphql/queries";
import { useLoaderData } from "@remix-run/react";
import PhotoGallery from "~/components/PhotoGallery";

interface AppProps {
    aboutData: AboutProps;
    tagData: TagProps;
    timelineData: TimelineProps;
    photoGalleryData: PhotoGalleryProps;
}

export async function loader({}: LoaderFunctionArgs) {
  let tagData: TagProps[] = [];
  let aboutData: AboutProps | null = null;
  let timelineData: TimelineProps[] = [];
  let photoGalleryData: PhotoGalleryProps[] = [];

  try {
    tagData = await hygraph.request(GET_TAGS);
  } catch (error) {
    console.error("Error fetching tags data:", error);
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

  try {
    photoGalleryData = await hygraph.request(GET_IMAGES);
  } catch (error) {
    console.error("Error fetching images data:", error);
  }

  return new Response(
    JSON.stringify({
      tagData,
      aboutData,
      timelineData,
      photoGalleryData,
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
    tagData,
    aboutData,
    timelineData,
    photoGalleryData,
  } = useLoaderData<AppProps>();

  return (
    <div>
      <Profile
        imageSrc={Me}
        name="Avril Henry"
        description="Software Developer who is constantly learning and loving it!"
        width={250}
        height={250} 
      />

      <About 
        aboutData={aboutData}
        tagData={tagData}
        timelineData={timelineData}
      />

      {photoGalleryData && (
        <div className="my-16">
          <h2 className="tracking-tighter font-bold dark:text-slate-300 text-slate-700 text-xl md:text-2xl mx-auto m-6 font-mono">
            Photo Gallery
          </h2>
          <PhotoGallery photoGalleryData={photoGalleryData} />
        </div>
      )}
    </div>
  );
}
