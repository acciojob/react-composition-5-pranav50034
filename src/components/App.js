import React from "react";
import "./../styles/App.css";
import Tabs from "./Tabs";

let tabOne = [
   { title: "Tab", content: "1" },
   { title: "Tab", content: "2" },
   { title: "Tab", content: "3" },
];
let tabTwo = [
   { title: "Tab", content: "A" },
   { title: "Tab", content: "B" },
   { title: "Tab", content: "C" },
];

const App = () => {
   return (
      <div>
         <Tabs tab={tabOne} content="1" />
         <Tabs tab={tabTwo} content="A" />
      </div>
   );
};

export default App;
