import UserPostedJobs from "./UserPostedJobs";
import Youtube from "@/public/asset/Youtube";
import Website from "@/public/asset/Website";


const CompanyDetails = ({post}) => {  
  return (
    <div>
      <div className="w-full flex items-center justify-center dark:bg-gray-900">
        <div className="relative w-full max-w-2xl my-8 md:my-16 flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 px-4 py-8 border-2 border-dashed border-gray-400 dark:border-gray-400 shadow-lg rounded-lg ">
          <span className="absolute text-xs font-medium top-0 left-0 rounded-br-lg rounded-tl-lg px-2 py-1 bg-primary-100 dark:bg-gray-900 dark:text-gray-300 border-gray-400 dark:border-gray-400 border-b-2 border-r-2 border-dashed ">
            Company
          </span>

          <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
            <p
              className="font-display mb-2 text-2xl font-semibold dark:text-gray-200"
            
            >
              {post.name}
            </p>

            <div className="mb-1 md:text-lg text-gray-600">
              <p>
                {post?.description?.slice(3,-4)}</p>
            </div>
            <div className="text-gray-500">
              <p>{post.address}</p>
            </div>
            <div className="flex text-gray-400 gap-5 mt-1">
              <p>{post.email}</p>
              <p>{post.phonenumber}</p>
            </div>

            <div className="flex gap-4 mt-2">
              <Youtube />

              <Website />
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-accent-500 w-full h-1 " />
      <div className="md:mr-[70px]">
        <UserPostedJobs />
      </div>
    </div>
  );
};

export default CompanyDetails;
