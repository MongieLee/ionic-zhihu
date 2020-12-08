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
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAlert,
  IonToast,
  IonLoading,
} from "@ionic/react";
import TopBarSticky from "../components/TopBarSticky/TopBarSticky";
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

//解析定位错误信息
function onError(data: any) {
  (document as any).getElementById("xxx").innerHTML =
    "定位失败" + JSON.stringify(data);
  console.log(data);
  alert(JSON.stringify(data))
}
let map: any;
let circle: any;
const User: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<any>(undefined);
  const [showAlert1, setShowAlert1] = useState(false);
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    initMap();
  }, []);

  function onComplete(data: any) {
    var str = [];
    str.push(data.position.getLng());
    str.push(data.position.getLat());
    console.log(str);
    (document as any).getElementById("xxx").innerHTML = str;
    setCurrentPosition(str);
  }

  function initMap(): void {
    const nanyou: number[] = [113.573518, 22.237448]; //南油大酒店经纬度
    map = new AMap.Map("container", {
      viewMode: "2D", //设置地图模式
      lang: "zh_cn", //设置地图语言类型
      zoom: 13, //设置层级
      center: nanyou, //设置圆心位置
    });
    var m1 = new AMap.Marker({
      //添加标记点
      position: nanyou,
    });
    map.add(m1);
    // var pixel = map.lngLatToContainer(lnglat);
    // console.log(pixel)

    circle = new AMap.Circle({
      // center: new AMap.LngLat("116.403322", "39.920255"), // 圆心位置
      center: nanyou, //简写
      radius: 100, //半径
      strokeColor: "#13ca75", //线颜色
      strokeOpacity: 1, //线透明度
      strokeWeight: 3, //线粗细度
      fillColor: "#21f579", //填充颜色
      fillOpacity: 0.35, //填充透明度
    });
    circle.setMap(map);
    // map.setFitView();
    //获取当前位置
    let geolocation;
    map.plugin("AMap.Geolocation", function () {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        buttonPosition: "RB", //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位后是否展示
      });
      map.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
      AMap.event.addListener(geolocation, "error", onError); //返回定位出错信息
    });
  }

  function clockInFn(): void {
    console.log(currentPosition);
    if (!currentPosition) {
      console.log("i run");
      // setShowToast2(true);
    }
    var isPointInRing = circle.contains(currentPosition);
    console.log(isPointInRing);
    if (isPointInRing) {
      setShowAlert1(true);
    } else {
      setShowToast2(true);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/user" text={null} />
          </IonButtons>
          <IonTitle>签到打卡</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ height: "100%", position: `relative` }} id="container">
          <IonButton
            style={{
              position: "absolute",
              bottom: `2em`,
              left: "50%",
              zIndex: 1,
              transform: "translateX(-50%)",
            }}
            color="primary"
            onClick={(e) => clockInFn()}
          >
            签到打卡
          </IonButton>
        </div>
        <div id="xxx"></div>
      </IonContent>
      <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => {
          setShowAlert1(false);
        }}
        cssClass="my-custom-class"
        header={"打卡确认"}
        // subHeader={"Subtitle"}
        message={"是否进行打卡？"}
        buttons={[
          {
            text: "确认",
            handler: () => {
              setShowAlert1(false);
              setShowLoading(true);
            },
          },
        ]}
      />

      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="签到成功！"
        color="success"
        position="middle"
        duration={1000}
      />
      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="不在打卡范围内，无法进行打卡！"
        color="warning"
        position="middle"
        duration={2000}
      />
      <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => {
          setShowToast1(true);
          setShowLoading(false);
        }}
        message={"处理中..."}
        duration={2000}
      />
    </IonPage>
  );
};

export default User;
