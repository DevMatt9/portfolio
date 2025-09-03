import React from "react";

type SeparatorProps = {
  color?: string; // couleur de la forme (path)
  backgroundColor?: string; // couleur du fond derrière la forme
  position?: "top" | "bottom";
  invertX?: boolean;
  invertY?: boolean;
};

const Separator: React.FC<SeparatorProps> = ({
  color = "#f8f9fa",
  backgroundColor = "transparent",
  position = "bottom",
  invertX = false,
  invertY = false,
}) => {
  const transform = `
    ${invertX ? "scaleX(-1)" : ""}
    ${invertY ? "scaleY(-1)" : ""}
  `.trim();

  return (
    <div
      className="w-full overflow-hidden leading-[0]"
      style={{ backgroundColor }}
    >
      <svg
        className="w-full"
        viewBox="0 0 500 50"
        preserveAspectRatio="none"
        style={{ transform }}
      >
        {position === "top" ? (
          <path
            d="M0,0 C150,50 350,0 500,25 L500,50 L0,50 Z"
            style={{ fill: color }}
          />
        ) : (
          <path
            d="M0,0 C150,50 350,0 500,25 L500,0 L0,0 Z"
            style={{ fill: color }}
          />
        )}
      </svg>
    </div>
  );
};

export default Separator;
