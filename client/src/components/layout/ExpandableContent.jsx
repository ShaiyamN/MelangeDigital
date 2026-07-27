// ExpandableContent.js
import React, { useState } from "react";

const ExpandableContent = ({ show, content }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-[60%] text-[16px] font-normal text-white mt-3">
      {show && (
        <>
          {expanded ? (
            <>
              {content}
              <button onClick={handleExpandToggle}>Collapse</button>
            </>
          ) : (
            <button onClick={handleExpandToggle}>Read More</button>
          )}
        </>
      )}
    </div>
  );
};

export default ExpandableContent;
