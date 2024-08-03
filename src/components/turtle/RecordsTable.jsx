import { format } from "date-fns";
import { Fragment } from "react";

const RecordsTable = ({ records }) => {
  console.log(records);
  return (
    <section className="h-full overflow-x-auto">
      <div className="flex items-center w-full text-sm text-[#9C9C9C] mb-2">
        <p className="pl-28">랭킹</p>
        <p className="pl-32">각도</p>
        <p className="pl-16">점수</p>
      </div>
      <table className="min-w-full">
        <tbody>
          {records.map((record, index) => (
            <Fragment key={index}>
              <tr className="bg-white">
                <td className="text-center py-6 text-[#9C9C9C] text-xs">
                  {format(new Date(record.localDate), "MM.dd")}
                </td>
                <td className="py-6 pl-4 pr-8 text-center">5</td>
                <td className="py-6 pl-6 text-center w-fit">
                  {(record.score / 10).toFixed(1)}°
                </td>
                <td className="py-6 pl-2 pr-8">{record.score}</td>
              </tr>
              {index < records.length - 1 && (
                <tr>
                  <td colSpan="5" className="py-2"></td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecordsTable;
