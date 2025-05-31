import { useTranslation } from "react-i18next";
import { useFont } from "../../hooks/hooks";
import SectionTitle from "../ui/section-title";
import SocialIcon from "../ui/social-icon";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsTelegram } from "react-icons/bs";

function Contacts () {
    const {t, i18n} = useTranslation();
    const font = useFont();

    return (
        <section  className='py-16 md:py-20 lg:py-24 font-montserrat relative' id="contact">
            <div className="absolute top-[-10vh] left-[-13%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#ffc40021] dark:bg-[#00eeff]/5 rounded-full blur-[120px] z-0"></div>
            <div className="absolute top-[10vh] left-[-20%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#ff000010] dark:bg-[#5900ff18] rounded-full blur-[100px] z-0"></div>
            <div className="absolute top-[60vh] right-[-25%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#ff000010] dark:bg-[#8000ff17] rounded-full blur-[120px] z-0"></div>
            <SectionTitle text={t("contact.title")} font={font} bgColor={"bg-[#ffd700]/60 dark:bg-[#00eeff]/40"} />
            <div
              className="bg-gradient-to-br from-[#f8e4cf] to-[#faecde] dark:from-[#0f0f0f] dark:to-[#131313] rounded-xl p-5 sm:p-7 md:p-8 border border-white/5 transition-all duration-500 ease-out h-full md:w-1/2 mx-auto md:min-w-[650px] flex flex-col relative overflow-hidden group hover:shadow-[0_0_25px_rgba(255,157,0,0.2)] hover:border-[#ffa70036] dark:hover:shadow-[0_0_25px_rgba(0,238,255,0.05)] dark:hover:border-[#00eeff20]"
            >
                <h3 className="text-[#311409] dark:text-white text-lg sm:text-xl md:text-2xl unselectable font-medium mb-5">
                    {t("contact.mainTitle")}
                </h3>

                <div className="space-y-5 flex-grow relative">
                    <p className="text-[#311409]/80 dark:text-white/80 unselectable text-xs sm:text-sm leading-relaxed border-l-2 border-[#ffd700]/60 dark:border-[#00eeff]/30 pl-4 py-1">
                        {t("contact.description")}
                    </p>

                    <a href="mailto:ulialitvinenko781@gmail.com"  className="flex items-center mb-4 mt-6 w-fit group cursor-pointer">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ffa700]/15 dark:bg-[#00eeff]/10  flex items-center justify-center mr-4 transition-all duration-300">
                            <HiOutlineMail className="w-4 h-4 sm:h-5 sm:w-5 text-[#ffa700]/80 dark:text-[#00eeff]/80" />
                        </div>
                        <div>
                            <p className="text-[#311409]/50 dark:text-white/50 text-xs uppercase tracking-wider unselectable mb-1">
                                Email
                            </p>
                            <p
                                className="text-xs sm:text-sm font-medium text-[#ffa700eb] dark:text-[#00eeffd2] transition-colors hover:underline duration-300"
                            >
                                ulialitvinenko781@gmail.com
                            </p>
                        </div>
                    </a>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <p className="text-[#311409]/70 dark:text-white/70 text-xs mb-4 unselectable">
                            {t("contact.socialMedia")}
                        </p>
                        <div className="flex space-x-3">
                            <SocialIcon href={"https://github.com/MyOwnWorstEnemy-remix"} bgColor={"bg-[#ffa700]/15 dark:bg-[#ffffff0c]"} icon={<BsGithub />} />
                            <SocialIcon href={"https://t.me/Ulia_Litvinenko"} bgColor={"bg-[#ffa700]/15 dark:bg-[#ffffff0c]"} icon={<BsTelegram />} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;