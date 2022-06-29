import { ListItem } from "@mui/material";
import React, { useState } from "react";

const Accordion = ({ title, content }, onClickDelete) => {
  // const articles = {
  //   title: "How a semantic layer bridges BI and AI by David Mariani",
  //   content:
  //     "conteudo do artigo 1 somente para testar o accordion e blá blá blá blá One of the biggest complaints from the business is that it takes way too long for IT to build or deliver reports for A semantic layer is a business representation of data that semantic layer provides the following benefits",
  // };
  // const { title, content } = articles;
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

{
  /* <div className="accordionItem hidden">
  <h2 className="accordionItemTitle">
    How a semantic layer bridges BI and AI by David Mariani
  </h2>
  <div className="accordionItemContent">
    <div className="articleHeader">
      <div className="articleDetails">
        <div className="articleAuthor">
          <a href="https://github.com/danielluizd" target="_blank">
            Daniel Luiz Dourados
          </a>
        </div>
        <div className="articleTimeContainer">Tuesday, February 15, 2022</div>
      </div>
      <img src="src/assets/article1.jpg" alt=""></img>
    </div>

    <div className="articleContainer">
      <p>
        {" "}
        This article was contributed by David Mariani, chief technology officer
        for AtScale.{" "}
      </p>

      <p>
        An important step in the data maturity of an organization is moving
        beyond simple historical analysis to generating
      </p>

      <p>
        Organizations leverage analytics to help them understand and improve
        their business operations and customer satisfaction.
      </p>

      <p>
        A semantic layer is a business representation of data that semantic
        layer provides the following benefits:
      </p>

      <p>
        One of the biggest complaints from the business is that it takes way too
        long for IT to build or deliver reports for
      </p>

      <p>Today, enterprises have strong and sometimes regulatory</p>
      <p>Analytics agility, also thought of as “time to insight,” is</p>
      <p>Cubes and data extracts were introduced to overcome the</p>
      <p>With a semantic layer, you can bridge the gap between BI</p>
      <p>A semantic layer abstracts away the complexity of underlying</p>
      <p>With both teams working on the same semantic layer solution,</p>
      <p>When business and data science teams collaborate using a</p>
      <p>When most people think of augmented intelligence, they think</p>

      <p>In contrast, augmenting data through the unification of BI</p>
      <p>Augmented intelligence has the power to transform businesses</p>
      <p>Ultimately, every organization wants to empower every</p>
    </div>
  </div>
</div>; */
}
