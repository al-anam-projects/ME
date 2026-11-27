
"use client";

import Image from "next/image";
import Link from "next/link";

import {
    House,
    Info,
    FolderKanban,
    BriefcaseBusiness,
    Phone,
    Mail,
    Copyright,
    MapPin,
    ArrowRight,
    ChevronRight,
} from "lucide-react";
import { Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";

import logo from "../../../../public/logo/logos/logo1.png";
import { useState } from "react";
import path from "path";


export default function UserMobileHomePage() {

     const pathname = usePathname();

     const navLinks = [
        {
            id: 1,
            name: "Home",
            href: "/user/home",
            icon: House,
            description: "Welcome to our website",
        },
        {
            id: 2,
            name: "About",
            href: "/user/about",
            icon: Info,
            description: "Know more about us",
        },
        {
            id: 3,
            name: "Projects",
            href: "/user/projects",
            icon: FolderKanban,
            description: "Explore our work",
        },
        {
            id: 4,
            name: "Services",
            href: "/user/services",
            icon: BriefcaseBusiness,
            description: "What we offer",
        },
        {
            id: 5,
            name: "Contact",
            href: "/user/contact",
            icon: Phone,
            description: "Get in touch with us",
        },
    ];

    const [menu,setmenu] = useState(false);

    return (
      <header className="
      
      ">

{/* ---------------------- top header -------------------- */}

        <div className="flex items-center justify-between
        px-[30px]  bg-[#120729] relative h-[100px]
        ">

           

            <Menu color="white" size={40} 
            onClick={()=>setmenu(true)}
            className="
              border
              rounded-[5px]
              p-[5px]
              border-orange-400
              cursor-pointer
            "
            />

             <Image 

            src={logo}
            priority
            alt="logo"
             className="w-[200px] h-auto"

            />

        </div>

        {/* --------------- menu items ------------------- */}
        
        <div className={`
        fixed
        top-0
        left-0
        w-full
        h-screen
        z-[100]
        bg-[#190C38]
        rounded-tr-[20px]
       

        ${ menu ? "translate-x-0 opacity-100 visible":
            "translate-x-full opacity-0 invisible"
        }
        
        `}>

            {/* ---------------- top bar -------------- */}

           <div className="
            flex  justify-between items-center
             mr-[20px]
          
           
            ">
                 <Image 

            src={logo}
            priority
            alt="logo"
             className="w-[230px] h-auto "

            />

            <div className={
                `
                
                text-[20px] bg-white/10 rounded-full p-[10px]
                `
            }>

                 <X 
            onClick={()=>setmenu(false)}
            color="white"
            size={25}
            
            
            />
            </div>


           </div>


           {/* ----------------- bottom bar ---------------------- */}

           <div>

             {/* ------------ top conetent ---------------- */}
            <h2 className={
                `
                text-white font-[700] text-[20px] pl-[20px]
                `
            }>
                Explore Our Website
            </h2>
            <p  className={
                `
                text-gray-500 font-[700] text-[10px] pl-[20px]
                `
            }>
                Discover more about our Bussiness
            </p>

            {/* -------------- middle  content ---------------- */}
            
            <nav className=" mt-[20px] ml-[25px] relative ">
                {
                    navLinks.map((item)=>{

                        const Icon = item.icon
                        const isActive = pathname === item.href

                        return(

                             <Link
        key={item.id}
        href={item.href}
        onClick={() => setmenu(false)}
       className={`
    relative flex gap-[20px] w-[calc(100%-32px)]
    rounded-[10px] p-[10px] mt-[10px] items-center
    ${
        isActive
            ? "border border-orange-600 bg-white/15 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[35px] before:bg-orange-500 before:rounded-full"
            : "border border-white/10"
    }
`}
    >
                            
                            {/* --------- LEFT ------------ */}
                            <div className={
                                `
                                flex items-center justify-center rounded-[10px] w-[50px] h-[50px]

                                ${isActive ? " bg-orange-500":
                                    " bg-white/10  "
                                }
                                
                                `
                            }>
                                <Icon className="
                                text-blue-200
                                " />
                            </div>

                        {/* ------------------- MIDDLE --------------- */}
                            <div>

                                <p className={

                                    `
                                    font-[700]
                                    ${isActive ?"text-orange-300 font":
                                        "text-blue-200"
                                    }`
                                }>
                                    {item.name}
                                    </p>
                                
                                <p className={
                                    `
                                    text-gray-500 text-[12px] font-[500]
                                    `
                                }>
                                    {item.description}
                                    </p>

                            </div>

                         {/* ------------------ RIGHT ---------------------- */}

                         <div className={
                            `
                            absolute right-5
                            ${isActive ?"text-orange-500":
                                "text-gray-600"
                            }
                            `                    
                             }>

                            <ChevronRight />
                         </div>

                     
                            
                            
                            
                            </Link>
                        );
                    })
                }
            </nav>


           </div>

           {/* ---------- requsett quote ------------- */}
           

            <Link href={"/user/quote"} className="
             mt-[20px] border border-orange-500 w-[calc(100%-50px)] h-[60px] text-center
           flex items-center justify-center  rounded-[15px] bg-orange-400
           font-[700] mx-6 shadow-xxl
            text-white
            ">
            
            Request A Quote
            
            </Link>
           

           {/* -------- contact --------------------- */}

           <div className="">
               
               <Link href={"user/"}  
               className="
               flex items-center ml-[30px] mt-[20px] gap-[10px]
               ">
               <Mail className="text-orange-300" size={15}/>
               <p className="text-gray-500 font-[700] text-[10px] " >Contact Us</p>
               
               </Link>

               <Link href={"user/"}  
               className="
               flex items-center ml-[30px] mt-[10px] gap-[10px]
               ">
               <MapPin className="text-orange-300 " size={15}/>
               <p className="text-gray-500 font-[700] text-[10px] " >Mano Engineering</p>
               
               </Link>

           </div>


           {/* --------------- copy rights ---------------- */}
           
           <div className="flex items-center justify-center">

            <p className="text-gray-500 text-[10px]  absolute bottom-[35px]">

            © 2026 Mano Engineering. All rights reserved.
           </p>
           </div>

        
            
        </div>
       





      </header>
    );
}
