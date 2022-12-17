import { Outlet } from "react-router-dom";

import { Header, Footer } from "../Components/Containers/Website";

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
