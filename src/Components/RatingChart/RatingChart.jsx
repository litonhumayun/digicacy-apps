import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ app }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={app.ratings}
        layout="vertical"
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" width={60} />
        <Tooltip />
        <Bar dataKey="count" fill="#413ea0" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingChart;
