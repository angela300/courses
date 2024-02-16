import Link from "next/link";
import { RiSearchLine } from 'react-icons/ri';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav1}>
        <button className={styles.button1}>
          <span className={styles.span1}>Courses</span>
          <AiOutlineCaretDown className="h-8" />
        </button>
        <form className={styles.form1}>
          <div className={styles.div1}>
            <input type="text" placeholder="Search" className={styles.input1} />
            <RiSearchLine className={styles.line1} />
          </div>
        </form>
        <p>Logo Here</p>
        <Link className={styles.link1} href={"/"}>
          <span>Donate</span>
          <BsBoxArrowUpRight />
        </Link>
        <Link className={styles.link2} href={"/"}>
          Login
        </Link>
        <Link className={styles.link3} href={"/"}>
          Sign up
        </Link>
      </nav>

      <nav className={styles.nav1_mobile}>
        <div style={{ fontFamily: "bold", fontSize: "25px", padding: "10px", borderRadius: "5px", backgroundColor: "white" }}>Logo Here</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <RiSearchLine style={{ color: "#0066b2", width: "40px", height: "40px" }} />
          <MdMenu style={{ color: "#0066b2", width: "40px", height: "40px" }} />
        </div>
      </nav>
    </div>
  );
}
