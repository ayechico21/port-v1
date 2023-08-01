import React from "react";
import ThemeWrapper from "../ThemeWrapper";
import MaxWidthContainer from "../MaxWidthContainer";
import { styled } from "styled-components";
import { projects } from "../../data";
import Project from "../Project/Project";

function Projects() {
  return (
    <ThemeWrapper>
      <MaxWidthContainer>
        <Wrapper>
          <h1>Projects</h1>
          <ProjectWrapper>
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </ProjectWrapper>
        </Wrapper>
      </MaxWidthContainer>
    </ThemeWrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
const ProjectWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default Projects;
