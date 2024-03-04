import React from "react";
import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  return (
    <div className="max-w-fit" style={{ margin: "25% auto" }}>
      <DotLoader
        color={"#36d7b7"}
        loading={"true"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
