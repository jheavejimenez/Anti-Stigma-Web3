import Image from "next/image"

const PhaseListImage = ({ className, src, width, height, alt }) => {
    return (
        <div className={`${className ? className : 'col-md-5'} d-flex justify-content-center`}>
            <Image
                alt={alt}
                src={src}
                width={width ? width : '300'}
                height={height ? height : '200'}
            />
        </div>
    )
}

export default PhaseListImage