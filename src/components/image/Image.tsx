import { FC, memo } from "react";

interface IImageProps{

    src: string;
    loading?: 'eager' | 'lazy';
    alt: string;
    height?: number;
    width?: number
}

const Image : FC<IImageProps> = ({src, loading, alt, height, width})=>{

    return ( <img src={src} loading={loading} alt={alt} height={height} width={width}/>)
}
Image.defaultProps = {
    loading: 'eager', 
    height: 100,     
    width: 100       
};
export default memo(Image)