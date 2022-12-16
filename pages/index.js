import Layout from "../components/Layout";
import { useFetchUser } from "../library/authContext";

const Home = () => {
  const { user, loading } = useFetchUser();
  return (
    <Layout
      user={user}
      title="Film Database"
      description="Film database with nextJS"
      imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.co.id%2FAttraction_Review-g499447-d152724-Reviews-Zona_Arqueologica_de_Coba-Coba_Yucatan_Peninsula.html&psig=AOvVaw0Sv1DSOk7xW5zXz04ya3xF&ust=1671250117413000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLD7l4Oi_fsCFQAAAAAdAAAAABAD"
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
