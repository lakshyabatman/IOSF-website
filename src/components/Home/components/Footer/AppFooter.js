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
import ConnectBar from "./components/connect-bar";

class AppFooter extends React.Component {
  backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  render() {

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
                  <div onClick={this.backToTop}>
                    <span className="has-text-white">Back To Top</span>
                    <i className="fas fa-arrow-up has-text-white"></i>
                  </div>
                </Level.Item>
              </Level.Side>
            </Level>
            <hr />
            <div className="rows">
              <div className="column has-text-centered">
                <p className="has-text-white">
                  Join us as a contributor and associate with us in our journey
                  for making
                  <strong className="has-text-white">
                    Open Source Contribution
                  </strong>
                  lit 🔥 and super &nbsp; powerful for the budding and already
                  existing developer community.
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
            <ConnectBar/>
          </Content>
        </Container>
      </Footer>
    );
  }
}

export default AppFooter;
