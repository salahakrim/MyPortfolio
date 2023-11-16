import { useContext } from "react";
import NavContext from "../context/navContext";

import { Icon } from "@iconify/react";

const About = () => {
  const { nav } = useContext(NavContext);

  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I code & design beautiful things, and I love what I do.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/my-background.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    SalahEddine
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Akrim
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>27 january
                    1999
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Moroccan</span>
                    Arabe
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>2 years
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Casablanca
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    Englich, Arabic, Frensh
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+212 6 40 29
                    47 62
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    salaheddineakrim@you.com
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a
                href="/files/SalahEddine_Akrim_En.pdf" // Replace with the actual path to your PDF file
                className="btn btn-resume"
                download="SalahEddine_Akrim.pdf" // This attribute specifies the default file name when downloaded
              >
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        08/2023 - 11/2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Full-Stack Developer
                        <span className="separator" />
                        <span className="font-weight-700">CodingTech</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        In the first session, I&apos;ll focus on mastering React
                        for creating dynamic user interfaces. In the second
                        session, I&apos;ll delve into Spring Boot to enhance my
                        skills in developing strong server logic. The third
                        session will center around database design and version
                        management using Git. For effective teamwork in web
                        development, I&apos;ll dedicate the fourth session.
                        Lastly, in the fifth session, I&apos;ll concentrate on
                        building a compelling web development project portfolio,
                        showcasing my proficiency in React, Spring Boot,
                        database management, and teamwork.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        07/2022 - 09/2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Sage X3 Developer
                        <span className="separator" />
                        <span className="font-weight-700">
                          Delta Convergence
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        In the first session, I&apos;ll focus on customizing
                        Sage X3 for specific business needs. The next session
                        will be dedicated to integrating external systems
                        seamlessly. Then, I&apos;ll develop skills in creating
                        custom reports and workflows within Sage X3 in the third
                        session. The final session will involve contributing to
                        system upgrades and optimization, staying updated on the
                        latest features. Each step is designed to incrementally
                        enhance proficiency in using Sage X3 for business
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        03/2022 - 06/2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Web Developer
                        <span className="separator" />
                        <span className="font-weight-700">
                          Brighten Consulting
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        In my first session, I&apos;ll focus on creating
                        user-friendly websites, emphasizing principles of user
                        experience design. Following that, I&apos;ll delve into
                        front-end development using HTML, CSS, and JavaScript
                        for visually appealing interfaces. The third session
                        will center around constructing server-side logic and
                        databases, exploring backend development. The final
                        session will be dedicated to implementing responsive
                        design techniques for optimal functionality across
                        devices. Each session contributes to a well-rounded
                        skill set for effective website development.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2021
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor&apos;s Degree in Computer Science
                        <span className="separator" />
                        <span className="font-weight-700">
                          I.S.T.A Yah Hassani, Casablanca, Morocco
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        During my time at I.S.T.A Yah Hassani, I gained a strong
                        foundation in computer science and acquired essential
                        skills in programming, data analysis, and software
                        development. I had the opportunity to work on various
                        projects, expanding my knowledge in the field and
                        collaborating with peers to solve complex problems. This
                        experience significantly contributed to my academic and
                        professional growth.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          {/* Skill Bar Starts */}
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                Skills
              </h2>
              <h3 className="font-weight-600">
                <Icon
                  className="mr-5"
                  icon={"logos:javascript"}
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon={"devicon:typescript"}
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="logos:nextjs-icon"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="devicon:java"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="devicon:php"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="vscode-icons:file-type-html"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="vscode-icons:file-type-css"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5 mt-4"
                  icon="logos:bootstrap"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="logos:tailwindcss-icon"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="logos:mysql"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="logos:postgresql"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="logos:firebase"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="logos:laravel"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="devicon:git"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5 mt-4"
                  icon="vscode-icons:file-type-docker2"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="devicon:figma"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="logos:java"
                  width="100"
                  height="100"
                />
                <Icon
                  className="mr-5"
                  icon="devicon:spring"
                  width="100"
                  height="100"
                />
              </h3>
            </div>
            {/* Repeat the pattern for other skills */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
