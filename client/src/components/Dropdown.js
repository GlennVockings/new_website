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
        {options.map((option, index) => {
          return (
            <option key={index} className="text-3xl" value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};
