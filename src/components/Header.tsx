import React from "react";

interface ComponentProps {
    children: React.ReactNode
}

function Header(props: ComponentProps) {
    return (
        <>
            <div id="header" className="w-full h-[70px] bg-[#FFFFFF] flex flex-col justify-center">
                {props.children}
            </div>
        </>
    );
}

export default Header