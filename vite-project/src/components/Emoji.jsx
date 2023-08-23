import React, { useState } from "react";

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <div className="Emoji">
      <span role="img" aria-label="emoji">
        {isHappy ? "😄" : "😢"}
      </span>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
