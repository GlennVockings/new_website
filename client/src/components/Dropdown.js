export const Dropdown = ({ name, required, options, callback, cssClass }) => {
  return (
    <>
      <select
        name={name}
        required={required ? true : false}
        onChange={callback}
        className={cssClass}
      >
        <option className="text-3xl" value="">
          Please select one
        </option>
        {options.map((option) => {
          return (
            <option className="text-3xl" value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};
