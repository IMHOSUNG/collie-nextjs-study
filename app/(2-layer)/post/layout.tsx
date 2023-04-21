import React from "react"

const Layout = ({children}:{children:React.ReactElement}) => {
    return (
        <div className="m-2 bg-white border-2 border-black">
            {children}
        </div>
    )
}

export default Layout