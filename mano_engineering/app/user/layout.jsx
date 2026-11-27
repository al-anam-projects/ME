import UserDesktopHeader from "../components/user/Header/UserDesktopHeader";
import UserMobileHeader from "../components/user/Header/UserMobileHeader";
import UserMobileFooter from "../components/user/Footer/UserMobileFooter"


export default function UserLayout({
  children,
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

              <div className="block min-[769px]:hidden">
                <UserMobileFooter />
            </div>
        </>
    );
}