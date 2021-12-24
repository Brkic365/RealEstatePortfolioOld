import React from "react";
import styles from "../styles/Project.module.scss";

import { Fade } from "react-awesome-reveal";

function Project({ project }) {
  return (
    <div className={styles.project}>
      <Fade triggerOnce delay={300}>
        <img src={project.imgUrl} />
      </Fade>
    </div>
  );
}

export default Project;
