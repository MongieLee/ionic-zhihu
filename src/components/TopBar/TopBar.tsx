import React, { useState } from "react";
import {
  IonIcon,
  IonSearchbar
} from "@ionic/react";
import { addCircleSharp } from "ionicons/icons";
import "./TopBar.scss";
import { RouteComponentProps, withRouter } from "react-router";
interface NavList {
  navName: string;
  routePath: string;
  index: number;
}

interface ShareProps extends RouteComponentProps {}
const navList: NavList[] = [
  { navName: "关注", routePath: "/home/attention", index: 0 },
  { navName: "推荐", routePath: "/home/recommend", index: 1 },
];

const TopBar: React.FC<ShareProps> = (props) => {
  const [hightIndex, setHightIndex] = useState<number>(0);
  const handleClick = (e: any, index: number) => {
    props.history.push({ pathname: navList[index].routePath });
    setHightIndex(index)
  };
  return (
    <section className="topBar-wrapper">
      <div className="flex-ac">
        <IonSearchbar placeholder="拜登在美国大选中获胜" />
        <IonIcon
          onClick={() => {
            props.history.push({ pathname: "/tabs/222" });
          }}
          style={{ color: `#2eb3fb` }}
          size="large"
          icon={addCircleSharp}
        ></IonIcon>
      </div>
      <div className="nav-wrapper">
        {navList.map((nav, index) => {
          return (
            <span
              key={nav.index}
              // className={`nav-item ${props.index === nav.index ? "active" : ""}`}
              className={`nav-item ${index === hightIndex ? "active" : ""}`}
              onClick={(e) => {
                handleClick(e, index);
              }}
            >
              {nav.navName}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default withRouter(TopBar);
