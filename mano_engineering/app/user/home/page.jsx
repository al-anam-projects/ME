"use client"

import UserMobileHomePage from "../../components/user/Homepage/UserMobileHomePage";
import UserDesktopHomePage from "../../components/user/Homepage/UserDesktopHomePage"


export default function HomePage() {
    return (
        <div>


            {/* ---------------------- mobile view ---------------- */}

            <div className="block min-[768px]:hidden">
                <UserMobileHomePage />
            </div>














            {/* --------------- desktopView ------------------------ */}

            <div className="hidden min-[768px]:block">
                <UserDesktopHomePage />
            </div>            

            
        </div>
    );
}