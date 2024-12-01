import Image from "next/image";
const ConsultSection = () => {
  return (
    <section>
      <div className="lg:mb-[70px] lg:flex lg:justify-between">
        <div className="mx-auto mt-[20px] flex w-[350px] flex-col justify-center text-center md:mt-[35px] md:w-[600px] lg:mx-[70px] lg:mt-[82px] lg:w-auto">
          <h1 className="text-lg font-bold md:text-xl lg:flex lg:justify-end lg:text-3xl">
            مشاوره تخصوصی مهاجرت
          </h1>
          <div className="flex w-full justify-end">
            <p className="mt-[10px] flex text-sm md:mt-[20px] md:text-end md:text-base lg:mt-[40px] lg:h-[100px] lg:w-[480px] lg:items-center lg:text-end lg:leading-7">
              اگر در مسیر مهاجرت سردرگم هستی، موسسه ما با مشاوره تخصصی در تمام
              مراحل، از انتخاب مقصد تا تکمیل مدارک، همراهت خواهد بود. ما این
              مسیر را برایت ساده و هموار می‌کنیم تا با اطمینان آینده بهتری بسازی
            </p>
          </div>
          <div className="flex justify-center lg:flex lg:justify-end">
            <button className="mt-[20px] flex h-[35px] w-[187px] items-center justify-center rounded-xl bg-[#71E5F6] md:mt-[30px] md:h-[45px] md:w-[240px] lg:mx-auto lg:h-[60px] lg:w-[300px]">
              <span className="lg:font-bold">
                {" "}
                دریافت مشاوره
                <span className="hidden lg:inline"> تخصوصی</span>
              </span>
            </button>
          </div>
        </div>
        <div className="mx-auto lg:mx-[70px] mt-[15px] flex w-[300px] justify-center bg-center md:mt-[30px] md:w-[400px] lg:-order-last">
          <Image
            src="/images/travel.webp"
            alt="3d of airplane"
            width={441}
            height={310}
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultSection;
