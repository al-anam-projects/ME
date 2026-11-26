
"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import logo from "../../../../public/logo/logos/logo1.png";


export default function UserDesktopHeader() {

     const pathname = usePathname();

   const navLinks = [
        { id:1,name: "Home", href: "/user/home" },
        { id:2,name: "About", href: "/user/about" },
        { id:3,name: "Projects", href: "/user/projects" },
        { id:4,name: "Services", href: "/user/services" },
        { id:5,name: "Contact", href: "/user/contact" },
    ];


    return (
        <header className="
            w-full
            flex items-center justify-between
            pl-[50px] pr-[50px] 
            bg-[#120729]
        ">

            {/* Logo */}
            <div className="shrink-0">
                <Link href="/user/home">
                    <Image
                        src={logo}
                        width={200}
                        height={100}
                        alt="Website Logo"
                        priority
                        className="w-[200px] h-auto object-contain"
                    />
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="
                flex items-center
                gap-[40px]
                font-bold
                text-[15px]
            ">

                {navLinks.map((item) => {

                    const isActive = pathname == item.href;

                return(

                     
                    <Link
                        key={item.id}
                        href={item.href}
                        className={`
                            relative
                            w-fit
                            text-blue-200                            text-center
                            transition-colors
                            duration-300
                            hover:text-[#E09341]

                            after:content-['']
                            after:absolute
                            after:left-0
                            after:bottom-[-6px]
                            after:w-0
                            after:h-[2px]
                            after:bg-[#E09341]
                            after:transition-all
                            after:duration-700
                            after:ease-in-out

                           ${
                            isActive ? 
                            "after:w-[70px]":
                            "after:w-[0] hover:after:w-[80px]"
                           }


                            before:content-[' ']
                            before:block
                            before:w-[0]
                            before:h-[2px]
                            before:bg-orange-300
                            before:transition-all
                            before:duration-700
                            before:ease-in-out
                            
                          ${
                            isActive ?
                            "before:w-[70px]":
                            "before:w-[0] hover:before:w-[80px]"
                          }
                        
                           

                            text-center
                        `}
                    >
                        {item.name}
                    </Link>
                );

            }
        )
    }

           

                   
            

            </nav>



            {/* Request Quote Button */}
            <div className="shrink-0">

                <button
                    type="button"
                    onClick={() => alert("Request Quote")}
                    className="
                        w-[160px]
                        h-[48px]
                        flex items-center justify-center
                        rounded-full
                        border border-[#E09341]
                        bg-[#E09341]
                        text-[13px]
                        font-bold
                        text-white
                        cursor-pointer
                        whitespace-nowrap
                        transition-all
                        duration-300
                        ease-in-out
                        shadow-xl
                        hover:bg-white
                        hover:text-[#E09341]
                        hover:shadow-md
                    "
                >
                    Request Quote
                </button>

            </div>

        </header>
    );
}
