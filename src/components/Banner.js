import React, {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react"
import {Link} from 'react-router-dom';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            image: "https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Rooms On Rent",
            subtitle: "Discover near your work place Or away from city pollution",
            cta: "Check Now"
        },
        {
            image: "https://media.istockphoto.com/id/878753486/photo/cane-furnitures-handicrafts-on-display.webp?a=1&b=1&s=612x612&w=0&k=20&c=GojtzjQUCcMhpZFBOQbiOg2qHqzAv2LyIgmswED-Ug4=",
            title: "Furnitures",
            subtitle: "Check the latest trends.",
            cta: "Check Now"
        },
        {
            image: "https://media.istockphoto.com/id/1407280105/photo/display-of-traditional-indian-wedding-dress-saree-lehenga-in-bridal-garment-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=vFhhDRrTwycYozr9JSolbUX5PYDVdH3ntkQf7ZuufIs=",
            title: "Dresses: Traditional and Modern Style",
            subtitle: "Discover our latest styles",
            cta: "Check Now"
        },
        {
            image: "https://media.istockphoto.com/id/869119746/photo/moscow-russia-different-types-of-fan-are-on-the-shelf-in-the-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=xqKV3G0nQAMVxHy4nrOE5eNlQREgIHbHfM28V21lPqA=",
            title: "Electric Fans and Coolers",
            subtitle: "Explore multi type fans and coolers",
            cta: "Check Now"
        },
        {
            image: "https://media.istockphoto.com/id/944588416/photo/beautiful-indian-young-women-portrait-with-indian-traditional-jewelry.webp?a=1&b=1&s=612x612&w=0&k=20&c=HgELFn2tcaN3nLTUiPI0_UgrmfzTZYLXsLnt2HBQYA4=",
            title: "Artificial Jwelleries Collection",
            subtitle: "Explore latest fancy collection for party wear. ",
            cta: "Shop Now"
        },

    ];

    const prevSlide = ()=> {
        setCurrentSlide(currentSlide === 0 ? data.length - 1:currentSlide--)
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length -1 ? 0: currentSlide++)
    };

    return (
        <div className="relative w-full h-[650px] overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                {data.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-optacity-50">
                            <div className="text-center text-white">
                                <h2 className="text"></h2>
                                <p className="text-xl mb-4">{slide.subtitle}</p>
                                <Link to="/#shop" className="bg-white text-black">
                                    {slide.cta}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-full">
                <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-full">
                {data.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? "bg-white" : "bg-white bg-transparent"
                    }`} />
                ))}
            </div>
        </div>
        
    );
};