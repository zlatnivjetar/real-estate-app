import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";
import styles from "./index.module.css";
const PropertiesGridView: NextPage = () => {
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
              overlay={
                <Menu>
                  {(
                    [
                      { value: "Popular properties" },
                      { value: "Latest properties" },
                      { value: "Recommended properties" },
                      { value: "Bargains" },
                    ] as any
                  ).map((option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
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
        <PropertiesGridContainer />
        <div className={styles.pagination}>
          <div className={styles.backArrow}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/arrowleft.svg"
            />
          </div>
          <div className={styles.div}>
            <div className={styles.div1}>1</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.div1}>2</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.div1}>3</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.div1}>...</div>
          </div>
          <div className={styles.div2}>
            <div className={styles.div1}>54</div>
          </div>
          <div className={styles.forwardArrow}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/arrowright.svg"
            />
          </div>
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
