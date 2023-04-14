import React from "react"
import News from "@/components/ui/News"

const Layout = ({children}:{children:React.ReactElement}) => {
    return (
        <div className="bg-blue-300">
            {children}
        </div>
    )
}

export default Layout