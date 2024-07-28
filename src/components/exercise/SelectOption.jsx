const SelectOption = ({ values, title, step }) => {
  let content;
  if (step === 2 || step === 3) {
    content = (
      <section className="flex items-center justify-between w-full gap-2">
        <select className="block w-full py-4 pl-20 border border-gray-300 rounded-lg outline-none bg-text50 ">
          <option value="" disabled>
            선택
          </option>
          {values[0].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <select className="block w-full py-4 pl-20 border border-gray-300 rounded-lg outline-none bg-text50 ">
          <option value="" disabled>
            선택
          </option>
          {values[1].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </section>
    );
  } else {
    content = (
      <select className="block w-full py-4 pl-48 border border-gray-300 rounded-lg outline-none bg-text50 ">
        <option value="" disabled>
          선택
        </option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xl">{title}</p>

      {content}
    </div>
  );
};

export default SelectOption;
