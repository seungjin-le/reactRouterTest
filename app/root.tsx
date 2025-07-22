import {
  isRouteErrorResponse,
  Links, type LinksFunction,
  Meta,
  Outlet, Route,
  Scripts,
  ScrollRestoration,
} from "react-router";


import 'assets/styles/tailwindcss.css'
import type { ReactNode } from "react";


export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1 " />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error } : any) {

  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
console.log(error)
  }

  return (
    <main className="flex-row-center">
      <h1>{JSON.stringify(error.status )}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{JSON.stringify(error.statusText)}</code>
        </pre>
      )}
    </main>
  );
}
