import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+678-439-6611</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <Link href={"/menu"} passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>
          {/* <Image src="/img/logo.png" alt="" width="160px" height="69px" /> */}
          {/* <Link href={"/event"} passHref >
            <li className={styles.listItem}>Events</li>
          </Link> */}
          <Link href={"/blog"} passHref>
            <li className={styles.listItem}>Blog</li>
          </Link>
          <Link href={"/contact"} passHref>
            <li className={styles.listItem}>Contact Us</li>
          </Link>
          <Link href={"/reviews"} passHref>
            <li className={styles.listItem}>Reviews</li>
          </Link>
        </ul>
      </div>

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <ul className={styles.list}>
            <Link href={"/signup"} passHref>
              <li className={styles.listItem}>Signup</li>
            </Link>
            <Link href={"/login"} passHref>
              <li className={styles.listItem}>login</li>
            </Link>
          </ul>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
