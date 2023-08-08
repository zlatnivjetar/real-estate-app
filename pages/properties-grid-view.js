import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button, Pagination } from "antd";
import {DownOutlined} from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";
import styles from "./properties-grid-view.module.css";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const defaultOrder = [
  {
  key:"1",
  label: (
    <a onClick={(e) => e.preventDefault()}>Popular Properties</a>
    )
  },
   {
  key:"2",
  label: (
    <a onClick={(e) => e.preventDefault()}>Latest Properties</a>
    )
  },
   {
  key:"3",
  label: (
    <a onClick={(e) => e.preventDefault()}>Recommended Properties</a>
    )
  },
];

const PropertiesGridView = () => {
  const client = createClient(process.env.NEXT_PUBLIC_URL, process.env.NEXT_PUBLIC_KEY);

  const [properties,setProperties] = useState([]);

  useEffect(() => {
     const fetchProperties = async () => {
      const result = await client.from('properties').select('*');
      setProperties(result.data);
     }
     fetchProperties();
  }, [])

  return (
    <div className={styles.propertiesGridView}>
      <Header hamburger={false} />
      <div className={styles.category}>
        <div className={styles.properties}>
          <div className={styles.properties1}>Properties</div>
          <div className={styles.homePropertiesContainer}>
            <span>{`Home / `}</span>
            <span className={styles.properties2}>Properties</span>
          </div>
        </div>
      </div>
      <div className={styles.contents}>
        <div className={styles.container}>
          <div className={styles.sortBy}>
            <div className={styles.options}>
              <img
                className={styles.listbulletsIcon}
                alt=""
                src="/listbullets.svg"
              />
              <img
                className={styles.listbulletsIcon}
                alt=""
                src="/squaresfour.svg"
              />
            </div>
            <div className={styles.text}>Sort by:</div>
            <Dropdown
              menu={{ items:defaultOrder}}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer allProperties={properties} />
        <div className="properties grid wrapper">
          <Pagination 
          defaultCurrent={1}
          total={50}
          />
        </div>
      </div>
      <Footer
        imageDimensions="/houseline1.svg"
        dimensionText="/social-media-logo.svg"
        dimensionCode="/social-media-logo1.svg"
        dimensionCodeImageUrl="/social-media-logo2.svg"
        productDimensions="/social-media-logo3.svg"
        dimensionCodeImageText="/social-media-logo4.svg"
      />
    </div>
  );
};

export default PropertiesGridView;
