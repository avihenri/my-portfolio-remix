import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";
import { GET_PROJECTS } from "~/graphql/queries";
import { hygraph } from "~/utils/hygraph.server";
import { ProjectProps } from "~/utils/interface";

interface AppProps {
  projectsData: ProjectProps;
}

export async function loader({}: LoaderFunctionArgs) {
  try {
    const projectsData = await hygraph.request(
      gql`
          query MyQuery {
            projects(orderBy: publishedAt_DESC) {
              id
              overview
              title
              github
              demoLink
              publishedAt
            }
        }
        `
    );
    return json({ projectsData });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return json({ projectsData: [] });
  }
}

const Projects = () => {
  const { projectsData } = useLoaderData<AppProps>();

  return (
    <section className="py-8 px-4">
      <h1 className="text-3xl font-mono leading-9 tracking-tight sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 mb-12">
        My Projects..
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">

        {(!projectsData?.projects || projectsData.projects.length === 0) ? (
          <p className="text-center font-mono dark:text-slate-400 text-slate-600 text-xl">
            No projects found. Check back later.
          </p>

        ) : (
          projectsData.projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-black border border-gray-700 shadow-lg rounded-lg overflow-hidden w-96 transition-transform duration-300 hover:scale-105"
            >
              {/* Placeholder for project image */}
              {/* Uncomment and update the `src` if image is available */}
              {/* <img
                className="w-full object-cover h-48"
                src={project.image || "https://via.placeholder.com/400x300"}
                alt={project.title}
              /> */}

              <div className="flex flex-col flex-1 p-4 justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white font-mono">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-2 font-mono">
                    {project.overview || "No description available."}
                  </p>
                </div>

                <div className="my-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center my-2 text-white bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 rounded-lg px-4 py-2 block font-mono"
                    >
                      View GitHub repository
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-300 rounded-lg px-4 py-2 block font-mono"
                    >
                      View site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
