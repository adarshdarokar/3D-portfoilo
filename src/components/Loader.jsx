import { Html, useProgress } from "@react-three/drei";
import { memo, useMemo } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  // Avoid recalculating percent on every render
  const percent = useMemo(() => progress.toFixed(2), [progress]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        willChange: "transform", // GPU hint
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
          userSelect: "none",
        }}
      >
        {percent}%
      </p>
    </Html>
  );
};

export default memo(CanvasLoader);
