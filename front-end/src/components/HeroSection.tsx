import road from "../../public/images/road.png";

const HeroSection = () => {
  return (
    <section className="mt-[20px] flex justify-center lg:hidden">
      <div
        className="mx-6 h-[420px] w-[350px] rounded-lg bg-cover bg-center md:h-[700px] md:w-[600px]"
        style={{ backgroundImage: `url(${road.src})` }}
      >
        <p className="relative top-20 flex flex-col text-center text-5xl leading-normal md:top-32 md:text-8xl md:leading-relaxed">
          <b>روش مناسب</b>
          <b>رو خودت</b>
          <b>!انتخاب کن</b>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
