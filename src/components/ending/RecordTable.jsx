const RecordTable = ({ records }) => {
  return (
    <table className="w-full table-fixed">
      <tbody>
        {records.map((record, index) => (
          <tr className="border-y-[1px] border-y-text50 w-full" key={index}>
            <td className="py-2 pl-2 text-left">{record.timerSec}</td>
            <td className="py-2 pl-2 text-left">{record.count}</td>
            <td className="flex w-40 py-2 pr-10 space-x-2">
              {Object.entries(record.qualityCounts).map(
                ([quality, count], qcIndex) => (
                  <div
                    key={qcIndex}
                    className={`flex items-center justify-center w-10 h-5 ${
                      quality === "good"
                        ? "bg-good"
                        : quality === "great"
                          ? "bg-great"
                          : "bg-perfect"
                    } rounded-xl text-sm`}
                  >
                    {count}
                  </div>
                )
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecordTable;
