const PageHeading = ({
    title,
    subtitle,
  }) => {
    return (
      <>
        <h2 className=" pt-4 text-[clamp(1.3rem,6vw,2rem)] font-medium capitalize text-gray-900">
          {title}
        </h2>
        <p className="pb-4 text-sm capitalize text-gray-400 ">{subtitle}</p>
      </>
    );
  };
  
  export default PageHeading;
  