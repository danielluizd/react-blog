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
    title: '',
    description: ''
  })

  const [files, setFiles] = useState([])
  // const [files, setFiles] = useState([{title: 'abc', description: 'efg'}, {title: 'asd', description: 'okasd'}])

  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')

  const submitArticle = () => {

    console.log('article', article)

    setFiles([...files, article])

    console.log('files', files)
  }

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

        {/* <div className="container"> */}
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

          <label>Title</label>
          <input type='text' value={article.title} onChange={(value) => setArticle( {...article, title: value.target.value} )}></input>
          <label>Description</label>
          <input type='text' value={article.description} onChange={(value) => setArticle( {...article, description: value.target.value} )}></input>
          <button onClick={() => submitArticle()}>Click Me</button>

          {/* <Accordion></Accordion> */}
        
          {/* {files.map(item => {
            <>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </>
          })} */}

          {files.map(item => {
            return (
              <>
                <p>{item.title}</p>
                <p>{item.description}</p>
              </>
            )
          })}

        </div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}

/* <Tooltip title="Caixa de teste">
        <Box
          sx={{
            height: 10,
            width: 10,
            p: "4rem",
            boxShadow: 2,
            borderRadius: 3,
            textAlign: "center",
            m: "1rem",
            backgroundColor: "#EEEEEE",
            "&:hover": {
              backgroundColor: "#EEEEEE",
              opacity: [0.9, 0.8, 0.7],
            },  
          }}
        />
      </Tooltip>
      <Tooltip title="Texto de Teste da Aplicação">
        <p>Daniel Luiz</p>
      </Tooltip> */

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
