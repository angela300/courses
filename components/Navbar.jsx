"use client"
import Link from "next/link";
import { RiSearchLine } from 'react-icons/ri';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";

const isMobile = window.innerWidth <= 768;

export default function Navbar() {
  return (
    <div>
      {isMobile ? (
        <nav className="flex justify-between items-center px-2 pb-2 border-b-2 border-gray bg-gray-100">
          <div style={{ fontFamily: "bold", fontSize: "20px", padding: "10px", borderRadius: "5px", backgroundColor: "white" }}>Logo Here</div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <RiSearchLine style={{ color: "#0066b2", width: "30px", height: "30px" }} />
            <MdMenu style={{ color: "#0066b2", width: "30px", height: "30px" }} />
          </div>
        </nav>
      ) : (
        <nav className="flex justify-between items-center px-4 border-y-2 border-gray">
          <button className="flex items-center justify-between">
            <span className="ml-2" style={{ color: "#0066b2" }}>Courses</span>
            <AiOutlineCaretDown className="h-8" />
          </button>
          <form className="flex flex-col gap-3 items-center" style={{ fontSize: "11px" }}>
            <div className="relative flex items-center bg-gray-100 px-4 py-2 rounded">
              <input type="text" placeholder="Search" className="bg-gray-100" />
              <RiSearchLine className="mr-2 text-gray-500" />
            </div>
          </form>
          <p>Logo Here</p>
          <Link className="bg-white p-2" href={"/addTopic"} style={{ display: "flex", flexDirection: "row", gap: "5px", alignItems: "center", color: "#0066b2" }}>
            <span>Donate</span>
            <BsBoxArrowUpRight />
          </Link>
          <Link className="bg-white p-2" href={"/addTopic"} style={{ color: "#0066b2" }}>
            Login
          </Link>
          <Link className="bg-white p-2" href={"/addTopic"} style={{ color: "#0066b2" }}>
            Sign up
          </Link>
        </nav>
      )}
    </div>
  );
}
