import SocialCard from "~/components/SocialCard";
import type { ReactElement } from 'react';

const ContactMe= () => {
    const GithubIcon: ReactElement = (
      <span><svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="20"
        width="20"
      >
        <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg></span>
    );

    const LinkedInIcon: ReactElement = (
      <span>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="20"
          width="20"
        >
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.54 19.54H5.75v-9h2.79v9zm-1.39-10.3c-.89 0-1.61-.72-1.61-1.61s.72-1.61 1.61-1.61 1.61.72 1.61 1.61-.72 1.61-1.61 1.61zm12.39 10.3h-2.79v-4.39c0-1.05-.02-2.39-1.46-2.39-1.46 0-1.68 1.14-1.68 2.32v4.46h-2.79v-9h2.68v1.23h.04c.37-.7 1.27-1.45 2.62-1.45 2.8 0 3.32 1.84 3.32 4.22v5z" />
        </svg>
      </span>
    );    
  
    return (
       <div className="flex flex-col items-center p-8 min-h-screen">
        <h1 className="font-mono text-4xl font-bold p-4 mb-6">Socials</h1>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <SocialCard
            username="avihenri"
            desc="Personal account"
            service="GitHub"
            href="https://github.com/avihenri"
            icon={GithubIcon}
          />
          <SocialCard
            username="avril-m-henry"
            desc="Connect with me"
            service="LinkedIn"
            href="https://www.linkedin.com/in/avril-m-henry"
            icon={LinkedInIcon}
          />
          <SocialCard
            username="avihawk"
            desc="Work account"
            service="GitHub"
            href="https://github.com/avihawk"
            icon={GithubIcon}
          />
        </div>
      </div>
    );
  };
  
  export default ContactMe;