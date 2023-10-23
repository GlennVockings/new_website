export const Dropdown = ({
  name,
  required,
  options,
  callback,
  cssClass,
  activeOption,
  ref,
}) => {
  return (
    <>
      <select
        ref={ref}
        name={name}
        required={required ? true : false}
        onChange={callback}
        className={cssClass}
        defaultValue={activeOption}
      >
        <option className="text-2xl" value="">
          Please select one
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} className="text-2xl" value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
};
