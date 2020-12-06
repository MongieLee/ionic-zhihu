import React from "react";
import {
  IonInput,
  IonIcon,
  IonSearchbar,
  IonContent,
  IonTabs,
  IonTabBar,
  IonBadge,
  IonItem,
  IonRouterOutlet,
  IonRouterLink,
  IonLabel,
  IonTabButton,
} from "@ionic/react";
import { addCircleSharp } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import { call, person, settings } from "ionicons/icons";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";
import "./TopBar.scss";
import Attention from "../../pages/homePages/Attention";
interface NavList {
  navName: string;
  routePath: string;
  index: number;
}

interface Props {
  index: number;
}

const navList: NavList[] = [
  { navName: "关注", routePath: "/attention", index: 0 },
  { navName: "推荐", routePath: "/recommend", index: 1 },
  { navName: "热榜", routePath: "/hostSale", index: 2 },
  { navName: "视频", routePath: "/video", index: 3 },
  { navName: "圈子", routePath: "/circle", index: 4 },
];

const TopBar: React.FC<Props> = (props) => {
  return (
    <section className="topBar-wrapper">
      <div className="flex-ac">
        <IonSearchbar placeholder="拜登在美国大选中获胜" />
        <IonIcon
          style={{ color: `#2eb3fb` }}
          size="large"
          icon={addCircleSharp}
        ></IonIcon>
      </div>
      <div className="nav-wrapper">
        {navList.map((nav) => {
          return (
            <span
              key={nav.index}
              className={`nav-item ${
                props.index === nav.index ? "active" : ""
              }`}
            >
              {nav.navName}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default TopBar;
