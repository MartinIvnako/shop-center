import { FCC } from "src/types/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FCC = ({ children }) => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
