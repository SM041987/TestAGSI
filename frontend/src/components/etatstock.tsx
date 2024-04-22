/* eslint-disable no-shadow */
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", value: 80, color: "#ff0000" },
  { name: "B", value: 45, color: "#00ff00" },
  { name: "C", value: 25, color: "#0000ff" },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (
  value: number,
  data: { name: string; value: number; color: string }[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string
) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + oR) / 2;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const x0 = cx;
  const y0 = cy;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return (
    <>
      <circle cx={x0} cy={y0} r={5} fill={color} />
      <path
        d={`M${x0} ${y0} L${xp} ${yp}`}
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
    </>
  );
};

const PieChartWithNeedle = () => {
  return (
    <PieChart width={400} height={500}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill="#8884d8"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(value, data, cx, cy, iR, oR, "#d0d000")}
    </PieChart>
  );
};

export default PieChartWithNeedle;
