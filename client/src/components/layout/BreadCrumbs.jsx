import React from "react";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const BreadCrumbs = ({ breadcrumbs }) => {
  return (
    <div className="" style={{marginTop:'20px'}}>
      {breadcrumbs.map((breadcrumb, index) => {
        const { displayName, url } = breadcrumb;
        const isCurrentPage = index === breadcrumbs.length - 1;
        const opacityStyle = isCurrentPage ? 1 : 0.6;
        return (
          <React.Fragment key={url}>
            {index > 0 && (
              <span style={{ opacity: opacityStyle }}>&nbsp;&gt;&nbsp;</span>
            )}
            {isCurrentPage ? (
              <span style={{ opacity: opacityStyle }}>
                {""}
                {""} {displayName}
              </span>
            ) : (
              <Link to={url} style={{ opacity: opacityStyle }}>
                {index === 0 ? displayName : " " + displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
