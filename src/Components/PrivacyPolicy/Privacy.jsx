import React from "react";

import "./privacy.css";
import "./privacyMobile.css";

const Privacy = () => {
  return (
    <div>
      {/* hero section start */}
      <section className="heroSection4">
        <div className="container">
          <div className="heroArea4">
            <div className="heroTxts4">
              <h1
                className="heroTitle4"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                Privacy Policy
              </h1>
              <p
                className="hero4para"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                NEED SUPPORT:{" "}
                <a href="#" className="egrEmailLink">
                  support@egochain.org
                </a>
              </p>
            </div>

            <div className="hero-images4" data-aos="fade-left">
              <img src="/img/privacy-image.svg" alt="" className="privacy" />
            </div>
          </div>
          <div className="privacyTextList">
            <span
              className="privacyTextList_span
            "
            >
              Last Date Updated 10 January 2024.
            </span>
            <div className="privacyTxts">
              <div className="privacyLine" data-aos="fade-right"></div>
              <div className="loanDetailsTitle">
                <h1 className="PrivacyTitle" data-aos="fade-right">
                  1. <span className="titleName">About this Notice</span>
                </h1>
              </div>
              <p className="AboutUsPara" data-aos="fade-right">
                This Privacy and Cookie Notice provides information on how
                egochain collects and processes your personal data when you
                visit our website or mobile applications.
              </p>
            </div>
            <div className="privacyTxts">
              <div className="privacyLine" data-aos="fade-right"></div>
              <div className="loanDetailsTitle">
                <h1 className="PrivacyTitle" data-aos="fade-right">
                  2.{" "}
                  <span className="titleName">
                    The Data We Collect About You?
                  </span>
                </h1>
              </div>
              <p className="AboutUsPara" data-aos="fade-right">
                We collect your personal data in order to provide and
                continually improve our products and services. We may collect,
                use, store and transfer the following different kinds of
                personal data about you: Here for marketing and personal data
                optimization purposes. egochain also uses Google Digital
                Marketing to propose targeted offers. To find out more:
                <br />
                <br /> Information you provide to us: We receive and store the
                information you provide to us including your identity data,
                contact data, delivery address and financial data.
                <br />
                <br /> Information on your use of our website and/or mobile
                applications: We automatically collect and store certain types
                of information regarding your use of the egochain including
                information about your searches, views, downloads and
                transactions.
                <br />
                <br /> Information from third parties and publicly available
                sources: We may receive information about you from third parties
                including our carriers; payment service providers;
                merchants/brands; and advertising service providers.
              </p>
            </div>
            <div className="privacyTxts">
              <div className="privacyLine" data-aos="fade-right"></div>
              <div className="loanDetailsTitle">
                <h1 className="PrivacyTitle " data-aos="fade-right">
                  3.{" "}
                  <span className="titleName">Cookies and How We Use Them</span>
                </h1>
              </div>
              <p className="AboutUsPara" data-aos="fade-right">
                A cookie is a small file of letters and numbers that we put on
                your computer if you agree.
                <br />
                <br /> Cookies allow us to distinguish you from other users of
                our website and mobile applications, which helps us to provide
                you with an enhanced browsing experience. For example we use
                cookies for the following purposes: Recognising and counting the
                number of visitors and to see how visitors move around the site
                when they are using it (this helps us to improve the way our
                website works, for example by ensuring that users can find what
                they are looking for). <br />
                <br />
                Identifying your preferences and subscriptions e.g. language
                settings and Sending you newsletters and commercial/advertising
                messages tailored to your interests.
                <br />
                <br /> Our approved third parties may also set cookies when you
                use our website. Third parties include search engines, providers
                of measurement and analytics services, social media networks and
                advertising companies.
              </p>
            </div>
            <div className="privacyTxts">
              <div className="privacyLine" data-aos="fade-right"></div>
              <div className="loanDetailsTitle">
                <h1 className="PrivacyTitle" data-aos="fade-right">
                  4.{" "}
                  <span className="titleName">
                    How We Use Your Personal Data
                  </span>
                </h1>
              </div>
              <p className="AboutUsPara" data-aos="fade-right">
                We use your personal data to operate, provide, develop and
                improve the products and services that we offer, including the
                following: Managing your relationship with us. <br />
                <br />
                Enabling you to participate in promotions, competitions and
                surveys. Improving our website, applications, products and
                services Recommending/advertising products or services which may
                be of interest to you.
                <br />
                <br /> Complying with our legal obligations, including verifying
                your identity where necessary.
              </p>
            </div>
          </div>
        </div>

        <img src="/img/projects-blurbg.png" alt="" className="privacyBlurBg" />
        <img
          src="/img/privacy-rightbg.png"
          alt=""
          className="privacyrightBlurBg"
        />
      </section>
      {/* hero section end */}
      {/* =================================================================================================================================================================================================================================================================== */}
    </div>
  );
};

export default Privacy;
