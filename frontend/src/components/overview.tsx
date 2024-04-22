"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 0) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(9350),
  },
  {
    name: "Mar",
    total: Math.floor(205350),
  },
  {
    name: "Apr",
    total: Math.floor(245350),
  },
  {
    name: "May",
    total: Math.floor(245350),
  },
  {
    name: "Jun",
    total: Math.floor(245350),
  },
  {
    name: "Jul",
    total: Math.floor(245350),
  },
  {
    name: "Aug",
    total: Math.floor(245350),
  },
  {
    name: "Sep",
    total: Math.floor(245350),
  },
  {
    name: "Oct",
    total: Math.floor(245350),
  },
  {
    name: "Nov",
    total: Math.floor(245350),
  },
  {
    name: "Dec",
    total: Math.floor(245350),
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
