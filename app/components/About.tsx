import { LanguageProps } from "~/utils/interface";
import Timeline from "./Timeline";

export default function About({ bio, languagesData }: { bio: string, languagesData: LanguageProps }) {
    return (
        <>
            { languagesData && (
                <div className="flex flex-wrap justify-center align-middle my-16">
                    {languagesData?.languages && languagesData?.languages.map((language) => (
                            <span key={language.id} className=" bg-teal-600 text-gray-100 dark:text-gray-900 text-lg font-mono font-medium me-2 px-2.5 py-0.5 my-1 rounded border border-gray-500">
                                {language.name}
                            </span>
                    ))}
                </div>
            )}

            <h1 className="tracking-tighter dark:text-slate-100 text-slate-800 text-3xl md:text-4xl mx-auto m-6 font-mono">
                About Me..
            </h1>

            <div className="px-4">
                { bio && (
                    <>
                        <h2 className="tracking-tighter font-bold dark:text-slate-300 text-slate-700 text-xl md:text-2xl mx-auto m-6 font-mono">
                            Bio
                        </h2>
                        <p className="tracking-tighter dark:text-slate-400 text-slate-600 text-base 2xl:text-xl mx-auto m-6 font-mono">
                            {bio}
                        </p>
                    </>
                )}


                <div className="flex w-1/2 justify-center align-middle px-4">
                    <Timeline />
                </div>
            </div>
        </>
    );
}