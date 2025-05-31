export default function HomeLayout({ children }) {
  return (
    <>
      <div className="relative w-[900px] bg-slate-200 h-[600px] rotate-[20deg] flex items-center justify-center shadow-[1px_1px_10px] rounded-xl shadow-cyan-400 max-lg:w-[800px] max-lg:h-[500px] max-lg:rotate-[15deg] max-md:w-[700px] max-md:h-[400px] max-md:rotate-[10deg] max-sm:w-[600px] max-sm:h-[400px] max-sm:rotate-[0deg] max-sm:mx-2 max-sm:mb-8">
        {children}
      </div>
    </>
  );
}
