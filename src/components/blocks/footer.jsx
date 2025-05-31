import { useTranslation } from "react-i18next";

function Footer () {
    const {t, i18n} = useTranslation();

    return (
        <footer className="mt-10 w-6/10 mx-auto">
            <div className="pt-8 border-t border-[#ff000020] dark:border-white/5 text-center">
                <p className="text-[#311409]/80 dark:text-white/40 text-xs">
                    &copy; {new Date().getFullYear()} {t("copyright")}
                </p>
            </div>
        </footer>
    )
}

export default Footer;