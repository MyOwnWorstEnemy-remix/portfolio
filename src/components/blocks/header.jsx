import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';

function Header () {
    const { t, i18n } = useTranslation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    const [opacity, setOpacity] = useState('opacity-100');

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const newOpacity = scrollTop > 50 ? 'opacity-90' : 'opacity-100';
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleMenuItemClick = (href) => {
        setDrawerOpen(false);
        setTimeout(() => {
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };
    
    const menuItems = [
        { text: t("navigation.about"), href: '#about' },
        { text: t("navigation.projects"), href: '#projects' },
        { text: t("navigation.contact"), href: '#contact' },
    ];
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className={`fixed top-8 left-1/2 -translate-x-1/2 rounded-full bg-black border border-slate-500 ${opacity} font-montserrat lg:text-lg z-10`}>
            <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
                <Toolbar className='flex gap-13'>
                    {!isSmallScreen && (
                        <Box className="flex gap-6">
                            {menuItems.map((item, index) => (
                                <button 
                                    key={index} 
                                    type="button" 
                                    onClick={() => document.querySelector(item.href).scrollIntoView({ behavior: 'smooth' })} 
                                    className='cursor-pointer shrink-0 text-white px-1 border-b-2 border-transparent hover:text-white/90 hover:border-current focus:border-current focus:outline-none focus-visible:outline-none'
                                >
                                    {item.text}
                                </button>
                            ))}
                        </Box>
                    )}
                    <div className="flex gap-2">
                        <button type="button" className='block bg-transparent p-2 border-2 border-transparent rounded-full hover:border-current focus:border-current focus:outline-none focus-visible:outline-none cursor-pointer' onClick={() => changeLanguage('en')}>EN</button>
                        <button type="button" className='block bg-transparent p-2 border-2 border-transparent rounded-full hover:border-current focus:border-current focus:outline-none focus-visible:outline-none cursor-pointer' onClick={() => changeLanguage('ru')}>RU</button>
                    </div>
                    {isSmallScreen && (
                        <IconButton edge="end" onClick={toggleDrawer(true)}>
                            <MenuIcon className='text-[#00eeffd2]' />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer 
                anchor="right" 
                open={drawerOpen} 
                onClose={toggleDrawer(false)}
                slotProps={{ paper: {
                    sx: {
                        width: { xs: '80%', sm: '250px' },
                        height: { xs: '100%', sm: '100%' },
                        background: '#0c0c0c',
                    },
                    
                }}}
            >
                <ul className='flex flex-col gap-y-2 pt-8'>
                    {menuItems.map((item, index) => (
                        <div key={index} onClick={() => handleMenuItemClick(item.href)} className='cursor-pointer p-4 transition-colors ease-in-out duration-300 hover:bg-[#00eeffd2]/20'>
                            <span  className='text-white font-montserrat'>{item.text}</span>
                        </div>
                    ))}
                </ul>
            </Drawer>
        </div>
    )
}

export default Header;