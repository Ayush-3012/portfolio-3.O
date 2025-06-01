import Link from "next/link";

export default function Index() {
  return (
    <div className="w-full h-full turret-font flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl tracking-wide font-extrabold leading-tight bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Hi, I&apos;m Ayush Kumar
      </h1>
      <p className="mb-6 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        MERN Stack Developer | C++ | DSA | Python | Full Stack Wizard
      </p>
      <Link
        href={"/home"}
        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition"
      >
        Enter Portfolio
      </Link>
    </div>
  );
}
