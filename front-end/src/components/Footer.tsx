import Image from "next/image";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mx-[180px] mt-10 flex h-[245px] justify-center text-right">
      <div className="">
        <div className="flex flex-col lg:flex-row">
          <ul className="order-last my-10 mx-10 flex items-center flex-col gap-2 lg:order-first">
            <li className="mb-3 text-lg font-semibold">با ما همراه باشید</li>
            <div className="flex flex-row justify-end space-x-3">
              <BiLogoInstagramAlt className="h-8 w-8" />
              <FaTelegram className="h-8 w-6" />
              <FaSquareXTwitter className="h-8 w-6" />
              <FaYoutube className="h-8 w-8" />
            </div>
          </ul>
          <ul className="mx-16 flex my-8 flex-col gap-2">
            <li className="mb-3 text-lg font-semibold">تماس با ما</li>
            <li className="w-64">آدرس: تهران میدان آزادی خیابان استقلال</li>
            <li>شماره تماس: 23 999 623</li>
          </ul>

          <ul className="mx-16 flex my-8 flex-col gap-2">
            <li className="mb-3 text-lg font-semibold">خدمات</li>
            <li><Link href="/immigration">مهاجرت</Link></li>
            <li><Link href="/#consult">مشاوره</Link></li>
            <li><Link href="/post/lottery">لاتاری</Link></li>
          </ul>

          <ul className="mx-16 lg:mx-24 my-8 flex flex-col gap-2">
            <li className="mb-3 text-lg font-semibold">مقاله</li>
            <li><Link href="/post/education">تحصیلی</Link></li>
            <li><Link href="/post/work">کاری</Link></li>
            <li><Link href="/post/invest">سرمایه گذاری</Link></li>
            <li><Link href="/post/family">خانوادگی</Link></li>
            <li><Link href="/post/refugee">پناهندگی</Link></li>
          </ul>

          <Image
            src={"/images/airplane.png"}
            alt="user icon"
            width={110}
            height={50}
            className="order-first mx-auto lg:m-auto h-[100px] w-[100px] lg:order-last"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
