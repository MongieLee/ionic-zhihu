import React, { useEffect } from "react";
import "./Attention.scss";
import Block from "../../components/ContentBlock/ContentBlock";
import { attentionData as data } from "../../common/data";

const Attention: React.FC = () => {
  return (
    <div className="iii">
      <Block data={data} />
    </div>
  );
};

export default Attention;
