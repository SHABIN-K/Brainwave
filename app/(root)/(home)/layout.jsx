import Navbar from "@/components/navigation/Navbar";

export default function HomeLayout({ children }) {
  return (
    <section className="relative flex flex-col p-2">
      <Navbar />
      <main className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        {children}
      </main>
    </section>
  );
}
