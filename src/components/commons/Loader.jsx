import { PuffLoader } from "react-spinners";

export default function Loader({ message }) {
  return (
    <div
      className={`w-full ${
        message ? "h-full justify-start pb-10" : "h-screen justify-center"
      } flex flex-col items-center text-center gap-[2px]`}
    >
      <PuffLoader color="#158EFF" size={100} />
      <p className="font-semibold text-text600">{message}</p>
    </div>
  );
}
