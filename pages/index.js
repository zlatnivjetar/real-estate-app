import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import FeatureContainer from "../components/feature-container";
import RentalPropertiesContainer from "../components/rental-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";
import styles from "./index.module.css";
const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
        <meta
          name="description"
          content="Search and discover your perfect new home!"
        />
      </Head>
      <div className={styles.landingPage}>
        <Header hamburger={false} />
        <Hero />
        <AreasContainer />
        <FeatureContainer />
        <RentalPropertiesContainer />
        <RentPropertiesForm />
        <Contact />
        <Footer
          imageDimensions="/houseline2.svg"
          dimensionText="/social-media-logo5.svg"
          dimensionCode="/social-media-logo6.svg"
          dimensionCodeImageUrl="/social-media-logo7.svg"
          productDimensions="/social-media-logo8.svg"
          dimensionCodeImageText="/social-media-logo9.svg"
          propOverflow="unset"
        />
      </div>
    </>
  );
};

export default LandingPage;
