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

  const [files, setFiles] = useState([]);
  const submitArticle = () => {
    console.log("article", article);
    setFiles([...files, article]);
    console.log("files", files);
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
          <h1 className="title">Articles</h1>
          <div className="accordionWrapper">
            <div className="accordionItem hidden">
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
                    <div className="articleTimeContainer">
                      Tuesday, February 15, 2022
                    </div>
                  </div>
                  <img src="src/assets/article1.jpg" alt=""></img>
                </div>

                <div className="articleContainer">
                  <p>
                    {" "}
                    This article was contributed by David Mariani, chief
                    technology officer for AtScale.{" "}
                  </p>

                  <p>
                    An important step in the data maturity of an organization is
                    moving beyond simple historical analysis to generating
                    accurate predictions about the future. In the past, business
                    analysts focused on historical analysis while data science
                    teams attempted to surface interesting insights about the
                    future. Today, with the advent of the semantic layer, these
                    two siloed worlds are coming together. Enterprises that
                    merge these two disciplines can deliver augmented analytics,
                    helping everyone in the organization better understand the
                    past and predict the future.
                  </p>

                  <p>
                    Organizations leverage analytics to help them understand and
                    improve their business operations and customer satisfaction.
                    Before we go further, let’s define the four flavors of
                    analysis we typically see in an organization, each with
                    increasing levels of sophistication. As illustrated by the
                    table above, business users typically focus on historical
                    analysis while data scientists are working to predict the
                    future. It’s obvious that business users make better
                    decisions if they can anticipate the future. It’s also
                    obvious that data scientists build better models if they can
                    compare their predictions to what actually happened. In
                    other words, historical analysis and predictive analysis are
                    relevant to both teams, but rarely do the two meet.
                  </p>

                  <p>
                    A semantic layer is a business representation of data that
                    makes it easier for end users to access data using common,
                    business-friendly terms. A semantic layer maps complex data
                    relationships into easy-to-understand business terms to
                    deliver a unified, consolidated view of data across the
                    organization. A semantic layer provides the following
                    benefits:
                  </p>

                  <p>
                    One of the biggest complaints from the business is that it
                    takes way too long for IT to build or deliver reports for
                    them. Users want to control their destiny, and
                    subject-matter experts (not IT) are best suited to applying
                    data to improve the business. A well-designed semantic layer
                    hides the complexity of data’s physical form and location
                    while translating data into understandable business
                    constructs. A semantic layer frees business users and data
                    scientists from the dependency on IT and data experts by
                    making data easy to use.
                  </p>

                  <p>
                    Today, enterprises have strong and sometimes regulatory
                    requirements to track “who” saw “which” data and “when.” A
                    modern semantic layer allows users to appear as themselves
                    to the underlying data platforms from any consumer tool. At
                    the same time, a semantic layer ensures that data is
                    consistent regardless of consumption style and makes sure
                    everyone plays by the same (governance) rules.{" "}
                  </p>

                  <p>
                    Analytics agility, also thought of as “time to insight,” is
                    how long after data lands that it can be used to make
                    decisions. BI tools that require data imports, extracts, or
                    cube building take anywhere from minutes for small data to
                    days/weeks for large data before data can be accessed. A
                    modern semantic layer leverages data virtualization to
                    enable new data landing in your data warehouse to be
                    query-able by your BI tool immediately, regardless of size.
                  </p>

                  <p>
                    Cubes and data extracts were introduced to overcome the
                    performance issues of analytics and data platforms. This
                    approach introduces data copies, adds complexity, destroys
                    agility, and introduces latency. A modern semantic layer
                    improves performance regardless of the underlying data
                    model, whether it’s a snowflake, a star, or purely OLTP
                    schema. By automatically creating and managing aggregates or
                    materialized views inside the underlying data platform, a
                    semantic layer learns from user query patterns and optimizes
                    the data platform’s performance and cost without data
                    movement.
                  </p>

                  <p>
                    With a semantic layer, you can bridge the gap between BI
                    users and data science teams. This enables your teams to
                    work transparently and cooperatively with the same
                    information and with the same goals.
                  </p>

                  <p>
                    A semantic layer abstracts away the complexity of underlying
                    raw data using a business model, allowing any data consumer
                    to access quantitative metrics, attributes, features,
                    predictions, business hierarchies, and complex calculations
                    in an intuitive, easy-to-understand interface. A semantic
                    layer solution presents this consumer-friendly interface in
                    the “language” of their tooling (SQL, MDX, DAX, JDBC, ODBC,
                    REST, or Python), translating queries into the dialect of
                    the underlying cloud platform. With a common set of business
                    terms, both teams can interact with the same data, with the
                    same governance rules, with the same results, using the
                    tooling of their choice.{" "}
                  </p>

                  <p>
                    With both teams working on the same semantic layer solution,
                    data scientists can share (or publish) their generated
                    features and predictions with business analysts, while
                    business analysts provide feedback to data science teams on
                    the quality of their predictions and model drift. Once data
                    becomes highly accessible, teams can collaborate not just
                    within their four walls, but blend data from second and
                    third-party data sources to unlock the power of data and
                    analytics for everyone. Closing the gap between business
                    intelligence and data science teams is the key to achieving
                    a high level of data analytics maturity and applying all
                    types of analytics at scale.
                  </p>

                  <p>
                    When business and data science teams collaborate using a
                    semantic layer, they enhance their historical data with
                    predictive insights. Closing the gap between business
                    intelligence and data science teams provides more visibility
                    into the output of data science initiatives throughout the
                    organization and enables organizations to leverage their
                    data for predictive and prescriptive analytics. Augmented
                    intelligence (also called augmented analytics or decision
                    intelligence) brings AI-generated insights into traditional
                    business intelligence workflows to improve data-driven
                    decisions.
                  </p>

                  <p>
                    When most people think of augmented intelligence, they think
                    about specific features that may appear in AI-enhanced
                    business intelligence tools. For example, some BI tools add
                    natural language query (NLQ) or outlier analysis to help
                    their users ask better questions or find the needle in the
                    haystack. These are valuable features, but they are confined
                    to the particular tool and may work differently across
                    different tools.
                  </p>

                  <p>
                    In contrast, augmenting data through the unification of BI
                    and data science adds AI-enhanced data to the semantic
                    layer, providing the same insights across the consumer
                    spectrum, regardless of the tool used. Essentially, a
                    semantic layer amplifies the effect of the data science team
                    by sharing their work with a wider audience and providing
                    that audience with the ability to deliver feedback on the
                    quality and utility of their predictions — a win-win.
                  </p>

                  <p>
                    Augmented intelligence has the power to transform businesses
                    into data-driven organizations. This starts with
                    implementing the appropriate processes and tools to
                    democratize data and empower individuals to utilize data
                    through self-service analytics.{" "}
                  </p>

                  <p>
                    Ultimately, every organization wants to empower every
                    individual to make data-driven decisions. A semantic layer
                    can become the vehicle for delivering augmented intelligence
                    to a broader audience by publishing the results of data
                    science programs through existing BI channels. By feeding
                    data science model results back into the semantic layer,
                    your organization can capture benefits beyond just
                    historical analysis. Decision makers can consume predictive
                    insights alongside historical data. They can also use the
                    same governed data to reliably “drill down” into the details
                    of a prediction. As a result, your organization can foster
                    more self-service and greater data science literacy and
                    generate a better return on data science investments.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordionItem hidden">
              <h2 className="accordionItemTitle">3G must die so 5G can live</h2>
              <div className="accordionItemContent">
                <div className="articleHeader">
                  <div className="articleDetails">
                    <div className="articleAuthor">
                      <a href="https://github.com/danielluizd" target="_blank">
                        Daniel Luiz Dourados
                      </a>
                    </div>
                    <div className="articleTimeContainer">
                      Tuesday, February 15, 2022
                    </div>
                  </div>
                  <img src="src/assets/article2.jpg" alt=""></img>
                </div>

                <div className="articleContainer">
                  <p>
                    Wireless providers will shut down 3G throughout the year,
                    leaving an unknown number of devices without service.
                  </p>

                  <p>
                    It’s time to say goodbye to 3G, the wireless technology that
                    gave our phones near-instantaneous access to the web and
                    helped make everything from the Apple App Store to Uber an
                    everyday part of our lives. More than two decades after its
                    launch, wireless service providers are shutting down 3G to
                    clear the way for its faster and flashier successor: 5G.
                  </p>

                  <p>
                    The expansion of 5G is welcome news for the growing number
                    of people with 5G-enabled devices, and it could be a
                    critical step toward more advanced technologies, like
                    self-driving cars and virtual reality. But the 3G shutdown
                    will also disable an entire generation of tech: everything
                    from 3G phones to car crash notification systems. For the
                    people who rely on these devices, this transition will cut
                    off a cellular network they’ve depended on for years, and in
                    some cases, disconnect crucial safety equipment.
                  </p>

                  <p>
                    “The number of 3G devices has been decreasing steadily,”
                    Tommaso Melodia, the director of Northeastern’s Institute
                    for the Wireless Internet of Things, told Recode. “Now it’s
                    at the point where carriers are starting to say, ‘It doesn’t
                    make a lot of sense for us to continue to use these precious
                    frequency channels for 3G. Let’s turn it off.’”
                  </p>

                  <p>
                    Ideally, wireless providers could keep both 3G and 5G
                    networks up and running, but the physics of the radio
                    spectrum that cellular technology relies on means that
                    companies have to make a choice. The radio spectrum includes
                    a wide range of frequencies, which are used to connect
                    everything from AM/FM radios to wifi networks, and is
                    regulated by the Federal Communications Commission (FCC).
                    Because there are a limited number of frequencies the agency
                    sets aside for cellular service, wireless providers have to
                    divide up the spectrum that they’re allocated to run
                    multiple networks, including their 3G, 4G, 5G, and
                    eventually 6G, services.
                  </p>

                  <p>
                    The FCC does make new bands of frequencies available to
                    wireless providers through spectrum auctions, during which
                    wireless providers can bid on rights to specific bands. But
                    winning bids can be in the billions of dollars, so providers
                    try to use the spectrum they already have as efficiently as
                    possible. By turning off older generations of cellular
                    technology, companies can repurpose the frequencies in order
                    to improve newer networks, like 4G and 5G. AT&T will go
                    first and shut down its 3G network on February 22, followed
                    by T-Mobile in July and Verizon at the end of the year.
                  </p>

                  <p>
                    The FCC does make new bands of frequencies available to
                    wireless providers through spectrum auctions, during which
                    wireless providers can bid on rights to specific bands. But
                    winning bids can be in the billions of dollars, so providers
                    try to use the spectrum they already have as efficiently as
                    possible. By turning off older generations of cellular
                    technology, companies can repurpose the frequencies in order
                    to improve newer networks, like 4G and 5G. AT&T will go
                    first and shut down its 3G network on February 22, followed
                    by T-Mobile in July and Verizon at the end of the year.
                  </p>

                  <p>
                    While the 3G shutdown will come with its own set of
                    consequences, the expansion of more advanced networks should
                    bring better speeds and reception to customers with 4G and
                    5G devices. 4G is 500 times faster than 3G, according to
                    Verizon, and 5G should be even faster than 4G once it’s
                    fully turned on. 5G will also come with lower latency, which
                    means you’ll have very little lag when you’re connected to
                    the internet. This lower latency will make it easier to use
                    your phone for complicated tasks in real time, like playing
                    an online video game or participating in a live telehealth
                    session.
                  </p>

                  <p>
                    In the meantime, 3G device owners need to brace for the
                    imminent 3G shutdown. Some may not even know their service
                    is about to go offline. Depending on their provider, these
                    customers may only have a few weeks or months to upgrade
                    their tech. Right now, it’s not clear they’ll be able to
                    make the switch in time.
                  </p>

                  <p>
                    When your phone connects to a cellular network, it sends and
                    receives signals on the frequencies to which that specific
                    network has been assigned. Those signals travel over those
                    frequencies to transmission stations, like cell towers,
                    which are connected to the internet cables that provide your
                    web connection. This is similar to the way a laptop connects
                    to a home wifi network that’s powered by an internet router.
                  </p>

                  <p>
                    In the US, 3G generally runs between 850 megahertz and 1900
                    to 2100 megahertz frequencies. These sections of the
                    spectrum are useful for both digital voice and internet
                    data, which is what made 3G so exciting when it was first
                    introduced in the late 1990s. Wireless carriers have since
                    developed new equipment and better technology, which they’ve
                    used to launch their 4G and 5G networks. Because these
                    networks can carry more data at a faster rate, wireless
                    providers want to run them on the frequencies they currently
                    use for their 3G networks. And that can only happen if they
                    turn 3G off first.
                  </p>

                  <p>
                    “It’s a one-or-the-other choice,” said Kevin Ryan, a
                    professor who researches wireless systems at the Stevens
                    Institute of Technology. “It would be analogous to trying to
                    have two FM radio stations broadcasting at the same
                    frequency.”
                  </p>

                  <p>
                    Aside from the logistics of how radio spectrum works,
                    wireless providers are also reallocating 3G spectrum because
                    it makes more financial sense for them. Verizon and AT&T
                    estimate that less than 1 percent of their service still
                    runs on 3G networks, while 90 million 5G devices shipped in
                    the last year alone. Once 3G is finally turned off, wireless
                    providers can devote more resources to expanding their 5G
                    networks and convincing customers to upgrade their service
                    plans.
                  </p>

                  <p>
                    “Operators are spending a lot of money for the spectrum, and
                    they have to pass those costs on to the consumers. That’s
                    why we pay a very high price for cellphone service,”
                    explains Sundeep Rangan, the associate director of the NYU
                    Wireless technology research center. “Those operators, for
                    that amount of spectrum, want to send as much data, or serve
                    as many users, as possible.”
                  </p>

                  <p>
                    While the 3G shutdown may feel sudden, it isn’t surprising.
                    Carriers stopped selling 3G devices years ago, and many have
                    spent the past several months notifying their remaining 3G
                    customers that it’s time to upgrade their tech. 3G isn’t the
                    first network to go offline, either. 1G, the cellular
                    network that supported analog voice devices, like the
                    brick-sized cellphones in ’80s movies — hasn’t been
                    operational for decades. Though T-Mobile still supports 2G
                    devices, Verizon and AT&T both shut down their 2G networks
                    several years ago. By the end of 2022, 3G will be gone, too.
                  </p>

                  <p>
                    We don’t know exactly how many, but millions of operational
                    devices throughout the US could be left unconnected when 3G
                    sunsets. Many of these devices include hardware that can’t
                    be adapted to connect to 4G and 5G networks. If you have one
                    of these devices, you should have already heard from your
                    wireless provider about your next steps. But if you want to
                    double-check, you can research your specific device or reach
                    out to your wireless provider. You can also try checking
                    your phone’s settings or user manual, or just keep an eye
                    out for a 4G or 5G connection on your device as you go about
                    your day.
                  </p>

                  <p>
                    The 3G technology systems that are built into cars are
                    generally supported by a major wireless provider, and
                    they’ll stop working whenever that provider officially shuts
                    down its 3G service. CNBC and Consumer Reports have released
                    lists of known affected car models, but there’s no reason
                    not to check with your car’s manufacturer just in case. Cars
                    built in the mid-2010s appear to be the most likely to be
                    affected by the 3G shutdown, but even some cars released in
                    2020 may need an upgrade.
                  </p>

                  <p>
                    The 3G technology systems that are built into cars are
                    generally supported by a major wireless provider, and
                    they’ll stop working whenever that provider officially shuts
                    down its 3G service. CNBC and Consumer Reports have released
                    lists of known affected car models, but there’s no reason
                    not to check with your car’s manufacturer just in case. Cars
                    built in the mid-2010s appear to be the most likely to be
                    affected by the 3G shutdown, but even some cars released in
                    2020 may need an upgrade.
                  </p>

                  <p>
                    There are also 3G devices that are meant for emergencies.
                    Along with some medical and security alert systems, prepaid
                    3G phones and deactivated 3G phones, which can only call
                    911, will go offline. Elderly people, people who live in
                    rural areas, low-income people, people experiencing
                    homelessness, and survivors of domestic violence are more
                    likely to rely on these devices. Because people only turn to
                    these devices in extreme circumstances, they may not realize
                    until long after 3G shuts down that they need to be
                    replaced, creating a potentially critical safety issue.
                  </p>

                  <p>
                    That’s why some think that 3G should stay online for a while
                    longer. AARP says the pandemic has prevented many older
                    people from updating their tech, and wants the shutdown
                    pushed back to the end of the year. Alarm companies,
                    including those that manufacture fire and carbon monoxide
                    detectors and home security systems, have also asked for an
                    extension. They say that the computer chip shortage has
                    gotten in the way of their efforts to produce and install
                    replacement devices.
                  </p>

                  <p>
                    But you shouldn’t bet on a delay. If you have a 3G device,
                    the best time to upgrade is now. If you know someone who
                    uses one of these devices, it’s worth checking in and seeing
                    if you can help them find a replacement.
                  </p>

                  <p>
                    Inevitably, history shows that cellular networks come and
                    go. The next cellular network, 6G, may be less than a decade
                    away and could be used to introduce everything from 3D
                    holograms to internet-connected clothing. At that point, 5G
                    won’t seem so new and exciting anymore, and 4G’s time will
                    likely be up.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {files.map((item) => {
            return <Accordion {...item}></Accordion>;
          })}
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
          <input
            type="text"
            size="50"
            placeholder="Enter a content"
            value={article.content}
            onChange={(value) =>
              setArticle({ ...article, content: value.target.value })
            }
          ></input>
          <button type="submit" onClick={() => submitArticle()}>
            Submit
          </button>
        </div>
        <script src="script.js"></script>
      </body>
    </div>
  );
}
