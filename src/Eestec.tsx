import { Badge } from "@chakra-ui/layout";
import React from "react";
import { ProjectType } from "../../types/project-type";

const Eestec = ({ type, title, content, imageUrl, readMore }: ProjectType) => {
  return (
    <h1>
      {" "}
      <Badge className="badge">{type}</Badge>
      {title}{" "}
    </h1>
  );
};
export default Eestec;
