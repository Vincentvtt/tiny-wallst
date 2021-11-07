import { Box } from "@chakra-ui/layout";
import React from "react";
import { Radar } from "react-chartjs-2";

interface RadarChartProps {
  value: number;
  future: number;
  past: number;
  health: number;
  dividend: number;
}

const LABELS = ["value", "future", "past", "health", "dividend"];

const OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      ticks: {
        stepSize: 2,
        showLabelBackdrop: false,
      },
      angleLines: {
        color: "rgba(255, 255, 255, .3)",
        lineWidth: 1,
      },
      max: 6
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const RadarChart = ({
  value,
  future,
  past,
  health,
  dividend,
}: RadarChartProps) => {
  const data = {
    labels: LABELS,
    datasets: [
      {
        label: "Score",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: [value, future, past, health, dividend],
      },
    ],
  };

  return (
    <Box>
      <Radar data={data} options={OPTIONS} />
    </Box>
  );
};

export default RadarChart;
