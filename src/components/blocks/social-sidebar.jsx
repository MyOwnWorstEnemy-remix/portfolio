import SocialIcon from '../ui/social-icon';
import { BsGithub, BsTelegram } from "react-icons/bs";

const SocialSidebar = () => {
  return (
    <div className='hidden lg:flex fixed bottom-0 left-0 xl:left-5 p-2.5 pb-0 z-10 flex-col items-center gap-5'>
      <ul className='flex flex-col gap-3.5 items-center'>
        <li>
            <SocialIcon href={"https://github.com/MyOwnWorstEnemy-remix"} bgColor={"bg-transparent"} icon={<BsGithub className='w-7 h-7' />} />
        </li>
        <li>
           <SocialIcon href={"https://t.me/Ulia_Litvinenko"} bgColor={"bg-transparent"} icon={<BsTelegram className='w-7 h-7' />} />
        </li>
      </ul>
      <div className='w-0.5 h-24 bg-[#ffa700]/50 dark:bg-white/20'></div>
    </div>
  );
};

export default SocialSidebar;