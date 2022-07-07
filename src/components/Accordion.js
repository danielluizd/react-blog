import { ListItem } from "@mui/material";
import React, { Children, useState } from "react";

const Accordion = ({ title, content,children }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  return (
    <React.Fragment>
      <div className="accordionItem">
        <h2
          className="accordionItemTitle"
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          <div>{title}</div>
        </h2>
        {openAccordion && (
          <div className="accordionItemContent">
            <p className="articleContainer">{content}</p>
            {children}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Accordion;
