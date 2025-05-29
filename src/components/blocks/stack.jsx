import { useTranslation } from 'react-i18next';
import { stack } from "../../data/stack";
import Slider from "../ui/slider";

function Stack ({font}) {
    const {t, i18n} = useTranslation();
    
    return (
        <div className="flex gap-10 flex-col md:flex-row justify-between relative">
            <div className="absolute top-[-10%] left-[20%] md:top-[-50%] md:left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#ff7b00]/10 dark:bg-[#00eeff]/5 rounded-full blur-[120px] z-0"></div>
            <div className='text-[#311409] dark:text-white w-1/2 mx-auto md:w-2/10 flex flex-wrap items-center justify-center gap-4'>
                <span className={`${font} text-6xl md:text-9xl m-0`}>3+</span>
                <p className='text-xs md:text-sm m-0 text-center md:text-left'>{t("stack")}</p>
            </div>
            <Slider data={stack} />
        </div>
    )
}

export default Stack;