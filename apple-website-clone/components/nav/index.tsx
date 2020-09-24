import Link from "next/link";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <img src="/apple.svg" width={20} height={20} />
            </Link>
          </li>
          <li>
            <Link href="/mac">Mac</Link>
          </li>
          <li>
            <Link href="/iphone">Iphone</Link>
          </li>
          <li>
            <Link href="/Ipad">Ipad</Link>
          </li>
          <li>
            <Link href="/Watch">Watch</Link>
          </li>
          <li>
            <Link href="/Watch">TV</Link>
          </li>
          <li>
            <Link href="/Watch">Music</Link>
          </li>
          <li>
            <Link href="/Watch">Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
