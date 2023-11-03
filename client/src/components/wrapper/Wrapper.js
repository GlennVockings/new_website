export const Wrapper = ({ children, cssClass, background }) => {
  return (
    <div className={background}>
      <div
        className={`pt-2 px-2 pb-3 m-auto ${cssClass} xl:max-w-7xl lg:max-w-4xl md:max-w-2xl md:px-0`}
      >
        {children}
      </div>
    </div>
  );
};
