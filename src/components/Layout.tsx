import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <div className="layout">
                <Navbar />
            </div>
            {children}
            <Footer />
        </>
    )
}

export default Layout