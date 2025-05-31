import { toast } from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";

function CustomToaster ({tst, text}) {
    return (
        <div 
            className="rounded-xl flex items-center gap-3 px-5 py-7 cursor-pointer bg-[#ff000020] dark:bg-[#111111] border border-[#c27676] dark:border-[#00eeff]/50 text-[#ff0000]/40 dark:text-[#00eeff]/50 hover:text-[#ff0000]/70 dark:hover:text-[#00eeff]/70"
            onClick={() => toast.dismiss(tst.id)}
        >
            <button
                className="w-4 h-4 border-0 bg-transparent p-0 flex items-center justify-center focus:text-[#ff0000]/70 dark:focus:text-[#00eeff]/70 focus:outline-none"
            >
                <AiFillCloseCircle />
            </button>
            <p className="text-xs sm:text-sm lg:text-base text-[#311409]/80 dark:text-white/80">{text}</p>
        </div>
    )
}

export default CustomToaster;