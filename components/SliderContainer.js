import Slider from "react-slick";

const SliderContainer = ({ children, ...props }) => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        ...props
    };

    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default SliderContainer
