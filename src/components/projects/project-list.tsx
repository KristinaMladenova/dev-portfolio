import { Box } from "@chakra-ui/react";
import React from "react";
import { ProjectType } from "../../types/project-type";
import Project from "./project";

type AllProjectsType = {
  projects: ProjectType[];
};

const ProjectList = ({ projects }: AllProjectsType) => {
  return (
    <Box>
      {projects.map((p) => {
        return (
          <Project
            type={p.type}
            title={p.title}
            content={p.content}
            imageUrl={p.imageUrl}
          />
        );
      })}
    </Box>
  );
};

export default ProjectList;
