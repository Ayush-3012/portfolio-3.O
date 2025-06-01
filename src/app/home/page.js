import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full">
        <div className="flex items-center justify-center">
          <div className="mx-4 my-16">
            <Image
              src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
              alt={"Ayush Kumar"}
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0"
            />
          </div>
        </div>
        <div className="flex flex-col text-white turret-font items-center justify-center px-8 py-12">
          <h1 className="text-4xl font-bold mb-6 max-sm:text-2xl max-sm:text-center">
            Hi, I&apos;m{" "}
            <span className="text-rose-500 font-extrabold">Ayush Kumar</span> a{" "}
            <span className="text-sky-400 font-extrabold">MERN</span> Stack
            Developer.
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl max-sm:text-base max-sm:text-center">
            I&apos;m a recent{" "}
            <span className="text-rose-500 font-semibold">
              B.Sc. (Hons.) Computer Science
            </span>{" "}
            graduate from
            <span className="text-sky-400 font-semibold">
              Dyal Singh College, Delhi University
            </span>
            , with strong programming skills in{" "}
            <span className="text-fuchsia-500 font-semibold">
              C++, JavaScript, Python, Machine Learning, and Data Science
            </span>
            . I have scored{" "}
            <span className="font-bold text-red-400">8.8 CGPA.</span>
          </p>
        </div>
      </div>
    </>
  );
}
