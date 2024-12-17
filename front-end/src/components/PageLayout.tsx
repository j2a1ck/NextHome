import DesktopNavbar from "@/components/DesktopNavbar";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import Image from "next/image";

interface LayoutProp {
  title?: string;
  image?: string;
  children: React.ReactNode;
}

const Layout = ({ title, children, image }: LayoutProp) => {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>
      <div>
        <MobileNavbar />
      </div>
      <section className="lg:mx-auto lg:mt-[70px] lg:w-[1000px]">
        {image && (
          <Image
            className="mx-auto rounded-3xl md:w-[500px] lg:w-[900px]"
            src={image}
            width={350}
            height={350}
            alt="Work related illustration"
            priority
          />
        )}

        <h1 className="m-10 text-right text-4xl font-bold">{title}</h1>
        <article className="mx-5 space-y-6 text-right leading-7">{children}</article>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
