import {useRef, useState} from 'react';
import SlideItem from './slide-item';
import Pagination from './pagination';

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

function Slider ({data}) {
    const carousel = useRef();
    const slide = useRef();
    const [index, setIndex] = useState(0);

    const handlePagination = newIndex => {
        if (!carousel.current || !slide.current) return;

        const width = slide.current.offsetWidth;

        carousel.current.scrollTo(
            width * newIndex,
            0
        );
        setIndex(newIndex);
    };

    const handleScroll = (evt) => {
        const newIndex = Math.floor(carousel.current.scrollLeft / (slide.current.offsetWidth + 12));
        setIndex(newIndex);
    }

    const debouncedScroll = debounce(handleScroll, 100);

    return (
        <div className='w-full md:w-7/10'>
            <ul className='flex gap-3 overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory mb-5' ref={carousel} onScroll={debouncedScroll}>
                {data.map(item => 
                    <li key={item.id} className='snap-start snap-always' ref={slide}>
                        <SlideItem item={item}/>
                    </li>
                )}
            </ul>
            <Pagination data={data} index={index} onClick={handlePagination} />
        </div>
    );
};

export default Slider;