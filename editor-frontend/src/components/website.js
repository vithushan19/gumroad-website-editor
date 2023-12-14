import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function Website(props) {
  // fetch id from the route params
  const { id } = useParams();

  return <div>Website {id}</div>;
}

export default Website;
