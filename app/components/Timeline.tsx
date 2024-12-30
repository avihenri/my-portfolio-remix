import { TimelineProps } from "~/utils/interface";

const Timeline = ({ timelineData } : { timelineData: TimelineProps}) => {
    const formatUKDate = (dateString: string): string => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" }).format(date);
    };
  
    return (
      <>
        {timelineData?.timelines?.length > 0 && (
          <div className="relative border-l border-gray-200 dark:border-gray-700 w-full mx-6">
            {timelineData.timelines.map((event, index) => (
              <div key={index} className="mb-10 ml-6">
                <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-gray-400">
                  <svg
                    className="h-3 w-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 9.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <time className="mb-1 text-sm font-normal font-mono leading-none text-gray-600 dark:text-gray-500">
                  {formatUKDate(event.date)}{" "}
                  {event.endDate ? `- ${formatUKDate(event.endDate)}` : ""}
                </time>
                <h3 className="text-lg font-semibold font-mono text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="mb-4 text-base font-normal font-mono text-slate-600 dark:text-slate-400">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </>
    );    
  };
  
  export default Timeline;
  