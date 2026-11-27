
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Banner from "../../../../public/background/back.png"

import Image from "next/image"
import Link from "next/link"

import pipes from "../../../../public/icons/pipe.png"
import tank from "../../../../public/icons/tank.png"
import structure from "../../../../public/icons/structure.png"
import industry from "../../../../public/icons/industry.png"

import image1 from "../../../../public/sample images/home_image/image1.png"
import image2 from "../../../../public/sample images/home_image/image2.png"
import image3 from "../../../../public/sample images/home_image/image3.png"
import image4 from "../../../../public/sample images/home_image/image4.png"

import { useState } from "react";

export default function UserMobileHomePage(){

    //------------ projects button function -----------------------

    const images = [image1,image2,image3,image4];

    const [currentimage,setCurrentimage] = useState(0);

    const nextimage = ()=>{

        setCurrentimage((prev)=>(prev+1) % images.length)
    }

    const previmage = ()=>{

        setCurrentimage((prev)=>(prev-1+images.length) % images.length)
    }


    return(
        <>

        <div className="relative">

            <Image  src={Banner} alt="banenr"
            className="
            h-[240px]

            "/>

{/* ------------------------- head ------------------ */}
            <div>

                <p className="
                absolute top-[10] left-[20]
                text-white/80 font-[700] text-[35px]
                ">
                    Engineering
                    </p>

      {/* -------------------- sub head ----------------- */}
                    <p className="
                absolute top-[55] left-[20]
                text-orange-300 font-[700] text-[25px]
                ">
                     Stronger Tommorow
                    </p>

        {/* ----------------- sub head 2----------------- */}

                    <p className="
                absolute top-[110] left-[20]
                text-white font-[700] text-[15px]
                ">
                    Industrial Fabrication & <br/>
                    Mechanical Works
                    </p>

            {/* ------------- explore button ----------- */}

            <Link href={"/user/projects"}
            className="
            absolute top-[170] left-[20]
            flex gap-[5px] border border-orange-400 rounded-[10px] items-center
            w-[150px] p-[10px]
            bg-orange-400 text-[12px] font-[700]
            shadow-[inset_10px_12px_20px_rgba(0,0,0,0.15)]
            "
            >

             <p> Explore our works</p>
             <ArrowRight size={15}/>

            </Link>

            </div>


            {/* ----------------- cards ------------------------- */}

            <div className="
                grid grid-cols-2 items-center
                rounded-[10px]
                bg-gradient-to-br from-white via-gray-100 to-slate-200
                mx-[20px]
                min-[400px]:h-[190px] min-[400px]:mx-[40px]
                shadow-lg
                relative mt-[-15px] p-[10px]
            ">

                {/* ------------ left column -------------------- */}

                <div className="
                    flex flex-col items-center gap-[10px]
                    border-r-2 border-gray-300
                    pr-[5px]
                ">

                    <div className="
                        w-full flex flex-col items-center
                    ">
                        <Image src={pipes} alt="pipes" height={100} width={100}/>

                        <p className="
                            font-[700] text-[10px] text-center
                        ">
                            Pipline Fabrication
                        </p>
                    </div>

                    <hr className="w-full border-gray-300"/>

                    <div className="
                        w-full flex flex-col items-center
                    ">
                        <Image src={tank} alt="tank" height={100} width={100}/>

                        <p className="
                            font-[700] text-[10px] text-center
                        ">
                            Tank Fabrication
                        </p>
                    </div>

                </div>


                {/* ------------ right column -------------------- */}

                <div className="
                    flex flex-col items-center gap-[10px]
                    pl-[5px] realtive mt-[-15px]
                ">

                    <div className="
                        w-full flex flex-col items-center
                    ">
                        <Image src={structure} alt="structure" height={100} width={100}/>

                        <p className="
                            font-[700] text-[10px] text-center
                        ">
                            Structural Fabrication
                        </p>
                    </div>

                    <hr className="w-full border-gray-300"/>

                    <div className="
                        w-full flex flex-col items-center
                    ">
                        <Image src={industry} alt="industry" height={100} width={100}/>

                        <p className="
                            font-[700] text-[10px] text-center
                        ">
                            Industrial Fabrication
                        </p>
                    </div>

                </div>

            </div>


             {/* ---------------------- our projects ------------------------- */}

             <div className=" flex items-center justify-between" >

                <p
                className="
                relative
                text-blue-900 font-[800] mx-[15px] my-[20px]
                 pl-[90px]
    before:content-['']
    before:absolute
    before:w-[80px]
    before:h-[4px]
    before:bg-orange-400
    before:left-0
    before:top-1/2
    before:-translate-y-1/2
    before:rounded-full


                "
                >

                    Our Projects
                </p>

 {/* --------------------------- right left button -------------------------- */}
                <div
                 className=" flex items-center justify-between

                 gap-[10px]  relative mx-[15px] my-[20px] "
                >
                    <ChevronLeft  className="
                    border border-gray-200 rounded-full p-[2px]
                    bg-gray-100 text-blue-900
                    "
                    onClick={previmage}
                    size={30}
                    />
                    <ChevronRight
                     className="
                    border border-gray-200 rounded-full p-[2px]
                    bg-gray-100 text-blue-900
                    "
                    size={30}
                    onClick={nextimage}
                    />
                </div>


             </div>

    {/* ------------------- image cont ---------------------------- */}

    <div className="

    ">

        <Image src={images[currentimage]}  alt="project images"
        className="
        w-[calc(100%-32px)] h-[180px] min-[400px]:h-[230px]
        rounded-[10px] mx-[15px]
        object-cover

        "
        />

    </div>

{/* ------------------- end ---------------------------- */}

            </div>

        </>
    );
}
