import React, { useState } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";
import Box from "components/Box";
import Card from "components/Card";
import Accordion from "components/Accordion";
//import Instagram from "assets/instagram.svg";
//import linkedin from "./assets/linkedin.svg";
//import { ReactComponent as twitterSvg } from "./assets/twitter.svg";

export default function App() {
  const [article, setArticle] = useState({
    title: "",
    content: "",
  });

  const [files, setFiles] = useState([
    {
      title: "Testando Artigo Pré Renderizado",
      content:
        "Developed some researches, as a production of a low-cost drone using a 3D printer, for example. Nowadays, I am in the last year of Mechatronics Engineering, where I am looking for a job in any other area alike. I've already been part of some researches groups where I was able to project power plants, which was very important to build my knowledge in the area that I do well. During my free time I study subjects related to electric and control projects development.",
    },
  ]);
  const submitArticle = () => {
    console.log("article", article);
    setFiles([...files, article]);
    console.log("files", files);
  };

  const deleteArticles = (index) => {
    const itens = files.filter((item, indexFile) => indexFile !== index);
    setFiles(itens);
  };

  return (
    <div className="back-image">
      <body>
        <header>
          <nav>
            Daniel Luiz
            <a className="links logo"></a>
            <div className="mobile-menu">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <ul className="nav-list">
              <li>
                <a className="links" href="#profile">
                  Introduction
                </a>
              </li>
              <li>
                <a className="links" href="#about">
                  About me
                </a>
              </li>
              <li>
                <a className="links" href="#articles">
                  Articles
                </a>
              </li>
              <li>
                <a
                  className="links"
                  href="https://github.com/danielluizd?tab=repositories"
                  target="_blank"
                >
                  Repositories
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div id="profile" className="profile box1">
          <img
            className="profile-pic"
            src={profilePic}
            alt="profile picture"
          ></img>
          <h1 className="title">Daniel Luiz</h1>
          <span>Cuiabá, Brazil</span>
          <p>WEB DEVELOPER | FRONT END</p>
          <ul className="social-media">
            <li>
              <a
                href="https://www.linkedin.com/in/daniel-luiz-dourados/"
                target="_blank"
              >
                {/* <img src={linkedin} alt="LinkedIn"></img> */}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/danielluizdourados/"
                target="_blank"
              >
                {/* <img src={Instagram} alt="Instagram"></img> */}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DanLuizD" target="_blank">
                {/* <img src={require("./assets/twitter.svg")} alt="Twitter"></img> */}
              </a>
            </li>
          </ul>
        </div>

        <div id="about" className="about box1">
          <h1 className="title">About me</h1>
          <p>
            Hey 👋, I'm an Engineer and I have 1 year experience in academic
            research. I have been a part of the EDUCATIONAL TUTORIAL PROGRAM
            (PET) AUTONET/MEC, where I have also worked as a leader of the
            group, and I've developed some researches, as a production of a
            low-cost drone using a 3D printer, for example. Nowadays, I am in
            the last year of Mechatronics Engineering, where I am looking for a
            job in any other area alike. I've already been part of some
            researches groups where I was able to project power plants, which
            was very important to build my knowledge in the area that I do well.
            During my free time I study subjects related to electric and control
            projects development.
          </p>
        </div>
        <div id="articles" className="article box1">
          <h1 className="title">Articles</h1>
          {files.map((item, index) => {
            return (
              <>
                <Accordion {...item}><button onClick={() => deleteArticles(index)}>Delete</button></Accordion>
                {/* <button onClick={() => deleteArticles(index)}>Delete</button> */}
              </>
            );
          })}

          <div className="formContainer">
            <div className="formControl">
              <label className="articleContainer">Title</label>
              <input
                type="text"
                placeholder="Enter a title"
                value={article.title}
                onChange={(value) =>
                  setArticle({ ...article, title: value.target.value })
                }
              ></input>
            </div>
            <div className="formControl">
            <label>Content</label>
            <textarea
              type="text"
              rows="10"
              cols="100"
              placeholder="Enter a content"
              value={article.content}
              onChange={(value) =>
                setArticle({ ...article, content: value.target.value })
              }
            ></textarea>
            <button type="submit" onClick={() => submitArticle()}>
              Submit
            </button>
            </div>
          </div>
        </div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}
