import React from "react";
import { Link } from "react-router-dom";
export const CustomButton = ({ title, className, path }) => {
  return (
    <>
      <Link className={className} to={path}>
        {title}
      </Link>
    </>
  );
};
