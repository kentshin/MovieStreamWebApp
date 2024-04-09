import React from 'react';
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import "./pageNotFound_style.scss";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
        <ContentWrapper>
            <span className="bigText">404</span>
            <span className="smallText">Page not found!</span>
        </ContentWrapper>
    </div>
);
}

export default PageNotFound;
