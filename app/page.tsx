import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

import banner from "../public/4856.webp";

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-[#22092C] to-[#739072] text-white h-screen">
      <div className="container mx-auto">
        {/* Navbar */}
        <nav className="flex justify-between items-center mx-auto py-5">
          <div>
            <h1>𝘴𝘱𝘰𝘵𝘪𝘧𝘺𝘬𝘶</h1>
          </div>
          <div>
            <ul className="gap-5 flex">
              <li className="border-r-2 p-2">
                <Link href={"/artist"}> Artist </Link>
              </li>
              <li className="border-r-2 p-2">
                <Link href={"/genre"}> Genre </Link>
              </li>
              <li className="border-r-2 p-2">
                <Link href={"/playlist"}> Playlist </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link href={"/register"}>
              <Button name="Login" />
            </Link>
          </div>
        </nav>

        {/* Banner */}
        <div className="grid grid-cols-2 mt-5">
          <div>
            <Image src={banner} alt="banner" className="rounded h-auto" />
          </div>
          <div className="flex justify-center items-center">
            <h1> play your music</h1> 
          </div>
        </div>

        <div className="find flex justify-center items-center">
          <div className="border bg-white outline ">
            <input type="text" />
          </div>
        </div>
      </div>
    </main>
  );
}
