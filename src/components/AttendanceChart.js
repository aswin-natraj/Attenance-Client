import { Bar } from "react-chartjs-2";

export const BarChartExample = ({ data, stacked }) => {
  return (
    <Bar
      data={data}
      options={{
        legend: {
          display: false,
          labels: {
            boxWidth: 30,
            padding: 20,
            fontColor: "#6783b8",
          },
        },
        maintainAspectRatio: false,
        tooltips: {
          enabled: true,
          backgroundColor: "#eff6ff",
          titleFontSize: 13,
          titleFontColor: "#6783b8",
          titleMarginBottom: 6,
          bodyFontColor: "#9eaecf",
          bodyFontSize: 12,
          bodySpacing: 4,
          yPadding: 10,
          xPadding: 10,
          footerMarginTop: 0,
          displayColors: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              stacked: stacked ? true : false,
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: "#9eaecf",
                padding: 5,
              },
              gridLines: {
                tickMarkLength: 0,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              stacked: stacked ? true : false,
              ticks: {
                fontSize: 12,
                fontColor: "#9eaecf",
                source: "auto",
                padding: 5,
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 10,
                zeroLineColor: "transparent",
              },
            },
          ],
        },
      }}
    />
  );
};

export const barChartMultiple = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dataUnit: "USD",
  datasets: [
    {
      label: "Income",
      backgroundColor: "#9cabff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95],
    },
    {
      label: "Expense",
      backgroundColor: "#f4aaa4",
      data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125],
    },
  ],
};
export const barChartStacked = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  stacked: true,
  dataUnit: "USD",
  datasets: [
    {
      label: "Income",
      backgroundColor: "#9cabff",
      data: [110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95],
    },
    {
      label: "Expense",
      backgroundColor: "#f4aaa4",
      data: [75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125],
    },
  ],
};
