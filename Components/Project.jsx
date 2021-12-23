import React from "react";
import styles from "../styles/Project.module.scss";

import { Fade } from "react-awesome-reveal";

function Project({ project }) {
  return (
    <div className={styles.project}>
      <Fade triggerOnce>
        <img src={project.imgUrl} />
        <p className={styles.id}>0{project.id}</p>
        <p className={styles.name}>{project.name}</p>
      </Fade>
    </div>
  );
}

export default Project;
