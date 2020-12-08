import React, { useEffect, useState } from "react";

const waitForElement = (sel: any, cb: any) => {
  const el = document.querySelector(sel);

  if (!el || !el.offsetHeight) {
    requestAnimationFrame(() => waitForElement(sel, cb));
  } else {
    cb(el);
  }
};

const TabBarSticky = (props: any) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    waitForElement("ion-tab-bar", (tabBar: any) => {
      if (tabBar) {
        const box = tabBar.getBoundingClientRect();
        setTop(window.innerHeight - box.top);
      }
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: `0`,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {props.children}
    </div>
  );
};

export default TabBarSticky;
