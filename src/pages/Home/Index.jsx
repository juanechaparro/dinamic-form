import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/habi2.png";
import "../../styles/Home.css";

export const Home = () => {
  const { StepsPaths, StepsPathsLoading } = useSelector((state) => state.form);

  return (
    <div className="home">
      <div className="banner-container">
        <img className="banner-image" src={bannerImage} alt="Banner" />
        <div className="banner-content">
          <h1 className="banner-title">Bienvenido a nuestro sitio</h1>
          <p className="banner-description">
            Completa la información del inmueble para comenzar
          </p>
          {StepsPathsLoading ? (
            <div>Loading...</div>
          ) : (
            <Link to={StepsPaths[1]} className="banner-link">
              Completar información
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
