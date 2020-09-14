import React, { Component } from 'react'
import "../footer.css";
import {
  Columns,
  Level,
} from "react-bulma-components";
export class ConnectBar extends Component {
  render() {
    return (
      <div className="footer__copyright">
              <Level>
                <Level.Side align="left">
                  <Level.Item className="justify__text__left">
                    <p>
                      {/* TODO: Replace inline styling with Bulma class */}
                      Mail us at<a href="mailto:ping@iosf.com" style={{marginLeft:5}}>ping@iosf.com</a>
                      <br />
                      &copy; Indian Open Source Foundation, {new Date().getFullYear()}
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
    )
  }
}

export default ConnectBar
