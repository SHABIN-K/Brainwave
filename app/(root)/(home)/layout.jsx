import Navbar from "@/components/navigation/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="relative sm:p-8 p-4 flex flex-col">
      <div>
        <Navbar />
      </div>
      <main className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {children}
      </main>
    </section>
  );
}
