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

export interface ContentListProps {
  id: number;
  contentInfo: ContentInfo;
  userInfo: UserInfo;
}
const defaultImg: string =
  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3780950882,3042003164&fm=11&gp=0.jpg";

export const attentionData: ContentListProps[] = [
  {
    id: 0,
    contentInfo: {
      approve: 0,
      title: "摩萨德指挥官疑似在以色列遭枪杀",
      comment: 2,
      blockType: `content`,
      content: "俄罗斯卫星通讯社指出，其援引的消息尚未得到证实，且无法确定网上视频是否与所传枪击案有关。目前，以色列方面尚未对此作出回应，以色列媒体也未对有关摩萨德官员遭枪击进行报道。俄媒指出，有网友猜测，此事件与伊朗核科学家遭刺杀有关。当地时间11月27日，伊朗高级核科学家法克里扎德在首都德黑兰附近遭遇袭击，经抢救无效身亡。28日，伊朗最高领袖哈梅内伊发推强烈谴责杀害法克里扎德的行为，呼吁对那些杀害他的幕后黑手予以“明确惩罚”。（海外网 赵健行）本文系版权作品，未经授权严禁转载。海外视野，中国立场，浏览人民日报海外版官网——海外网www.haiwainet.cn或“海客”客户端，领先一步获取权威资讯。",
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "局座",
      isAttestation: true,
      attestationInfo: "战忽局局长",
    },
  },
  {
    id: 1,
    contentInfo: {
      approve: 0,
      title: "摩萨德指挥官疑似在以色列遭枪杀",
      comment: 2,
      blockType: `content`,
      content: "俄罗斯卫星通讯社指出，其援引的消息尚未得到证实，且无法确定网上视频是否与所传枪击案有关。目前，以色列方面尚未对此作出回应，以色列媒体也未对有关摩萨德官员遭枪击进行报道。俄媒指出，有网友猜测，此事件与伊朗核科学家遭刺杀有关。当地时间11月27日，伊朗高级核科学家法克里扎德在首都德黑兰附近遭遇袭击，经抢救无效身亡。28日，伊朗最高领袖哈梅内伊发推强烈谴责杀害法克里扎德的行为，呼吁对那些杀害他的幕后黑手予以“明确惩罚”。（海外网 赵健行）本文系版权作品，未经授权严禁转载。海外视野，中国立场，浏览人民日报海外版官网——海外网www.haiwainet.cn或“海客”客户端，领先一步获取权威资讯。",
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "局座",
      isAttestation: true,
      attestationInfo: "战忽局局长",
    },
  },
  {
    id: 2,
    contentInfo: {
      approve: 0,
      title: "摩萨德指挥官疑似在以色列遭枪杀",
      comment: 2,
      blockType: `content`,
      content: "俄罗斯卫星通讯社指出，其援引的消息尚未得到证实，且无法确定网上视频是否与所传枪击案有关。目前，以色列方面尚未对此作出回应，以色列媒体也未对有关摩萨德官员遭枪击进行报道。俄媒指出，有网友猜测，此事件与伊朗核科学家遭刺杀有关。当地时间11月27日，伊朗高级核科学家法克里扎德在首都德黑兰附近遭遇袭击，经抢救无效身亡。28日，伊朗最高领袖哈梅内伊发推强烈谴责杀害法克里扎德的行为，呼吁对那些杀害他的幕后黑手予以“明确惩罚”。（海外网 赵健行）本文系版权作品，未经授权严禁转载。海外视野，中国立场，浏览人民日报海外版官网——海外网www.haiwainet.cn或“海客”客户端，领先一步获取权威资讯。",
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "局座",
      isAttestation: true,
      attestationInfo: "战忽局局长",
    },
  },
];
