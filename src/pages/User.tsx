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
} from "ionicons/icons";
import { useCamera } from "@ionic/react-hooks/camera";
import { useFilesystem, base64FromPath } from "@ionic/react-hooks/filesystem";
import { useStorage } from "@ionic/react-hooks/storage";
import { isPlatform } from "@ionic/react";
import {
  CameraResultType,
  CameraSource,
  CameraPhoto,
  Capacitor,
  FilesystemDirectory,
} from "@capacitor/core";
import { Plugins } from "@capacitor/core";
declare let AMap: any;
const { Geolocation } = Plugins;
// get the users current position

function onComplete(data: any) {
  var str = [];
  str.push(data.position.getLat());
  str.push(data.position.getLng());
  (document as any).getElementById("xxx").innerHTML = str;
}

//解析定位错误信息
function onError(data: any) {
  (document as any).getElementById("xxx").innerHTML =
    "定位失败" + JSON.stringify(data);
  console.log(data);
}

const User: React.FC = () => {
  useEffect(() => {
    const nanyou: number[] = [113.573518, 22.237448]; //南油大酒店经纬度
    var lnglat = new AMap.LngLat(nanyou[0], nanyou[1]);
    var map = new AMap.Map("container", {
      viewMode: "2D", //设置地图模式
      lang: "zh_cn", //设置地图语言类型
      zoom: 13,
      center: nanyou,
    });
    var m1 = new AMap.Marker({
      position: nanyou,
    });
    map.add(m1);
    // var pixel = map.lngLatToContainer(lnglat);
    // console.log(pixel)

    var circle = new AMap.Circle({
      center: nanyou,
      radius: 100, //签到范围半径
      borderWeight: 1,
      strokeOpacity: 1,
      fillOpacity: 0.4,
    });

    circle.setMap(map);
    let geolocation;
    map.plugin("AMap.Geolocation", function () {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        buttonPosition: "RB", //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        // zoomToAccuracy: true,
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      map.setFitView();
      AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
      AMap.event.addListener(geolocation, "error", onError); //返回定位出错信息
    });
  }, []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="flex-ac" style={{ padding: `0 16px` }}>
          <IonIcon size="large" icon={cameraOutline}></IonIcon>
          <IonSearchbar placeholder="搜索知乎内容" />
          <IonIcon size="large" icon={settingsSharp}></IonIcon>
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
              >
                <IonIcon icon={bookOutline} />
                <span>书架</span>
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
        <div
          style={{ width: "100vw", height: "60vh", position: `relative` }}
          id="container"
        >
          <IonButton
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              zIndex: 2,
              transform: "translateX(-50%)",
            }}
            color="primary"
          >
            签到打卡
          </IonButton>
        </div>
        <div id="xxx"></div>
      </IonContent>
    </IonPage>
  );
};

export default User;
