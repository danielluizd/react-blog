import { ListItem } from "@mui/material";
import React, { Children, useState } from "react";

const Accordion = ({ title, content,children }) => {
  const [openAccordion, setOpenAccordion] = useState(false);

  const deleteArticle2 = () => {
    const itens = files.filter((a, i) => i !== index)

    /* JS
      .map
      .filter
      .indexOf
      .remove
      .foreach

      .foreach() diff .map() ?

      .reduce
    */


    setFiles(itens)
  }

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
      {/* <button onClick={() => deleteArticle(id)}>Click Me</button> */}
      <button onClick={() => deleteArticle2()}>Click Me</button>
    </React.Fragment>
  );
};

export default Accordion;
