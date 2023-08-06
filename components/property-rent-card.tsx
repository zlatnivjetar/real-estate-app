import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./property-rent-card.module.css";

type PropertyRentCardType = {
  /** Style props */
  propBackgroundImage?: Property.BackgroundImage;
};

const PropertyRentCard: NextPage<PropertyRentCardType> = ({
  propBackgroundImage,
}) => {
  const card12Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.card1} style={card12Style}>
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
