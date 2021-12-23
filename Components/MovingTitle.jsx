import React, { useState, useEffect } from "react";
import styles from "../styles/MovingTitle.module.scss";

function MovingTitle({ text, color, spacing, speed }) {
  const NUMBER = 5;

  const [time, setTime] = useState(0);
  const [indexRound, setIndexRound] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((time) => time - speed), 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRound >= NUMBER - 1) {
        clearInterval();
      } else {
        setIndexRound((round) => round + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  console.log(indexRound);

  return (
    <div className={styles.title}>
      {Array.from(Array(5).keys()).map((i) => (
        <h2
          style={{
            color,
            left: `${
              100 + (indexRound >= i ? (time + i * spacing) % 150 : 0)
            }%`,
          }}
        >
          {text}
        </h2>
      ))}
    </div>
  );
}

export default MovingTitle;
