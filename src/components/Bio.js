import React from "react"
import picture from "../images/bio.jpeg"

class Bio extends React.Component {
  render() {
    return (
      <div>
        <div className="line-numbers">
          <p>
            1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
            27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49
            50 51 52 53 54 55 56 57 58 59 60
          </p>
        </div>
        <div className="divider"></div>

        <div className="about-content-container">
          <div className="comments">
            <p>// This is a comment.</p>
            <p>// This is a comment.</p>
            <p>// This is a comment.</p>
          </div>

          <div className="about-main-section">
            <ul className="about-list">
              <li>
                <p>
                  <span style={{ color: "#FF97FF" }}>.name</span> &#123;{" "}
                </p>
                <p className="tag-info title">Shuja Bakhtiar</p>
                <p>&#125;</p>
              </li>
              <li>
                <p>
                  <span style={{ color: "#86FFF8" }}>.bio</span> &#123;{" "}
                </p>
                <p className="tag-info">
                  An enthusiastic Web Developer, strong in design and
                  integration with intuitive problem-solving skills. Passionate
                  about implementing and launching new projects. Looking to
                  start as an entry-level developer with a reputed firm{" "}
                </p>
                <p>&#125;</p>
              </li>
              <li>
                <p>
                  <span style={{ color: "#94D381" }}>.skills</span> &#123;{" "}
                </p>
                <p className="tag-info">FrontEnd: HTML,CSS,Javascript;</p>
                <p className="tag-info">BackEnd: NodeJS, Express;</p>
                <p className="tag-info">Database: MongoDB, SQL, GraphQL.;</p>
                <p className="tag-info">Framework: React;</p>
                <p className="tag-info">Stack: Mern;</p>
                <p className="tag-info">
                  Languages: Java, Python, C++, Javascript;
                </p>

                <p className="tag-info">
                  Cloud Platform: AWS, Firebase, Heroku;
                </p>
                <p className="tag-info">
                  Development/Deployment: Github, Netlify;
                </p>
                <p className="tag-info">
                  Adobe: Premier, Illustrator,After Effects.;
                </p>

                <p>&#125;</p>
              </li>
              <li>
                <p>
                  <span style={{ color: "#86FFF8" }}>.contact</span> &#123;{" "}
                </p>
                <p className="tag-info">Email:shujabaktiar@gmail.com </p>
                <p className="tag-info">PhoneNumber: 9380884383</p>
                <p className="tag-info">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/shuja-bakhtiar-b28169179/"
                    className="tag-info-link"
                  >
                    LinkedIn: shuja-bakhtiar
                  </a>
                </p>
                <p>&#125;</p>
              </li>
            </ul>

            <div className="about-image-container">
              <img src={picture} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bio
