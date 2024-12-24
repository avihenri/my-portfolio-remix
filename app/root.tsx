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
