import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./info-card.module.css";

type InfoCardType = {
  listingImageId?: string;
  homeActionText?: string;

  /** Style props */
  propPadding?: Property.Padding;
  propWidth?: Property.Width;
};

const InfoCard: NextPage<InfoCardType> = ({
  listingImageId,
  homeActionText,
  propPadding,
  propWidth,
}) => {
  const sellYourHomeStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div className={styles.sellYourHome} style={sellYourHomeStyle}>
      <div className={styles.contents}>
        <img className={styles.icon} alt="" src={listingImageId} />
        <div className={styles.contents}>
          <div className={styles.sellYourHome1}>{homeActionText}</div>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className={styles.readMore}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
