const DUMMY_RECORDS = [
  {
    id: 0,
    time: "1:00",
    count: 35,
    qualityCounts: [
      { quality: "good", count: 10 },
      { quality: "great", count: 10 },
      { quality: "perfect", count: 15 },
    ],
  },
  {
    id: 1,
    time: "1:00",
    count: 30,
    qualityCounts: [
      { quality: "good", count: 10 },
      { quality: "great", count: 10 },
      { quality: "perfect", count: 10 },
    ],
  },
  {
    id: 2,
    time: "1:00",
    count: 40,
    qualityCounts: [
      { quality: "good", count: 3 },
      { quality: "great", count: 12 },
      { quality: "perfect", count: 25 },
    ],
  },
  {
    id: 3,
    time: "1:00",
    count: 10,
    qualityCounts: [
      { quality: "good", count: 2 },
      { quality: "great", count: 3 },
      { quality: "perfect", count: 5 },
    ],
  },
];

const RecordTable = () => {
  return (
    <table className="w-full table-fixed">
      <tbody>
        {DUMMY_RECORDS.map((record, index) => (
          <tr className="border-y-[1px] border-y-text50 w-full" key={index}>
            <td className="py-2 pl-2 text-left">{record.time}</td>
            <td className="py-2 pl-2 text-left">{record.count}</td>
            <td className="flex w-40 py-2 pr-10 space-x-2">
              {record.qualityCounts.map((qc, qcIndex) => (
                <div
                  key={qcIndex}
                  className={`flex items-center justify-center w-10 h-5 ${qc.quality === "good" ? "bg-good" : qc.quality === "great" ? "bg-great" : "bg-perfect"} rounded-xl text-sm`}
                >
                  {qc.count}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecordTable;
