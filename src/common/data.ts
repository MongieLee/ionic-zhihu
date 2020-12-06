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
  contentInfo: ContentInfo;
  userInfo: UserInfo;
}
const defaultImg: string =
  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3780950882,3042003164&fm=11&gp=0.jpg";

export const attentionData: ContentListProps[] = [
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
  {
    contentInfo: {
      approve: 0,
      title: "做前端的你有没有觉得很吃力？",
      comment: 2,
      blockType: `content`,
      content: `Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。Ionic Framework 是个高级的 HTML5 移动端应用框架，是个很漂亮的使用 HTML5 开发混合移动应用前端框架。`,
      imgList: [`ddd`],
    },
    userInfo: {
      avatir: defaultImg,
      userName: "陈真",
      isAttestation: true,
      attestationInfo: "清华大学讲师",
    },
  },
];
