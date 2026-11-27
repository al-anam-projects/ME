import logo from "../../../../public/logo/logos/logo1.png"
import Image from "next/image"
import { Phone, Send } from "lucide-react";


export default function UserDesktopFooter(){

    return(

        <>

        <div className="
        fixed w-full h-[70px] bottom-0
        bg-[#16093D] rounded-tl-[50px] rounded-tr-[50px]
        cursor-pointer
        flex justify-between items-center
        ">

            {/* --------------- left side ---------------- */}

            <div>

                <Image src={logo} alt="logo"  
                className="
                w-[180px] h-[90px] pl-[70px]
                "
                />


            </div>


            {/* ---------------- middle side ------------ */}
            <div className="
            flex items-center gap-[20px]
            ">

                <p className="
                text-white font-[600]
                ">Quality </p>
                <p className="
                text-white font-[600]
                ">*</p>
                <p className="
                text-white font-[600]
                ">Innovation</p>
                <p className="
                text-white font-[600]
                ">*</p>
                <p className="
                text-white font-[600]
                ">Reliability</p>
              


            </div>


            {/* ----------- right side ------------------- */}

            <div className="
            mr-[60px]
            ">


                <div className="flex gap-[20px]">

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



            </div>


        </div>
        
        </>
    );
}