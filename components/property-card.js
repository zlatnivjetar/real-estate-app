import styles from "./property-card.module.css";
const PropertyCard = ({ imgUrl,name,price }) => {

  return (
    <div className={styles.card1}>
      <img className={styles.propertyImageIcon} alt="" src={imgUrl} />
      <div className={styles.propertyName}>
        <div className={styles.alliumPlaceOrlando}>
          {name}
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.div}>$ {price}</div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="car.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="bathtub.svg" />
          <div className={styles.ft}>4</div>
        </div>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="arrowsout.svg" />
          <div className={styles.ft}>2,096.00 ft</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <img className={styles.userChild} alt="" src="ellipse-1@2x.png" />
          <div className={styles.jennyWilson}>David Digbick</div>
        </div>
        <div className={styles.ctas}>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src="sharenetwork.svg"
            />
          </div>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src="heart.svg"
            />
          </div>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src="plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
