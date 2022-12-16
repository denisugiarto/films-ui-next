import Head from "next/head";
import { UserProvider } from "../library/authContext";
import Nav from "./Nav";

const Layout = ({
  user,
  loading = false,
  children,
  title,
  description,
  imageUrl,
}) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <meta name="robots" content="index, follow" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={description} />
      <meta name="og:image" content={imageUrl} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="player" />
      <meta name="twitter:site" content="@filmdatabase" />
      <meta name="twitter:url" content="myurl" />
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

export default Layout;
