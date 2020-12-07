import React from "react";
import { IonHeader, IonPage } from "@ionic/react";
import { Route, RouteComponentProps } from "react-router-dom";

import Attention from "./homePages/Attention";
import Recommend from "./homePages/Recommend";
import ContentDetail from "./homePages/ContentDetail";
import "./Home.scss";
import "../components/TopBar/TopBar.scss";
import TopBar from "../components/TopBar/TopBar";

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <TopBar />
      </IonHeader>
      <div className="home-content-wrapper">
        {/* <Attention /> */}
        <Route path="/home/attention" component={Attention} exact={true} />
        <Route path="/home/detail/:id" component={ContentDetail} exact={true} />
        <Route path="/home/recommend" component={Recommend} exact={true} />
        <div className="flex-jc" style={{ padding: `8px 0`, color: `#ABAAAA` }}>
          没有更多了...
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
