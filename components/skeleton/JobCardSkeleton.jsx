/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const JobCardSkeleton = () => {
    return (
      <li className="grid items-center gap-2 rounded-2xl bg-light-100 p-4 shadow-2xl shadow-accent-100/50 hover:shadow-accent-100 md:grid-cols-[1fr_auto]">
        <div className="grid grid-cols-[auto_1fr] grid-rows-[3,auto] items-center gap-x-4 gap-y-2">
          <img className="skeleton aspect-square h-full min-w-[50px] overflow-hidden rounded-full object-contain md:row-span-3 md:h-20" />
          <h2 className="line-clamp-2 font-medium capitalize">
            <p className="skeleton h-4 w-[100%] rounded-full" />
          </h2>
          <div className="col-span-2 my-2 flex flex-wrap gap-4 py-4 md:col-span-1">
            <p className="skeleton h-4 w-[25%] rounded-full" />
          </div>
          <div className="col-span-2 flex flex-wrap items-center gap-4 md:col-span-1">
            <p className="skeleton h-4 w-[25%] rounded-full" />
            <p className="skeleton h-4 w-[25%] rounded-full" />
          </div>
        </div>
      </li>
    );
  };
  
  export default JobCardSkeleton;