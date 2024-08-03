import ColCard from "./ColCard";

const Contents = ({ data }) => {
  return (
    <section className="grid w-full grid-cols-2 gap-3 place-items-center">
      {data.map((d, index) => (
        <ColCard
          key={index}
          title={d.title}
          desc={d.description}
          start={d.startDate}
          end={d.endDate}
          freq={d.frequency}
          id={d.id}
        />
      ))}
    </section>
  );
};

export default Contents;
