export const Wrapper = ({ children, cssClass, background }) => {
  return (
    <div className={background}>
      <div
        className={`pt-2 pb-3 m-auto ${cssClass} xl:max-w-7xl lg:max-w-4xl md:max-w-2xl`}
      >
        {children}
      </div>
    </div>
  );
};
