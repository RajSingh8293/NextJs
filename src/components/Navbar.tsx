import Link from 'next/link';

import { useState } from 'react';

const Navbar = () => {

  const [active, setActive] = useState(false)
  return (
    <div><nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/about">About</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/contact">Contact</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/login">Login</Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/login">Login</Link>
      </li>
    </ul>
  </nav>

  </div>
  )
}

export default Navbar


