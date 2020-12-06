import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonRouterOutlet,
  IonToolbar,
} from "@ionic/react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

import Attention from "./homePages/Attention";
import "./Home.scss";
import "../components/TopBar/TopBar.scss";
import TopBar from "../components/TopBar/TopBar";

const Tab1: React.FC<RouteComponentProps> = (props) => {
  const [routeIndex, setRouteIndex] = useState<number>(2);
  console.log(props);
  return (
    <IonPage>
      <IonHeader>
        <TopBar index={routeIndex} />
      </IonHeader>
      <div className="home-content-wrapper">
        <Attention/>
        {/* <Route path="tab1/attention" component={Attention} exact={true} /> */}
        <div className="flex-jc" style={{padding:`8px 0`,color:`#ABAAAA`}}>没有更多了...</div>
      </div>
    </IonPage>
  );
};

export default Tab1;
