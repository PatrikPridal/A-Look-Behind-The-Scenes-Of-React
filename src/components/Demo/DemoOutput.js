import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log('DEMOOUtpUT');
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// this makes that React will not reevaluating this component and it's children
export default React.memo(DemoOutput);
