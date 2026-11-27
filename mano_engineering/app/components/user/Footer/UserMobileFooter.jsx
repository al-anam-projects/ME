import { Phone, Send } from "lucide-react";

export default function UserMobileFooter() {

    return (
        <div className="
            fixed bottom-[20px] right-[20px]
            z-50
            flex items-center gap-[15px]
        ">

            {/* Call Us */}

            <a
                href="tel:+919790051137"
                aria-label="Call Us"
                className="
                    flex items-center justify-center
                    w-[55px] h-[55px]
                    rounded-full
                    text-white bg-orange-400
                    shadow-xl
                    active:scale-90 transition-all
                "
            >
                <Phone size={23} />
            </a>

            {/* WhatsApp */}

            <a
                href="https://wa.me/919790051137?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                    flex items-center justify-center
                    w-[55px] h-[55px]
                    rounded-full
                    text-white bg-green-500
                    shadow-xl
                    active:scale-90 transition-all
                "
            >
                <Send size={23} />
            </a>

        </div>
    );
}