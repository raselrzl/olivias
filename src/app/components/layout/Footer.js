import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { IoCall } from "react-icons/io5";
export function Footer() {
    return (
        <>
            <div className="fixed bottom-0 left-0 w-full flex gap-4 p-6 justify-center bg-black">
                <a href="https://www.facebook.com/share/iMFqxRGCbBVw5X5b/" target="_blank" rel="noopener noreferrer">
                    <ImFacebook2 className="text-amber-100 text-3xl" />
                </a>
                <a href="https://www.instagram.com/restaurangjays?igsh=MWpodmgyNnJrZm11bw==" target="_blank" rel="noopener noreferrer">
                    <ImInstagram className="text-amber-100 text-3xl" />
                </a>
                <a href="tel:+46734438696">
                    <IoCall className="text-amber-100 text-3xl" />
                </a>
            </div>

        </>
    );
}