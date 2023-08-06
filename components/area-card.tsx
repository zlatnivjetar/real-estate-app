import type { NextPage } from "next";
import { useMemo } from "react";
import Link from "next/link";
import CSS, { Property } from "csstype";
import styles from "./area-card.module.css";

type AreaCardType = {
  cityName?: string;

  /** Style props */
  propBackgroundImage?: Property.BackgroundImage;
  propPadding?: Property.Padding;
  propBoxSizing?: Property.BoxSizing;
};

const AreaCard: NextPage<AreaCardType> = ({
  cityName,
  propBackgroundImage,
  propPadding,
  propBoxSizing,
}) => {
  const card11Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propBackgroundImage, propPadding, propBoxSizing]);

  return (
    <Link className={styles.card1} href="/" style={card11Style}>
      <div className={styles.text}>
        <div className={styles.centerville}>{cityName}</div>
        <div className={styles.listings}>25 listings</div>
      </div>
    </Link>
  );
};

export default AreaCard;
