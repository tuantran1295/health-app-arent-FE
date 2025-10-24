import Header from "./Header";
import Footer from "./Footer";
import GoToTop from "../components/GoToTop.tsx";

function Layout(props: any) {
    return (
        <div className="w-full mx-auto">
            <Header />
            {props.children}
            <Footer />
            <GoToTop />
        </div>
    );
}

export default Layout;