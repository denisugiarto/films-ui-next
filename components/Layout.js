import Head from "next/head";
import { useEffect, useState } from "react";
import { UserProvider } from "../library/authContext";
import Nav from "./Nav";

const Layout = ({
  user,
  loading = false,
  children,
  title,
  description,
  imageUrl,
  keywords,
}) => {
  const [baseUrl, setBaseUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.host);
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <UserProvider value={{ user, loading }}>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#4285f4" />
        <title>{title} | {baseUrl}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720"></meta>
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@filmdatabase" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="referrer" content="origin-when-cross-origin" />
      </Head>
      <Nav />
      <main className="px-4">
        <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16">
          <div className="text-2xl font-medium">{children}</div>
        </div>
      </main>
    </UserProvider>
  );
};

export default Layout;
