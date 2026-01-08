import Image from "next/image";
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <div className="h-[200vh] bg-(--background_2)">
      <div className="bg-[url(/sebilj.jpeg)] bg-no-repeat bg-cover w-full h-[90vh]">
        <div className="bg-gray-800/50 w-full h-full absolute top-0"></div>

        <div className="relative z-10 top-[10%] left-[8%] w-fit p-5 rounded-3xl text-white text-[5rem] bg-linear-to-br from-white/30 to-black/50">
          <h1>Welcome,</h1>
          <h1>To <span className="text-green-400">JBOI</span> 2026.</h1>
        </div>
      </div>
    </div>
    </>
  );
}
