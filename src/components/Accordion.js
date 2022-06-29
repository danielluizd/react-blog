import { ListItem } from "@mui/material";
import React, { useState } from "react";

const Accordion = ({ title, content }, onClickDelete) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  onClickDelete = () => console.log("deleted" + " = " + title);
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
          </div>
        )}
        <button type="button" onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
