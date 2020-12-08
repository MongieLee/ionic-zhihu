import React, { useState, useEffect } from "react";
import "./User.css";
import {
  IonContent,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonIcon,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
} from "@ionic/react";
import {
  chatbubblesOutline,
  gitCommitOutline,
  keyOutline,
  bagHandleOutline,
  cardOutline,
  bagCheckOutline,
  bookOutline,
  walletOutline,
  settingsSharp,
  cameraOutline,
  paperPlaneOutline,
} from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import { Plugins, CameraResultType } from "@capacitor/core";

import { usePhotoGallery } from "../hooks/usePhotoGallery";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
console.log(BarcodeScanner);
interface HasRouterProps extends RouteComponentProps {}
const User: React.FC<HasRouterProps> = (props) => {
  const { photos, takePhoto } = usePhotoGallery();
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    alert("????");
    alert(`Barcode data: ${data.text}`);
  };
  useEffect(() => {}, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex-ac" style={{ padding: `0 16px` }}>
          <IonIcon
            size="large"
            icon={cameraOutline}
            onClick={takePhoto}
          ></IonIcon>
          <IonSearchbar placeholder="搜索知乎内容" />
          <IonIcon
            size="large"
            icon={settingsSharp}
            onClick={openScanner}
          ></IonIcon>
        </div>
        <IonCard>
          <IonCardContent>
            <div
              className="flex-ac"
              style={{ justifyContent: "space-between" }}
            >
              <div className="flex-ac">
                <img
                  style={{ height: 40, borderRadius: `50%`, marginRight: 4 }}
                  src={
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3780950882,3042003164&fm=11&gp=0.jpg"
                  }
                  alt="avatar"
                />
                <span style={{ marginLeft: "8px" }}>布兰登·艾克</span>
              </div>
              <span>个人主页&gt;</span>
            </div>
            <div
              className="flex"
              style={{
                justifyContent: "space-between",
                padding: "8px 16px 0 16px",
              }}
            >
              <div className="flex-cl" style={{ alignItems: "center" }}>
                <span>21</span>
                <span>创作中心</span>
              </div>
              <div className="flex-cl" style={{ alignItems: "center" }}>
                <span>65</span>
                <span>关注</span>
              </div>
              <div className="flex-cl" style={{ alignItems: "center" }}>
                <span>2</span>
                <span>收藏夹</span>
              </div>
              <div className="flex-cl" style={{ alignItems: "center" }}>
                <span>449</span>
                <span>最近浏览</span>
              </div>
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <div className="flex" style={{ justifyContent: "space-between" }}>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
                onClick={() => {
                  props.history.push("/clockIn");
                }}
              >
                <IonIcon icon={paperPlaneOutline} />
                <span>考勤打卡</span>
              </div>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
              >
                <IonIcon icon={bagCheckOutline} />
                <span>已购</span>
              </div>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
              >
                <IonIcon icon={walletOutline} />
                <span>付费咨询</span>
              </div>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
              >
                <IonIcon icon={chatbubblesOutline} />
                <span>活动广场</span>
              </div>
            </div>
            <div className="flex" style={{ marginTop: 16 }}>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
              >
                <IonIcon icon={cardOutline} />
                <span>钱包</span>
              </div>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
              >
                <IonIcon icon={gitCommitOutline} />
                <span>社区共建</span>
              </div>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
              >
                <IonIcon icon={keyOutline} />
                <span>反馈与帮助</span>
              </div>
              <div
                className="flex-cl"
                style={{ alignItems: "center", width: "25%" }}
              >
                <IonIcon icon={bagHandleOutline} />
                <span>邀新得红包</span>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default User;
