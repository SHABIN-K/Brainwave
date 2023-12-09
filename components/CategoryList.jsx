import CompanyCardSkeleton from "./skeleton/CompanyCardSkeleton";


const CompanyList = () => {
  const skeleton = Array.from({ length: 9 }, (_, i) => {
    return <CompanyCardSkeleton key={i} />;
  });

  return (
    <ul className="grid h-fit gap-6 md:grid-cols-[repeat(auto-fit,clamp(150px,30vw,175px))]">
      {skeleton}
    </ul>
  );
};

export default CompanyList;
