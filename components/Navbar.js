import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </nav>
  );
};

export default Navbar;
