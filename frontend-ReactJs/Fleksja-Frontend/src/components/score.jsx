import { useState, useEffect } from "react";



function Score({ correct, total }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore !== null) {
      setScore(parseInt(savedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  return (
    <div>
      <p>{correct}/{total}</p>

    </div>
  );
}

export default Score;
