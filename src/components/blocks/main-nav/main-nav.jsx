import { useTranslation } from 'react-i18next';

function MainNav () {
    const { t, i18n } = useTranslation();

    const menuItems = [
        { text: t("navigation.about"), href: '#about' },
        { text: t("navigation.projects"), href: '#projects' },
        { text: t("navigation.contact"), href: '#contact' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <ul>
                {menuItems.slice(0).map((item, index) => (
                    <li key={index} href={item.href}>{item.text}</li>
                ))}
            </ul>
        </>
    )
}

export default MainNav;