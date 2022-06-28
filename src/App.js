import * as React from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";
import Box from "components/Box";
import Card from "components/Card";
//import Instagram from "assets/instagram.svg";
//import linkedin from "./assets/linkedin.svg";
//import { ReactComponent as twitterSvg } from "./assets/twitter.svg";

export default function App() {
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
          <Card></Card>
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

            <div className="accordionItem hidden">
              <h2 className="accordionItemTitle">
                Ukraine defense ministry, banks hit by cyberattacks
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
                  <img src="src/assets/article3.jpg" alt=""></img>
                </div>

                <div className="articleContainer">
                  <p>
                    Ukraine’s Ministry of Defense reported Tuesday that it has
                    suffered a cyberattack, while the Ukrainian government also
                    disclosed that cyberattacks struck two banks in the country.
                  </p>

                  <p>
                    The State Service of Special Communication and Information
                    Protection of Ukraine said in a statement posted online that
                    there was a “powerful” distributed denial-of-service (DDoS)
                    attack Tuesday against “a number of information resources of
                    Ukraine.” The affected targets included the websites of the
                    Ministry of Defense and the Armed Forces of Ukraine, as well
                    as the web services of Privatbank and Oschadbank.
                  </p>

                  <p>
                    It was not immediately certain that Russia, which has
                    amassed an estimated 130,000 troops near Ukraine, is
                    connected to any of the cyberattacks.
                  </p>

                  <p>
                    On the website of ArmyINFORM, the Ministry of Defense of
                    Ukraine’s information agency, a translation of a post today
                    says the ministry experienced a cyberattack that was
                    “probably” a distributed denial-of-service (DDoS) attack.
                  </p>

                  <p>
                    “The official web portal of the Ministry of Defense of
                    Ukraine probably suffered DDoS attacks when an excessive
                    number of requests per second was recorded,” the translation
                    of the post says.
                  </p>

                  <p>
                    Technical work to restore the portal is underway, according
                    to the translation of the post.
                  </p>

                  <p>
                    The Ukrainian Centre for Strategic Communications and
                    Information Security, a wing of the nation’s culture
                    ministry, also confirmed the attack in a statement and said
                    that the attack had shut down access to the defense
                    ministry’s site, according to a Reuters report.
                  </p>

                  <p>
                    The statement did not specify who is being blamed for it,
                    but the Reuters report suggested that the statement could be
                    interpreted as accusing Russia.
                  </p>

                  <p>
                    “It is not ruled out that the aggressor used tactics of
                    little dirty tricks because its aggressive plans are not
                    working out on a large scale,” the Ukrainian information
                    security said in the statement cited by Reuters.
                  </p>

                  <p>
                    Christian Sorensen, former operational planning team lead
                    for the U.S. Cyber Command, told VentureBeat today that
                    these attacks “are ratcheting up attention and pressure.”
                  </p>

                  <p>
                    “It doesn’t sounds like much impact yet,” Sorensen said in
                    an email. “In the coming hours and days, I would anticipate
                    more activities to isolate and disrupt Ukrainian citizens
                    and especially government activities. The purpose at this
                    stage is to increase leverage in negotiations. Next stage
                    will be impactful and continue deterrence for other
                    countries to get involved.”
                  </p>

                  <p>
                    The Russian build-up near Ukraine includes armored vehicles,
                    ships, and aircraft, according to reports.
                  </p>

                  <p>
                    In mid-January, a day after the failure of diplomatic
                    efforts to halt the Russian troop build-up, more than 70
                    Ukrainian government websites were targeted with the new
                    “WhisperGate” family of malware. Ukraine blamed Russia for
                    the attacks, which left many of the government’s websites
                    inaccessible or defaced.
                  </p>

                  <p>
                    Cybersecurity experts say that if Russia does plan to invade
                    Ukraine, it would undoubtedly use cyberattacks as a key part
                    of its strategy — just as the country has done in previous
                    military campaigns over the past decade-and-a-half,
                    including in Georgia and the Crimean Peninsula in Ukraine.
                  </p>

                  <p>
                    “In these previous conflicts, cyber was used to facilitate a
                    Russian occupation that remains today in previously
                    sovereign territory of another country,” said Sorensen, who
                    is now founder and CEO of cybersecurity firm SightGain, in a
                    previous email. “In this way, cyber is tightly integrated
                    into Russian tactics.”
                  </p>

                  <p>
                    If an invasion does occur, “it’s not really a question of
                    whether cyberattacks on Ukraine will take place,” said
                    Mathieu Gorge, author of The Cyber Elephant in the Boardroom
                    and the founder and CEO and of cybersecurity firm VigiTrust.
                  </p>

                  <p>
                    “Bringing down critical infrastructure in Ukraine, or any
                    opponent’s sovereign state infrastructure, is a tactic to
                    either proceed or augment physical attacks,” Gorge said in a
                    previous email. “The idea behind it is that if you cripple
                    the country physically at their border while crippling
                    access to banking, electricity, health services, and IT
                    systems, your attack is much more powerful.”
                  </p>

                  <p>
                    Russia’s strategy will be to generally spread fear,
                    uncertainty, and doubt — both before and during an
                    active/shooting conflict — and to target military personnel
                    and communications during active conflict, Sorensen said.
                  </p>

                  <p>
                    In prior attacks, cyber was used as a diversion — in order
                    to confuse the targets enough to “not put up a big fight or
                    get organized until it was too late,” Sorensen said.
                  </p>

                  <p>
                    On Friday, the U.S. Cybersecurity and Infrastructure
                    Security Agency (CISA) posted a warning about the potential
                    for attacks against U.S. targets by Russia in connection
                    with the tensions over Ukraine.
                  </p>

                  <p>
                    “While there are not currently any specific credible threats
                    to the U.S. homeland, we are mindful of the potential for
                    the Russian government to consider escalating its
                    destabilizing actions in ways that may impact others outside
                    of Ukraine,” CISA said in its “Shields Up” warning. “CISA
                    recommends all organizations — regardless of size — adopt a
                    heightened posture when it comes to cybersecurity and
                    protecting their most critical src/assets.”
                  </p>

                  <p>
                    Meanwhile, Russian cyberattacks against western targets have
                    reportedly already taken place in connection with the
                    Ukraine tensions. Last month, a Russia-linked hacker group
                    is believed to have launched a cyberattack against a western
                    government organization in Ukraine, according to researchers
                    at Palo Alto Networks’ Unit 42. The attack involved a
                    “targeted phishing attempt” and attempted delivery of
                    malware, Unit 42 reported.
                  </p>

                  <p>
                    The leadership of the group, which Unit 42 has referred to
                    as “Gamaredon,” includes five Russian Federal Security
                    Service officers, the Security Service of Ukraine said
                    previously. Unit 42 did not identify or further describe the
                    western government entity that was targeted by Gamaredon.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordionItem hidden">
              <h2 className="accordionItemTitle">
                Netlify Graph helps eliminate ‘messy backend integration work’
                for third-party APIs
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
                  <img src="src/assets/article4.jpg" alt=""></img>
                </div>

                <div className="articleContainer">
                  <p>
                    Netlify, the company behind a platform used by developers to
                    build, host, and scale web projects, today announced what it
                    calls a “new approach” to building with APIs that it hopes
                    will boost developer productivity.
                  </p>

                  <p>
                    Netlify, which counts customers such as Citrix, Verizon, and
                    Twilio, helps companies move away from traditional
                    monolithic web apps to a decoupled architecture, where the
                    front- and backends are separate. Using Netlify, developers
                    connect their code repository, add build settings, and then
                    Netlify takes care of deployment and the necessary
                    infrastructure.
                  </p>

                  <p>
                    Netlify Graph, which is available now in open beta, is all
                    about APIs (application programming interfaces) — it enables
                    developers to securely read, write, and subscribe to data
                    from third-party APIs without managing authentication tokens
                    or having to write any API-specific code — single-click
                    authentication is the name of the game.
                  </p>

                  <p>
                    “Netlify Graph simplifies how developers build, which in
                    turn lifts up the entire ecosystem — it will also make
                    decoupling developers’ monoliths into a Jamstack
                    architecture much easier,” Netlify’s head of ecosystem Den
                    Delimarsky told VentureBeat. “Teams that were previously
                    handcuffed to monolithic plugins will be able to unlock the
                    vast ecosystem of third-party APIs and services for their
                    web applications.”
                  </p>

                  <p>
                    The announcement comes just a few months after Netlify
                    raised $105 million and acquired OneGraph, a GraphQL-based
                    tool for building third-party integrations. GraphQL, which
                    Facebook open-sourced back in 2015, is helping to power the
                    burgeoning API economy and the push towards microservices —
                    that is, software built from smaller purpose-built
                    components that are easier to maintain versus giant
                    monolithic applications. GraphQL APIs give developers
                    flexibility to query specific data from disparate sources,
                    and makes cross-platform app development simpler.
                  </p>

                  <p>
                    Built atop GraphQL, Netlify Graph promises to “eliminate the
                    messy backend integration work” involved in working with
                    APIs, with pre-built integrations at launch for GitHub, NPM,
                    Salesforce, Spotify, Stripe, Box, and Contentful.
                  </p>

                  <p>
                    “This is a huge boost for developer productivity and
                    accelerates time-to-market,” Delimarsky said. “There’s no
                    denying APIs are core to building modern web applications,
                    but we’re seeing developers spending more and more time
                    discovering, securing, and governing all these APIs, which
                    is actually creating more complexity and taking them away
                    from focusing on business value. Discovering APIs can be
                    easy, but the bigger challenge is governing and combining
                    them into a more cohesive experience.”
                  </p>

                  <p>
                    And so, Netlify Graph essentially gives developers a more
                    unified way of authenticating and building using APIs,
                    making it easier to integrate and consume third-party
                    services directly through the Netlify interface.
                  </p>

                  <p>
                    After a short period in private beta which required users to
                    specifically activate the feature, Netlify Graph is now
                    enabled by default for all Netlify customers. While the
                    company hasn’t revealed what other integrations it might
                    include in the future beyond the initial five, its OneGraph
                    acquisition gives a hint as to what might be around the
                    corner — OneGraph currently supports Zendesk, Trello,
                    Intercom, HubSpot, Slack, among others.
                  </p>

                  <p>
                    “This is only phase one and we plan to add more integrations
                    over time,” Delimarsky confirmed.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordionItem hidden">
              <h2 className="accordionItemTitle">
                Big Tech backlash gives rise to the independent cloud
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
                  <img src="src/assets/article5.jpg" alt=""></img>
                </div>

                <div className="articleContainer">
                  <p>
                    Here we are, more than two years into the pandemic, and many
                    of the sudden changes brought about by COVID-19 have become
                    permanent. Among them is a deepened and growing dependence
                    on cloud computing, accelerated by an unprecedented
                    separation of businesses from specific physical premises.
                  </p>

                  <p>
                    While reliance on the largest public cloud vendors —
                    particularly AWS, Microsoft Azure, and Google Cloud — has
                    grown, so too have concerns about whether these are really
                    the right bets for many organizations to make.
                  </p>

                  <p>
                    For all their strengths, three significant problems with the
                    Big Tech clouds have become clear.
                  </p>

                  <p>
                    Over the past few years many cloud users have realized
                    something that we at Vultr have long known — the Big Tech
                    clouds are far more expensive than necessary. Simply said,
                    they cost more than they need to for the services provided,
                    and users end up paying for more services than they actually
                    need.
                  </p>

                  <p>
                    Amazon’s earnings reports have shown the world that AWS
                    generates billions in annual profits, with bandwidth for
                    data transfer being the most egregiously overpriced service
                    of all.
                  </p>

                  <p>
                    The Big Tech clouds’ excessively high prices have led to
                    what venture capital firm Andreessen Horowitz (a16z) calls
                    The Trillion Dollar Paradox.
                  </p>

                  <p>
                    As he wrote, “Across 50 of the top public software companies
                    currently utilizing cloud infrastructure, an estimated $100B
                    of market value is being lost among them due to cloud impact
                    on margins — relative to running the infrastructure
                    themselves. [Across] the broader universe of scale public
                    companies that stand to benefit from related savings, we
                    estimate that the total impact is potentially greater than
                    $500B.”
                  </p>

                  <p>
                    The ultimate conclusion from a16z is a conundrum: “You’re
                    crazy if you don’t start in the cloud,” and “you’re crazy if
                    you stay on it.” Whether you are one of the largest cloud
                    users in the world, or an individual developer, the odds are
                    that you are overpaying for cloud computing.
                  </p>

                  <p>
                    The vision for amazon.com has long been to be the
                    “everything store,” and it’s clear that AWS is trying to be
                    the “everything cloud.” However, while amazon.com seeks to
                    be the low-cost, straightforward retail marketplace for
                    everyone, AWS has become the high-priced, complex cloud.
                    This is for the simple reason that AWS is focused on
                    satisfying the complicated needs of the largest enterprise
                    customers, and serving those with the largest cloud budgets.
                  </p>

                  <p>
                    Most developers and businesses don’t need the vast majority
                    of the hundreds of products offered by AWS and the other Big
                    Tech clouds. Nor do developers and SMBs have the time or
                    specialized staff required to wade through the associated
                    complexities.
                  </p>

                  <p>
                    For most users, the 80-20 rule applies to cloud computing,
                    and it only takes a small portion of the Big Tech clouds’
                    products to deliver the vast majority of cloud utility. AWS
                    boasts about the comprehensiveness of its offerings, but it
                    can present an overwhelming and confusing user experience.
                    Basic functions require excessive time and cost with the Big
                    Tech clouds. Mistakes happen, leading to bugs, downtime, or
                    leaks of customer data. For cloud customers, this hidden
                    cost of complexity is immense.
                  </p>

                  <p>
                    If one thing has become clear about Big Tech over the past
                    fifteen years, it’s that they are ambitious and seek to make
                    customers increasingly reliant on them. The Big Tech
                    companies continuously introduce new products, and
                    entrepreneurs building cloud-based services justifiably
                    worry about these large companies cloning their ideas.
                  </p>

                  <p>
                    Long-established companies engaged in digital transformation
                    also increasingly find themselves in competition with these
                    large internet empires. For many cloud computing customers,
                    the choice of provider is becoming as much about avoiding
                    fueling a competitor as it is about meeting their cloud
                    needs.
                  </p>

                  <p>
                    Today, cloud customers are left wondering whether they are
                    really damned if they do, and damned if they don’t.
                  </p>

                  <p>
                    But I believe that the answer to a16z’s Trillion Dollar
                    Paradox has been hiding in plain sight.
                  </p>

                  <p>
                    For years, independent cloud computing platforms such as
                    Vultr have built a loyal following within the global
                    developer community by offering cost-effective,
                    high-performance, and easy-to-use cloud infrastructure.
                    Vultr, in particular, has flown under the radar, as it is a
                    completely bootstrapped, profitable business that never
                    needed to raise venture capital.
                  </p>

                  <p>
                    Last year’s IPOs in the sector naturally brought increased
                    attention to independent cloud providers, as companies like
                    DigitalOcean and Backblaze became public. More importantly
                    though, it’s the quiet evolution of the capabilities of
                    independent clouds that marks the dawn of a new era. Some
                    independent clouds have transitioned from an early narrow
                    focus on providing inexpensive virtual machines into
                    comprehensive platforms that address the full range of
                    users’ fundamental cloud compute, cloud storage, and
                    networking needs.
                  </p>

                  <p>
                    Vultr’s offerings have certainly evolved in this way, and
                    the operating efficiency that has enabled the company to
                    bootstrap itself to scale has also enabled a broader set of
                    capabilities. Unlike other independent clouds, Vultr is able
                    to offer bare metal servers in addition to cloud compute
                    instances, meeting the needs of users seeking cloud
                    economics and cloud provisioning along with the highest
                    level of control and efficiency. In addition, Vultr has been
                    able to significantly grow its global footprint. Over the
                    past six months Vultr has expanded to 22 global locations,
                    including new sites in São Paulo, Mexico City, Stockholm,
                    Warsaw, and Madrid.
                  </p>

                  <p>
                    As independent cloud providers mature, they will
                    increasingly be viewed not just as easier-to-use and
                    lower-cost alternatives for small businesses, but as the
                    price-to-performance optimizing choice for a large number of
                    enterprise use cases. Some businesses will see independent
                    clouds as a way to broaden their vendor portfolio, lowering
                    concentration risk and reducing their overall costs through
                    a multi-cloud strategy. Others will leverage independent
                    clouds as efficient backup infrastructure to limit the
                    business impact and cost of outages. Still others will
                    embrace independent clouds just for their straightforward
                    and predictable pricing, and to avoid the high bandwidth
                    charges of Big Tech clouds.
                  </p>

                  <p>
                    Whatever your specific cloud goals are, pay attention to the
                    emerging category of independent cloud providers. As with
                    all sectors of technology, the features that initially draw
                    users to the largest vendors eventually become available in
                    more cost-effective and user-friendly ways through newer,
                    disruptive providers. This market evolution has already
                    occurred in cloud computing, even though most users have yet
                    to benefit from the disruption.
                  </p>

                  <p>
                    a16z’s Trillion Dollar Paradox demands a solution, and
                    independent cloud computing platforms such as Vultr are
                    poised to meet the needs of global users who have until
                    recently been at the mercy of Big Tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
