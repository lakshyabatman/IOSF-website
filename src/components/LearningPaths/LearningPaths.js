import React from "react";
import "./learningPath.css"

class LearningPaths extends React.Component{
  render() {
    return(
      <section className="learning__path__section">
        <div className="learning__path_container container">
           <h4 className="learning_path_title section__title center-align">Personalised learning paths for devs</h4>
          <div className="beginnerfriendly__path__container row">
            <div className="beginnerfriendly__path__banner col l4 m12 s12">

            </div>
            <div className="col l7 offset-l1 m12 s12" >
              <h5>Beginner Friendly Path</h5>
              <div className="beginnerfriendly__path__content">
                <ul>
                  <li>This path is specially designed for those who have little or zero experience in computer programming and open source.</li>
                  <li>We will cover JavaScript, Python and Version Control (Git) form scratch and kick off by contributing to small yet interesting projects.</li>
                </ul>
              </div>
              <button className="join__path__btn btn z-depth-0">GET STARTED</button>
            </div>
          </div>
          <div className="handson__path_container row">
            <div className="advancedPathBannerSmall col l4 offset-l1 m12 s12">

            </div>
              <div className="col l7 m12 s12 ">
                <h5>Hands-on Code Path</h5>
                <div className="handson__path_content">
                  <ul>
                    <li>This path is a step further, we will use our programming skills and logic to contribute and build products that will solve a real-life problem.</li>
                    <li>Contribute to our source code and help us build better products</li>
                  </ul>
                </div>
                <button className="join__path__btn btn z-depth-0">GET STARTED</button>
              </div>

            <div className="advancedPathBanner col l4 offset-l1 m12 s12">

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LearningPaths