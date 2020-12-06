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
import { RouteComponentProps, withRouter } from 'react-router';
interface NavList {
  navName: string;
  routePath: string;
  index: number;
}

interface ShareProps extends RouteComponentProps {
}
const navList: NavList[] = [
  { navName: "关注", routePath: "/attention", index: 0 },
  { navName: "推荐", routePath: "/recommend", index: 1 }
];

const TopBar: React.FC<ShareProps> = (props) => {
  return (
    <section className="topBar-wrapper">
      <div className="flex-ac">
        <IonSearchbar placeholder="拜登在美国大选中获胜" />
        <IonIcon
          onClick={() => { props.history.push({ pathname: '/tabs/222' }) }}

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
              className={`nav-item ${index === 0 ? "active" : ""}`}
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
