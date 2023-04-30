import { Dispatch, SetStateAction } from "react";
import { ReactComponent as Logotype } from "../../assets/Logotype.svg"
import searchIcon from "../../assets/search.svg"
import { ReactComponent as MenuButtonIcon } from "../../assets/CombinedShape.svg"
import styles from "./styles.module.scss"

const Header = ({ setOpen }: { setOpen: Dispatch<SetStateAction<boolean>> }) => (
    <header className={styles.header}>
        <button className={styles.burgerMenuWrapper} onClick={() => setOpen(true)}>
            <MenuButtonIcon />
        </button>
        <Logotype />
        <button className={styles.searchButton}>
            <img src={searchIcon} alt="search" />
        </button>
    </header>
);

export default Header;
