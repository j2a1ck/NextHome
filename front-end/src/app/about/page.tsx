import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";

const page = () => {
  return (
    <header>
      <nav className="hidden lg:block">
        <DesktopNavbar />
      </nav>
      <nav>
        <MobileNavbar />
      </nav>
    </header>
  );
};

export default page;
