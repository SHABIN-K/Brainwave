import CategoryLinks from "@/components/CategoryLinks";
import CompanyList from "@/components/CategoryList";
import JobList from "@/components/JobList";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl overflow-hidden px-4 pb-16">
      <Search />
      <CategoryLinks />
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className=" py-4 text-center text-[clamp(1rem,6vw,2rem)] font-medium capitalize">
            Jobs
          </h2>
          <JobList />
        
        </div>
      </div>
    </main>
  );
}
