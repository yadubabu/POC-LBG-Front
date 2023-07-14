import React from "react";
import "./label.css";

export default function Labels() {
  const objects = [
    {
      type: "Savings",
      color: "rgb(255, 99, 132)",
      perrcent: 45,
    },
    {
      type: "Investment",
      color: "rgb(54, 162, 235)",
      perrcent: 35,
    },
    {
      type: "Expenses",
      color: "rgb(255, 205, 86)",
      perrcent: 20,
    },
  ];

  return (
    <>
      {objects.map((val, i) => {
        return (
          <div key={i}>
            {" "}
            <LabelComponent data={val} />
          </div>
        );
      })}
    </>
  );
}

const LabelComponent = ({ data }) => {
  if (!data) return <></>;
  return (
    <div className="label gap-2">
      <div
        className="bar"
        style={{ background: data.color ?? "#f9c74f" }}
      ></div>
      <h6 className="text">{data.type}</h6>
      <h5 className="font-bold">{data.perrcent}%</h5>
      <div></div>
    </div>
  );
};
