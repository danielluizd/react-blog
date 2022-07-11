import React, { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";
import Box from "components/Box";
import Card from "components/Card";
import Accordion from "components/Accordion";
import axios from "axios";

const api = axios.create({
  baseURL: "https://react-blog-daniel.herokuapp.com/",
});

export default function App() {
  const findAll = async () => {
    const articles = await api.get("articles");
    setFiles(articles.data);
  };

  useEffect(async () => {
    await findAll();
  }, []);

  const [article, setArticle] = useState({
    title: "",
    content: "",
  });

  const [files, setFiles] = useState([]);

  const submitArticle = async (event) => {
    event.preventDefault();
    await api.post("articles", article);
    setArticle({ title: "", content: "" });
    await findAll();
  };

  const deleteArticle = async (_id) => {
    setArticle({});
    const resp = await api.delete(`articles/${_id}`);
    await findAll();
  };

  const editArticle = async (_id) => {
    // const edit = await api.put(`articles/${_id}`);
    // setArticle(`articles/${_id}`);
    console.log("Botão de Edit funcionando");
    // console.log({ title.article});
    await findAll();
    // setArticle(`${_id}`);
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
          {files.map((item) => {
            return (
              <div key={item._id}>
                <Accordion {...item}>
                  <button onClick={() => deleteArticle(item._id)}>
                    Delete
                  </button>
                  <button onClick={() => editArticle(item._id)}>Edit</button>
                </Accordion>
              </div>
            );
          })}

          <div className="formContainer">
            <label className="articleContainer">Title</label>
            <input
              type="text"
              placeholder="Enter a title"
              value={article.title}
              onChange={(value) =>
                setArticle({ ...article, title: value.target.value })
              }
            ></input>
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
          </div>
          <button type="submit" onClick={(event) => submitArticle(event)}>
            Submit
          </button>
        </div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}
