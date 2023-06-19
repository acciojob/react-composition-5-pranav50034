import React, { useState } from "react";

function Tabs({ tab, content }) {
   const [activeTab, setActiveTab] = useState("");

   return (
      <div>
         <ul>
            {tab.map((element) => (
               <li
                  onClick={() => {
                     setActiveTab(element.content);
                  }}
               >
                  {element.title} {element.content}
               </li>
            ))}
         </ul>

         <p>Content for Tab {activeTab || content}.</p>
      </div>
   );
}

export default Tabs;
