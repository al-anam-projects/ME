
"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import Banner from "../../../../public/background/back.png";

import Image from "next/image";
import Link from "next/link";

import pipes from "../../../../public/icons/pipe.png";
import tank from "../../../../public/icons/tank.png";
import structure from "../../../../public/icons/structure.png";
import industry from "../../../../public/icons/industry.png";

import image1 from "../../../../public/sample images/home_image/image1.png";
import image3 from "../../../../public/sample images/home_image/image3.png";
import image4 from "../../../../public/sample images/home_image/image4.png";
import image5 from "../../../../public/sample images/home_image/image5.png";

import { useState } from "react";

export default function UserDesktopHomePage() {

    // ---------------- projects images ----------------

    const images = [image1, image5, image3, image4];

    // Current image order
    const [currentimage, setCurrentimage] = useState(0);

    // Selected image
    const [selectedImage, setSelectedImage] = useState(0);


    // ---------------- next image ----------------

    const nextimage = () => {

        const next = (currentimage + 1) % images.length;

        setCurrentimage(next);
        setSelectedImage(next);

    };


    // ---------------- previous image ----------------

    const previmage = () => {

        const prev = (currentimage - 1 + images.length) % images.length;

        setCurrentimage(prev);
        setSelectedImage(prev);

    };


    return (

        <>

            <div className="relative mx-[150px] bg-white/90">

                {/* ------------------------- banner ------------------ */}

                <Image
                    src={Banner}
                    alt="banner"
                    className="h-[400px] w-full object-cover"
                />


                {/* ------------------------- heading ------------------ */}

                <div>

                    <p className="
                        absolute top-[5px] left-[100px]
                        text-white/80 font-[700] text-[75px]
                    ">
                        Engineering
                    </p>


                    {/* -------------------- sub heading ----------------- */}

                    <p className="
                        absolute top-[95px] left-[100px]
                        text-orange-300 font-[700] text-[35px]
                    ">
                        Stronger Tomorrow
                    </p>


                    {/* ----------------- sub heading 2 ----------------- */}

                    <p className="
                        absolute top-[170px] left-[100px]
                        text-white font-[700] text-[25px]
                    ">
                        Industrial Fabrication & <br />
                        Mechanical Works
                    </p>


                    {/* ------------- explore button ----------- */}

                    <Link
                        href={"/user/projects"}
                        className="
                            absolute top-[270px] left-[100px]
                            flex gap-[5px] border border-orange-400
                            rounded-[10px] items-center
                            w-[190px] p-[10px]
                            bg-orange-400 text-[16px] font-[700]
                            shadow-[inset_10px_12px_20px_rgba(0,0,0,0.15)]
                        "
                    >

                        <p>Explore our works</p>

                        <ArrowRight size={15} />

                    </Link>

                </div>



                {/* ----------------- fabrication cards ------------------------- */}

                <div className="
                    flex justify-between items-center
                    rounded-[10px]
                    bg-gray-100
                    w-[1100px] mx-[250px]
                    shadow-lg
                    relative mt-[-25px] p-[10px]
                ">


                    {/* Pipeline */}

                    <div className="w-[300px] flex flex-col items-center">

                        <Image
                            src={pipes}
                            alt="pipes"
                            height={100}
                            width={100}
                        />

                        <p className="font-[700] text-[15px] text-center">
                            Pipeline Fabrication
                        </p>

                    </div>



                    {/* Tank */}

                    <div className="w-[300px] flex flex-col items-center">

                        <Image
                            src={tank}
                            alt="tank"
                            height={100}
                            width={100}
                        />

                        <p className="font-[700] text-[15px] text-center">
                            Tank Fabrication
                        </p>

                    </div>



                    {/* Structure */}

                    <div className="
                        w-[300px] flex flex-col items-center justify-center
                    ">

                        <Image
                            src={structure}
                            alt="structure"
                            height={100}
                            width={100}
                        />

                        <p className="font-[700] text-[15px] text-center">
                            Structural Fabrication
                        </p>

                    </div>



                    {/* Industry */}

                    <div className="w-[300px] flex flex-col items-center">

                        <Image
                            src={industry}
                            alt="industry"
                            height={100}
                            width={100}
                        />

                        <p className="font-[700] text-[15px] text-center">
                            Industrial Fabrication
                        </p>

                    </div>

                </div>



                {/* ---------------------- our projects heading ------------------------- */}

                <div className="flex items-center justify-between">

                    <p className="
                        relative
                        text-[30px]
                        text-blue-900 font-[800]
                        mx-[15px] my-[20px]
                        pl-[130px]
                        before:content-['']
                        before:absolute
                        before:w-[120px]
                        before:h-[4px]
                        before:bg-orange-400
                        before:left-0
                        before:top-1/2
                        before:-translate-y-1/2
                        before:rounded-full
                    ">
                        Our Projects
                    </p>



                    {/* --------------------------- view all button -------------------------- */}

                    <div className="
                        flex items-center justify-between
                        gap-[10px] relative mx-[15px] my-[20px]
                    ">

                        <Link
                            href={"/user/projects"}
                            className="
                                flex gap-[5px] font-[700]
                                text-blue-900 cursor-pointer
                            "
                        >

                            <p>View all</p>

                            <ArrowRight />

                        </Link>

                    </div>

                </div>



                {/* ------------------- project image slider ---------------------------- */}

                <div className="
                    flex items-center gap-[15px]
                    px-[15px] pb-[30px]
                ">


                    {/* ---------------- Previous button ---------------- */}

                    <button
                        onClick={previmage}
                        className="
                            bg-blue-900 text-white
                            p-[8px] rounded-full
                            hover:bg-orange-400
                            transition duration-300
                            shrink-0
                        "
                    >

                        <ChevronLeft size={25} />

                    </button>



                    {/* ---------------- Images container ---------------- */}

                    
<div className="
    flex items-center gap-[15px]
    flex-1 overflow-visible
    py-[20px]
">

    {images.map((item, index) => {

        const imageIndex =
            (currentimage + index) % images.length;

        const isSelected =
            selectedImage === imageIndex;

        return (

            <div
                key={imageIndex}
                onClick={() => setSelectedImage(imageIndex)}
                className={`
                    relative cursor-pointer
                    rounded-[10px]
                    overflow-hidden
                    transition-all duration-500 ease-in-out

                    ${isSelected
                        ? "flex-[2] h-[240px] z-20"
                        : "flex-1 h-[130px] z-0"
                    }
                `}
            >

                <Image
                    src={images[imageIndex]}
                    alt={`Project ${imageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 400px"
                    className={`
                        object-cover
                        transition-transform duration-500 ease-in-out

                        ${isSelected
                            ? "scale-x-155 scale-y-150"
                            : "scale-100"
                        }
                    `}
                />

            </div>

        );

    })}

</div>




                    {/* ---------------- Next button ---------------- */}

                    <button
                        onClick={nextimage}
                        className="
                            bg-blue-900 text-white
                            p-[8px] rounded-full
                            hover:bg-orange-400
                            transition duration-300
                            shrink-0
                        "
                    >

                        <ChevronRight size={25} />

                    </button>

                </div>


                {/* ------------------- end ---------------------------- */}

            </div>

        </>

    );

}
