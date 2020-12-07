import React from "react";
import "./ContentBlock.scss";
import { checkmarkCircleSharp } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { withRouter, RouteComponentProps } from "react-router";

interface UserInfo {
  avatir: string;
  userName: string;
  isAttestation: boolean;
  attestationInfo: string;
}

interface ContentInfo {
  approve: number;
  title: string;
  comment: number;
  blockType: string;
  content: string;
  imgList: string[];
}

interface ContentList {
  contentInfo?: ContentInfo;
  userInfo?: UserInfo;
}

interface Props extends RouteComponentProps {
  data: ContentList[];
}

const handelBlockInfo: React.FC<ContentList> = (contentList, index) => {
  if (!contentList?.contentInfo?.blockType) return <div>数据异常！</div>;
  switch (contentList.contentInfo.blockType) {
    case "content":
      return (
        <div
          onClick={(e) => {
            console.log(contentList);
          }}
          key={index}
          className="flex-cl block-item-wrapper"
        >
          <div className="title">{contentList.contentInfo.title}</div>
          <div className="flex-acjc">
            <img
              style={{ height: 16, borderRadius: `50%`, marginRight: 4 }}
              src={contentList.userInfo?.avatir}
              alt="avatar"
            />
            <span>{contentList.userInfo?.userName}</span>
            <IonIcon
              style={{ color: `#26b2f3`, margin: `0 .3em` }}
              src={checkmarkCircleSharp}
            />
            <span className="attestation">
              {contentList.userInfo?.attestationInfo}
            </span>
          </div>
          <div className="content">{contentList.contentInfo.content}</div>
          <div className="flex-ic attestation">
            {`${contentList.contentInfo.approve}赞同 ·${contentList.contentInfo.comment} 评论`}
          </div>
        </div>
      );
    case "system":
      return (
        <div className="flex-cl">
          <div>system</div>
        </div>
      );
    default:
      return <div>暂无匹配内容</div>;
  }
};

const Attention: React.FC<Props> = (props) => {
  const listData = props.data;
  return (
    <div className="content-block-wrapper">
      {listData.length > 0 &&
        listData.map((info, index) => handelBlockInfo(info, index))}
    </div>
  );
};

export default withRouter(Attention);
