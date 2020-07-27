import React from "react";
import "./footer.css"

class Footer extends React.Component{
  render() {
    const date = new Date();

    return(
      <footer>
        <div className="page-footer">
          <div className="container">
            <blockquote>
              Join us as a contributor and associate with us in our journey for making Open Source Contribution lit 🔥 and super powerful for the budding and already existing developer community.
            </blockquote>
            <div className="center">
              <button className="joinUsBtnLarge btn btn-large z-depth-0">JOIN US</button>
            </div>
            <div className="row">
              <div className="col l4 m12 s12">
                <h5>Subscribe</h5>
                <form action="">
                  <div className="input-field">
                    <input type="text" placeholder="Email, e.g foo@bar.com"/>
                  </div>
                  <button type="submit" className="btn z-depth-0 grey">SUBSCRIBE</button>
                </form>
              </div>
              <div className="col l3 offset-l1 m12 s12">
                <h5>General Links</h5>
                <ul className="">
                  <li>
                    <a className="footer-link grey-text text-lighten-1" href=""
                    >About</a
                    >
                  </li>
                  <li>
                    <a className="footer-link grey-text text-lighten-1" href=""
                    >Work</a
                    >
                  </li>
                  <li>
                    <a className="footer-link grey-text text-lighten-1 " href=""
                    >Join</a
                    >
                  </li>
                  <li>
                    <a className="footer-link grey-text text-lighten-1" href=""
                    >Blogs</a
                    >
                  </li>
                  <li>
                    <a className="footer-link grey-text text-lighten-1" href=""
                    >Contact</a
                    >
                  </li>
                </ul>
              </div>
              <div className="col l3 offset-l1 m12 s12">
                <h5>Connect</h5>
                <a href="https://www.facebook.com/iosfindia/" className="btn btn-floating z-depth-0 facebook transparent grey-text"><i class="fab grey-text fa-facebook-f"></i></a>
                <a href="https://twitter.com/iosf_india" className="btn btn-floating z-depth-0 twitter transparent grey-text"><i class="fab grey-text fa-twitter"></i></a>
                <a href="https://www.instagram.com/iosf_india/" className="btn btn-floating z-depth-0 instagram transparent grey-text"><i class="fab grey-text fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/iosf/" className="btn btn-floating z-depth-0 linkedin transparent grey-text"><i class="fab grey-text fa-linkedin"></i></a>
                <a href="https://github.com/IndianOpenSourceFoundation" className="btn btn-floating z-depth-0 github transparent grey-text"><i class="fab grey-text fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="">
              &copy; Indian Open Source Foundation, {date.getFullYear()}. Made for the <span className="red-text text-accent-2"><i className="fas fa-heart"></i></span> of open source.
            </div>
          </div>
        </div>
      </div>
  </footer>
    )
  }
}

export default Footer;