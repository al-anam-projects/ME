import UserDesktopHeader from "../components/user/Header/UserDesktopHeader";
import UserMobileHeader from "../components/user/Header/UserMobileHeader";

import type { ReactNode } from "react";

export default function UserLayout({
  children,
}: {
  children: ReactNode;
})  {
    return (
        <>
            <div className="hidden min-[769px]:block">
                <UserDesktopHeader />
            </div>

            <div className="block min-[769px]:hidden">
                <UserMobileHeader />
            </div>

            <main>
                {children}
            </main>
        </>
    );
}