import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 turret-font items-center justify-center gap-4 w-full h-full">
        <div className="flex flex-col gap-5 items-center mx-4 p-2 justify-center">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5635AQEHkvzsMcNvyQ/profile-framedphoto-shrink_400_400/B56ZXzuLTTGsAc-/0/1743550723647?e=1749376800&v=beta&t=y8yrRgnMeZoh8iLl1IrosSQp8rycwtv7LbZbFsXjWiw"
            alt={"Ayush Kumar"}
            width={400}
            height={400}
            className="rounded-lg shadow-[1px_1px_10px] hover:-translate-y-2 duration-200 transition-all shadow-rose-500 grayscale hover:grayscale-0"
          />
        </div>
        <div className="flex flex-col group w-fit h-fit rounded-xl hover:shadow-[1px_1px_10px] shadow-white text-white turret-font items-center justify-center px-8 py-12 mx-4">
          <div className="group-hover:-translate-y-2  p-4  duration-150 transition-all">
            <h1 className="text-4xl group-hover:scale-110 duration-150 transition-all mb-6 max-sm:text-2xl max-sm:text-center">
              Hi, I&apos;m{" "}
              <span className="text-rose-500 group-hover:font-extrabold group-hover:underline">
                Ayush Kumar
              </span>{" "}
              a{" "}
              <span className="text-sky-400 group-hover:font-extrabold group-hover:underline">
                MERN
              </span>{" "}
              Stack Developer.
            </h1>
            <p className="text-xl leading-relaxed duration-150 transition-all max-w-2xl max-sm:text-base max-sm:text-center">
              I&apos;m a recent{" "}
              <span className="text-rose-500">
                B.Sc. (Hons.) Computer Science
              </span>{" "}
              graduate from{" "}
              <span className="text-sky-400">
                Dyal Singh College, Delhi University
              </span>
              , with strong programming skills in{" "}
              <span className="text-fuchsia-500 group-hover:underline group-hover:font-extrabold">
                C++, JavaScript, Python, Machine Learning, and Data Science
              </span>
              . I have scored <span className=" text-red-400">8.8 CGPA.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
