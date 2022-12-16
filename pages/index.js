import Layout from "../components/Layout";
import { useFetchUser } from "../library/authContext";

const Home = () => {
  const { user, loading } = useFetchUser();
  return (
    <Layout
      user={user}
      title="Film Database"
      description="Film database with nextJS"
      imageUrl="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
        Strapi{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Film Reviews
        </span>
      </h1>
      <p className="py-4">
        This is a sample website recreated by{" "}
        <a
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500"
          href="https://github.com/denisugiarto"
        >
          Deni Sugiarto
        </a>{" "}
        from{" "}
        <a
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500"
          href="https://jamstack.training"
        >
          Jamstack.Training
        </a>
        .
      </p>
    </Layout>
  );
};

export default Home;
