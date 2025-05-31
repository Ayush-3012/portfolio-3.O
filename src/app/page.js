export default function Home() {
  return (
    <>
      <div className="w-full h-full bg-slate-200 rounded-xl flex flex-col items-center justify-center p-6 max-sm:p-3">
        <div className="max-lg:-rotate-[15deg] max-md:-rotate-[10deg] max-sm:-rotate-[0deg] -rotate-[20deg]">
          <h1 className="text-4xl font-bold mb-6 max-sm:text-2xl max-sm:text-center">
            Hi, I&apos;m{" "}
            <span className="text-blue-700 font-extrabold">Ayush Kumar</span>, a{" "}
            <span className="text-green-700 font-extrabold">MERN</span> Stack
            Developer.
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl max-sm:text-base max-sm:text-center">
            I&apos;m a graduate in{" "}
            <span className="font-semibold text-purple-700">
              B.Sc. (Hons.) Computer Science
            </span>{" "}
            from{" "}
            <span className="font-semibold text-indigo-700">
              Dyal Singh College, Delhi University
            </span>
            , with strong programming skills in{" "}
            <span className="font-semibold text-orange-700">
              C++, JavaScript, Python, HTML, CSS, MERN (MongoDB, ExpressJs,
              ReactJs, NodeJs) Stack, Redux, TailwindCSS, NextJs, REST API
            </span>
            . I have scored{" "}
            <span className="font-bold text-red-700">8.8 CGPA</span>.
          </p>
        </div>
      </div>
    </>
  );
}
