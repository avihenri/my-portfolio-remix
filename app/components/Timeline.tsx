const Timeline = () => {
    const events = [
      {
        date: "2024-01-01",
        title: "Started New Job",
        description: "Began working as a software developer at XYZ Corp.",
      },
      {
        date: "2023-06-15",
        title: "Graduated from University",
        description: "Completed my Bachelor’s degree in Computer Science.",
      },
      {
        date: "2022-09-01",
        title: "Internship at ABC Inc.",
        description: "Worked as a frontend developer intern, learning React.js and TailwindCSS.",
      },
    ];
  
    return (
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {events.map((event, index) => (
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
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {event.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Timeline;
  