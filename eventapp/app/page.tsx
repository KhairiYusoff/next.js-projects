import { Button } from "@/components/ui/button";
import Image from "next/image";
import AKU from "../public/assets/images/hero.png";

export default function Home() {
  return (
    <>
      <header className="p-6 bg-green-400 justify-between items-center flex">
        <a href="">TEST</a>
        <a href="">TEST</a>
        <a href="">TEST</a>
        <a href="">TEST</a>
        <a href="">TEST</a>
        <Button>Login</Button>
      </header>
      <div className="p-6 flex justify-center items-center">
        <Image src={AKU} alt="" />
      </div>
    </>
  );
}
