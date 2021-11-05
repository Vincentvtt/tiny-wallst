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
  scale: {
    ticks: {
      min: 0,
      max: 16,
      stepSize: 2,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)",
    },
    angleLines: {
      color: "rgba(255, 255, 255, .3)",
      lineWidth: 1,
    },
    gridLines: {
      color: "rgba(255, 255, 255, .3)",
      circular: true,
    },
  },
} as const;

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
        label: "Snowflake",
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

  return <Radar data={data} options={OPTIONS} />;
};

export default RadarChart;
