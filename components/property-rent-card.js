import { useMemo } from "react";
import styles from "./property-rent-card.module.css";
const PropertyRentCard = ({ propBackgroundImage }) => {
  const card11Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.card1} style={card11Style}>
      <div className={styles.details}>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
          <div className={styles.washington}>Washington</div>
        </div>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/arrowsout6.svg" />
          <div className={styles.washington}>12000</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyRentCard;
