import React from "react";
import { Link } from "react-router-dom";

const Asset = ({ location }) => {
  console.log(location);

  return (
    <>
      <Link
        to={{
          pathname: `/search`,
        }}
      >
        Back to Search
      </Link>

      <br />

      <div>Asset</div>
    </>
  );
};

export default Asset;
