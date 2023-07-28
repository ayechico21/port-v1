import React from "react";
import LinkButton from "../LinkButton";

function Project({ name, description, links }) {
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      {Object.keys(links).map((key) => (
        <LinkButton key={key} href={links[key]}>
          {key}
        </LinkButton>
      ))}
    </div>
  );
}

export default Project;
