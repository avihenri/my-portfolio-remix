import { AboutProps, TagProps, TimelineProps } from "~/utils/interface";
import Timeline from "./Timeline";
import { useEffect, useState } from "react";

export default function About({
    aboutData,
    tagData,
    timelineData
}: {
    aboutData: AboutProps,
    tagData: TagProps,
    timelineData: TimelineProps
}) {
    const bio = aboutData?.about?.bio;
    const otherExperience = aboutData?.about?.otherExperience;
    const [sanitizedBio, setSanitizedBio] = useState<string | null>(null);
    const [sanitizedOtherExperience, setSanitizedOtherExperience] = useState<string | null>(null);

    useEffect(() => {
        const processedBio = bio?.html?.replace(/(<p><\/p>)+/g, "<br>");
        import("dompurify").then((DOMPurify) => {
            const createDOMPurify = DOMPurify.default(window);
            setSanitizedBio(createDOMPurify.sanitize(processedBio));
        });
    }, [bio]);

    useEffect(() => {
        const processedOtherExperience = otherExperience?.html?.replace(/(<p><\/p>)+/g, "<br>");
        import("dompurify").then((DOMPurify) => {
            const createDOMPurify = DOMPurify.default(window);
            setSanitizedOtherExperience(createDOMPurify.sanitize(processedOtherExperience));
        });
    }, [otherExperience]);

    return (
        <>
            { tagData && (
                <>
                    <div className="flex flex-wrap justify-center align-middle my-16">
                        {tagData?.tags && tagData?.tags.filter((tag) => tag.type === 'coding').map((tag) => (
                                <span key={tag.id} className=" bg-teal-600 text-white dark:text-gray-900 text-lg font-mono font-medium me-2 px-2.5 py-0.5 my-1 rounded">
                                    {tag.name}
                                </span>
                        ))}
                    </div>
                </>
            )}

            <h1 className="tracking-tighter dark:text-slate-100 text-slate-800 text-3xl md:text-4xl mx-auto mb-6 font-mono">
                About Me..
            </h1>

            <div className="px-4">
                { bio && (
                    <>
                        <h2 className="tracking-tighter font-bold dark:text-slate-300 text-slate-700 text-xl md:text-2xl mx-auto m-6 font-mono">
                            Bio
                        </h2>
                        <div
                            className="tracking-tighter dark:text-slate-400 text-slate-600 text-base 2xl:text-xl mx-auto m-6 font-mono"
                            dangerouslySetInnerHTML={{ __html: sanitizedBio || '' }}
                        />
                    </>
                )}

                {timelineData && (
                    <div className="mt-16">
                        <h2 className="tracking-tighter font-bold dark:text-slate-300 text-slate-700 text-xl md:text-2xl my-6 font-mono">
                            Tech Experience
                        </h2>
                        <Timeline timelineData={timelineData} />
                        <h2 className="tracking-tighter font-bold dark:text-slate-300 text-slate-700 text-xl md:text-2xl my-6 font-mono">
                            Other Experience
                        </h2>
                        <div
                            className="tracking-tighter dark:text-slate-400 text-slate-600 text-base 2xl:text-xl mx-auto m-6 font-mono"
                            dangerouslySetInnerHTML={{ __html: sanitizedOtherExperience || '' }}
                        />
                    </div>
                )}  
            </div>
        </>
    );
}