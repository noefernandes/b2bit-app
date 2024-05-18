interface ComponentProps {
    children: React.ReactNode
    height?: string
    width?: string
    margin?: string
    boxShadow?: string
    bgColor?: string
}

function Card(props: ComponentProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center self-center
                bg-[#FFFFFF] rounded-[18px] xxs:max-xs:w-4/5
                ${props.boxShadow} ${props.bgColor} ${props.height} ${props.width} ${props.margin}
            `}>
            {props.children}
        </div>
    );

}

export default Card