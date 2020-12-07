import React, { useEffect, useState } from "react";
import "./Attention.scss";
import Block from "../../components/ContentBlock/ContentBlock";
import { attentionData as data, ContentListProps } from "../../common/attentData";
const Attention: React.FC = () => {
  const [atData, setAtData] = useState<ContentListProps[]>([]);
  useEffect(() => {
    let wlData: string | null = window.localStorage.getItem("attentionData");
    if (!wlData) {
      window.localStorage.setItem("attentionData", JSON.stringify(data));
      setAtData(data);
    } else {
      setAtData(JSON.parse(wlData));
    }
  }, []);
  return (
    <div className="iii">
      <Block data={atData} />
    </div>
  );
};

export default Attention;
