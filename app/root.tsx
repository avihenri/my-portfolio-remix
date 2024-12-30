import { type LinksFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { Analytics } from "@vercel/analytics/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css?url";
import { darkSessionResolver } from "./utils/session.server";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { ReactNode } from "react";
import TopNavbar from "./components/navbar/TopNavbar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await darkSessionResolver(request);

  return {
    theme: getTheme(),
  };
}

export default function AppWithProvider() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  let message = "Oops! Looks like you’ve wandered off track.";
  let subMessage = "The page you're looking for either it doesn't exist, or it’s taking a coffee break ☕";
  let status = 404;

  if (error instanceof Response) {
    status = error.status;
    message = error.statusText || "Oops! Something went wrong.";
    subMessage = "Looks like we ran into trouble!";
  }

  return (
    <html lang="en">
       <head>
        <Meta />
        <Links />
        <title>Oops! Something went wrong.</title>
      </head>
      <body className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="max-w-3xl text-center px-6">
          <h1 className="text-5xl font-bold mb-6">{message}</h1>
          <p className="text-2xl font-bold mb-4">{status}</p>
          <p className="text-lg mb-8 text-gray-400">{subMessage}</p>
          <a
            href="/"
            className="text-gray-800 bg-teal-600 hover:bg-teal-500 px-4 py-2 font-bold rounded-lg transition-colors duration-300"
          >
            Head back to homepage
          </a>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


function App() {
  const { theme } = useLoaderData<typeof loader>();
  const [dTheme] = useTheme();
  return (
    <html lang="en" data-theme={dTheme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>Avril Henry</title>
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body className="bg-white text-black dark:bg-black  dark:text-white">
        <Analytics />

        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TopNavbar />
      <main className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-5">
        {children}
      </main>
    </div>
  );
}
