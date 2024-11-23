import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
export function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 flex w-full justify-center gap-4 bg-[#EAC6B5] p-6 text-3xl text-black">
        {/* <Link
          href="https://www.facebook.com/share/iMFqxRGCbBVw5X5b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImFacebook2 className="hover:text-[#444444]" />
        </Link> */}
        <Link
          href="https://www.instagram.com/oliviasbarnkpg?igsh=MWtkNDBoNDU3eGxoeg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="hover:text-[#444444]" />
        </Link>
        <Link href="tel:+46000000">
          <MdAddCall className="hover:text-[#444444]" />
        </Link>
        <Link href="mailto:info@oliviasbar.se">
          <MdMarkEmailUnread className="hover:text-[#444444]" />
        </Link>
      </div>
    </>
  );
}
