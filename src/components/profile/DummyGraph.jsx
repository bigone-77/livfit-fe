import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphComponent = ({ graph }) => {
  const graphData = [...graph].reverse();

  const labels = graphData.map((item) =>
    format(new Date(item.createdAt), "MM.dd")
  );
  const dataValues = graphData.map((item) => item.today_counts);

  const data = {
    labels,
    datasets: [
      {
        label: "갯수",
        data: dataValues,
        backgroundColor: dataValues.map((_, index) =>
          index === dataValues.length - 1
            ? "rgba(255, 159, 64, 0.8)"
            : "rgba(255, 206, 86, 0.6)"
        ),
        borderColor: dataValues.map((_, index) =>
          index === dataValues.length - 1
            ? "rgba(255, 159, 64, 1)"
            : "rgba(255, 206, 86, 1)"
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const index = tooltipItems[0].dataIndex;
            const createdAt = graphData[index].createdAt;
            return format(new Date(createdAt), "MM월 dd일 (eee)", {
              locale: ko,
            });
          },
          label: (tooltipItem) => `${tooltipItem.raw}개`,
        },
      },
    },
    scales: {
      x: {
        display: false, // x축 레이블 숨기기
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 50,
          align: "end", // y축 레이블을 오른쪽으로 이동
        },
      },
    },
  };

  return (
    <div className="w-full mt-8">
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraphComponent;
