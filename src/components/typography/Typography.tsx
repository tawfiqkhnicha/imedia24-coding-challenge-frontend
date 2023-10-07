import { FC, memo } from "react"
import { Paragraph } from "./typography.style"

interface ITypography  {

    text: string;
    className?: string;
    style?: {[key: string]: string}
    variant?: "h1" | "h2" | "h3" | "h4"
}

const Typography: FC<ITypography> = ({text, className, style, variant})=>{

    return <Paragraph className={className} style={style} variant={variant}>{text}</Paragraph>
}

export default memo(Typography)