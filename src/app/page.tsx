import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center mb-10 h-96 flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold mb-5">Full Stack Developer</h1>
        <h2 className="text-3xl mb-10">CANER AĞKAYA</h2>
        <Image src="/cat.webp" width="300" height="300" alt="cat" />
      </div>
    </main>
  );
}
