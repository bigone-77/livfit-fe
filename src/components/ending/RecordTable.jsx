import { timeFormat } from "@utils/timeFormat";

const RecordTable = ({ records }) => {
  return (
    <>
      <p className="mb-2 text-start">이전 기록</p>
      <table className="w-full h-full table-fixed">
        <tbody className="h-full overflow-y-scroll">
          {records.map((record, index) => (
            <tr className="border-y-[1px] border-y-text50 w-full" key={index}>
              <td className="py-2 pl-2 text-left">
                {timeFormat(record.timer_sec, true)}
              </td>
              <td className="py-2 pl-2 text-left">{record.count}</td>
              <td className="flex w-40 py-2 pr-10 space-x-2">
                <div className="flex items-center justify-center w-10 h-5 text-sm bg-good rounded-xl">
                  {record.good}
                </div>
                <div className="flex items-center justify-center w-10 h-5 text-sm bg-great rounded-xl">
                  {record.great}
                </div>
                <div className="flex items-center justify-center w-10 h-5 text-sm bg-perfect rounded-xl">
                  {record.perfect}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RecordTable;
