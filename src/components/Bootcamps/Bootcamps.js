import React from "react";
import "./bootcamps.css"

class Bootcamps extends React.Component{
  render() {
    return(
      <section className="bootcampsBannerSection center">
          <div className="bootcampsBannerSectionContainer container">
            <h4 className="bootcampsBannerSectionTitle title white-text center-align">Weekend coding programs</h4>
            <div className="row">
              <div className="bootcampsBannerSectionImage col l4 m12 s12">

              </div>
              <div className="bootcampsBannerSectionContent col l8 m12 s12">
                <ul>
                  <li>Get your hands dirty by coding some actual products and get IOSF certified</li>
                </ul>

                <button className="btn btn-large bootcampsBannerSectionEnrollButton center-align z-depth-0">ENROLL</button>
              </div>
            </div>
          </div>
      </section>
    )
  }
}

export default Bootcamps;