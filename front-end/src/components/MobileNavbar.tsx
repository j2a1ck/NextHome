import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <nav className="m-[17px] flex flex-row justify-between lg:hidden">
      <Link href={"/"}>
        <Image
          src={"/images/user.svg"}
          alt="user icon"
          width={31}
          height={31}
        />
      </Link>
      <Image
        className="md:w-[80px]"
        src={"/images/airplane.png"}
        alt="airplane"
        width={55}
        height={55}
        priority
      />
      <Link href={"/"}>
        <Image
          src={"/images/menu-burger.svg"}
          alt="burger menu"
          width={31}
          height={31}
        />
      </Link>
    </nav>
  );
}

export default MobileNavbar