import React from "react";
import "./Snowflake.css";

interface SnowflakeProps {
  color?: string;
  size?: number;
}

export const Snowflake: React.FC<SnowflakeProps> = ({
  color = "#ffffff",
  size = 1,
}) => {
  const style = {
    color,
    transform: `scale(${size})`,
    transformOrigin: "center center",
  };

  return (
    <div className="snowflake" style={style}>
      <div className="arm">
        <div className="branch upper"></div>
        <div className="branch lower"></div>
      </div>
      <div className="arm">
        <div className="branch upper"></div>
        <div className="branch lower"></div>
      </div>
      <div className="arm">
        <div className="branch upper"></div>
        <div className="branch lower"></div>
      </div>
      <div className="arm">
        <div className="branch upper"></div>
        <div className="branch lower"></div>
      </div>
      <div className="arm">
        <div className="branch upper"></div>
        <div className="branch lower"></div>
      </div>
      <div className="arm">
        <div className="branch upper"></div>
        <div className="branch lower"></div>
      </div>
    </div>
  );
};
