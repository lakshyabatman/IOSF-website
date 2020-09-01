import React from "react";
import "./footer.css";
import {
  Footer,
  Content,
  Container,
  Columns,
  Button,
  Level,
} from "react-bulma-components";

class AppFooter extends React.Component {
  render() {
    const date = new Date();

    return (
      <Footer>
        <Container>
          <Content>
            <Level>
              <Level.Side align="left">
                <Level.Item>
                  <img src="/img/iosf-logo.png" alt="iosf-logo" />
                </Level.Item>
              </Level.Side>
              <Level.Side align="right">
                <Level.Item>
                  Back To Top <i className="fas fa-arrow-up"></i>
                </Level.Item>
              </Level.Side>
            </Level>
            <hr />
            <div className="rows">
              <div className="column has-text-centered">
                <p>
                  Join us as a contributor and associate with us in our journey
                  for making <strong>Open Source Contribution</strong> lit 🔥
                  and super
                  <br />
                  powerful for the budding and already existing developer
                  community.
                </p>
              </div>
              <div className="column has-text-centered">
                <Button
                  className="footer__joinUsBtn button__join"
                  size="medium"
                  renderAs="a"
                  href="https://toolsiosf.typeform.com/to/fl45kmgs"
                >
                  JOIN US
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <Columns>
                <Columns.Column size={3}>
                  <h4>General Links</h4>
                  <ul className="footer__links">
                    <li>
                      <a
                        className="footer-link grey-text text-lighten-1"
                        href="/"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        className="footer-link grey-text text-lighten-1"
                        href="/"
                      >
                        Work
                      </a>
                    </li>
                    <li>
                      <a
                        className="footer-link grey-text text-lighten-1 "
                        href="/"
                      >
                        Join
                      </a>
                    </li>
                    <li>
                      <a
                        className="footer-link grey-text text-lighten-1"
                        href="/"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        className="footer-link grey-text text-lighten-1"
                        href="/"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </Columns.Column>
                <Columns.Column size={4}>
                  <h4>Subscribe</h4>
                  <form>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          placeholder="Enter your email, foo@bar.com"
                        />
                      </div>
                    </div>
                    <Button
                      className="footer__subscribeBtn "
                      color="primary"
                      size="small"
                    >
                      SUBSCRIBE
                    </Button>
                  </form>
                </Columns.Column>

                <Columns.Column>
                  <div className="language">
                    <h4>Language</h4>
                    <div className="select">
                      <select>
                        <option>English</option>
                      </select>
                    </div>
                  </div>
                </Columns.Column>
              </Columns>
            </div>
            <hr />
            <div className="footer__copyright">
              <Level>
                <Level.Side align="left">
                  <Level.Item className="justify__text__left">
                    <p>
                      ping@iosf.com <br />
                      &copy; Indian Open Source Foundation, {date.getFullYear()}
                    </p>
                  </Level.Item>
                </Level.Side>
                <Level.Side align="right">
                  <Level.Item>
                    <Columns.Column size={12}>
                      <h4>Connect</h4>
                      <div className="footer__socialLinks">
                        <a
                          href="https://www.facebook.com/iosfindia/"
                          className="btn btn-floating z-depth-0 facebook transparent grey-text"
                        >
                          <i className="fab grey-text fa-facebook-f"></i>
                        </a>
                        <a
                          href="https://twitter.com/iosf_india"
                          className="btn btn-floating z-depth-0 twitter transparent grey-text"
                        >
                          <i className="fab grey-text fa-twitter"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/iosf_india/"
                          className="btn btn-floating z-depth-0 instagram transparent grey-text"
                        >
                          <i className="fab grey-text fa-instagram"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/iosf/"
                          className="btn btn-floating z-depth-0 linkedin transparent grey-text"
                        >
                          <i className="fab grey-text fa-linkedin"></i>
                        </a>
                        <a
                          href="https://github.com/IndianOpenSourceFoundation"
                          className="btn btn-floating z-depth-0 github transparent grey-text"
                        >
                          <i className="fab grey-text fa-github"></i>
                        </a>
                      </div>
                    </Columns.Column>
                  </Level.Item>
                </Level.Side>
              </Level>
            </div>
          </Content>
        </Container>
      </Footer>
    );
  }
}

export default AppFooter;
