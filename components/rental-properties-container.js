import PropertyCard from "./property-card";
import styles from "./rental-properties-container.module.css";
const RentalPropertiesContainer = () => {
  return (
    <div className={styles.latestPropertiesOfRentCard}>
      <div className={styles.contents}>
        <div className={styles.text}>
          <div className={styles.latestPropertiesOf}>
            Latest Properties of Rent
          </div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cardsRow}>
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc7@2x.png"
            name="92 Big Bucks, Toronto, Canada"
            price="589,900"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc8@2x.png"
            name="92 Big Bucks, Toronto, Canada"
            price="589,900"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc9@2x.png"
            name="92 Big Bucks, Toronto, Canada"
            price="589,900"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc10@2x.png"
            name="92 Big Bucks, Toronto, Canada"
            price="589,900"
          />
        </div>
      </div>
      <button className={styles.cta}>
        <div className={styles.loadMoreListing}>Load more listing</div>
      </button>
    </div>
  );
};

export default RentalPropertiesContainer;
