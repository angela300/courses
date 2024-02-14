"use client";
import Image from "next/image";

const isMobile = window.innerWidth <= 768;


export default function Uppersection() {
  return (
    <div>
      {isMobile ? (
        <div className="relative" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", fontSize: "27px", marginBottom: "200px"}}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Image
              src="/images/wom.jpg"
              width={800}
              height={400}
              alt="Picture of the author"
            />
          </div>
          <div className="absolute w-full">
            <h4 className="font-bold" style={{ width: "250px", marginBottom: "5px" }}>
              <span style={{ backgroundColor: "white" }}>For every student, every classroom. Real results</span>
            </h4>
            <p style={{ width: "400px", paddingTop: "6px", paddingBottom: "5px", marginBottom: "10px" }}>
              <span style={{ backgroundColor: "white" }}> We are a non-profit with a mission to provide a free, world-class education for anyone, anywhere. </span>
            </p>

            <button className="w-full" style={{ backgroundColor: "#0066b2", padding: "15px", paddingLeft: "5px", paddingRight: "5px", borderRadius: "3px", marginTop: "10px", color: "white", marginBottom: "20px" }}>Start here</button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "35px", gap:"35px" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <Image
              src="/images/wom.jpg"
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
          <div>
            <h4 className="font-bold" style={{ width: "250px", marginBottom: "5px" }}>
              <span style={{ backgroundColor: "white", color: "black" }}>For every student, every classroom. Real results</span>
            </h4>
            <p style={{ width: "400px", paddingTop: "6px", paddingBottom: "5px", marginBottom: "5px" }}>
              <span style={{ backgroundColor: "white", color: "black" }}>We are a non-profit with a mission to provide a free, world-class education for anyone, anywhere.</span>
            </p>

            <button style={{ backgroundColor: "#0066b2", padding: "3px", paddingLeft: "5px", paddingRight: "5px", borderRadius: "3px", marginTop: "10px", color: "white" }}>Start here</button>
          </div>
        </div>
      )}
    </div>
  );
}
