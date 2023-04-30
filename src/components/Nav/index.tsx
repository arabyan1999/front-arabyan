import { Dispatch, SetStateAction, useState } from "react"
import styles from "./styles.module.scss"
import { ReactComponent as Logotype } from "../../assets/Logotype.svg"
import arrowDown from "../../assets/arrowdown.svg"
import { ReactComponent as CloseIcon } from "../../assets/x.svg"
import { useScrollingElement } from "../../hooks/use-scrolling-elements"

interface INavigationList {
    title: string;
    withImage: boolean;
    submenu?: string[];
}

const navigationList: INavigationList[] = [
    {
        title: 'Demos',
        withImage: true,
        submenu: [
            'Post Header',
            'Post Layout',
            'Share Buttons',
            'Gallery Post',
            'Video Post',
        ]
    },
    {
        title: 'Post',
        withImage: true,
        submenu: [
            'Post Header',
            'Post Layout',
            'Share Buttons',
            'Gallery Post',
            'Video Post',
        ]
    },
    {
        title: 'Features',
        withImage: true,
        submenu: [
            'Post Header',
            'Post Layout',
            'Share Buttons',
            'Gallery Post',
            'Video Post',
        ]
    },
    {
        title: 'Categories',
        withImage: true,
        submenu: [
            'Post Header',
            'Post Layout',
            'Share Buttons',
            'Gallery Post',
            'Video Post',
        ]
    },
    {
        title: 'Shop',
        withImage: true,
        submenu: [
            'Post Header',
            'Post Layout',
            'Share Buttons',
            'Gallery Post',
            'Video Post',
        ]
    },
    {
        title: 'Buy Now',
        withImage: false,
        submenu: []
    },
]

interface INav {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const Nav = ({ open, setOpen }: INav) => {
    useScrollingElement(open);
    const [subMenuTitle, setSubmenuTitle] = useState('');

    const handleChangeSubMenu = (title: string) => {
        if (title === subMenuTitle) {
            return setSubmenuTitle('')
        }
        return setSubmenuTitle(title)
    }
    return (
        <div className={open ? styles.navBackground : ''} onClick={() => setOpen(false)}>
            <nav
                className={`${styles.nav} ${open ? styles.mobileOpenedNav : styles.mobileClosedNav}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.mobileHeader}>
                    <Logotype />
                    <CloseIcon onClick={() => setOpen(false)} />
                </div>
                {
                    navigationList.map(({ title, withImage, submenu }) => (
                        <div
                            key={title}
                            className={`${styles.navItem} ${subMenuTitle === title && styles.activeItem}`}
                            onClick={() => handleChangeSubMenu(title)}
                        >
                            <p>{title}</p>
                            {withImage && <img src={arrowDown} alt="arrow" />}
                            {
                                subMenuTitle === title && submenu?.length ? (
                                    <div className={styles.submenu}>
                                        {submenu.map((submenuText) => (
                                            <div key={submenuText} className={styles.submenuItem}>
                                                <p>{submenuText}</p>
                                                <img src={arrowDown} alt="arrow" />
                                            </div>
                                        ))}
                                    </div>
                                ) : null
                            }
                        </div>
                    ))
                }
            </nav>
        </div>
    )
}

export default Nav;
