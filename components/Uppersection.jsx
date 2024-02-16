import Image from "next/image";
import styles from "../styles/uppersection.module.css";

export default async function Uppersection() {
  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <Image
          src="/images/wom.jpg"
          alt="Picture of the author"
          className="image"
          width ={800}
          height= {800}
        />
      </div>
      <div className={styles.divcover}>
        <h4 className={styles.h41}>
          <span className={styles.span1}>For every student, every classroom. Real results</span>
        </h4>
        <p className={styles.p1}>
          <span>We are a non-profit with a mission to provide a free, world-class education for anyone, anywhere.</span>
        </p>

        <button className={styles.button1}>Start here</button>
      </div>
    </div>
  );
}
