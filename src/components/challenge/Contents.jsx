import ColCard from "./ColCard";

const Contents = () => {
  return (
    <section className="grid w-full grid-cols-2 gap-3 place-items-center">
      {Array.from({ length: 12 }).map((_, index) => (
        <ColCard key={index} />
      ))}
    </section>
  );
};

export default Contents;
