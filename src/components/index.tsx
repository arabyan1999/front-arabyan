import { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import styles from "./styles.module.scss";

const NavigationBar = () => {
    const [open, setOpen] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(true)
  useEffect(() => {

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY >= 200) {
        setIsVisible(false)
      }
      if (scrollY === 0) {
        setIsVisible(true)  
      }
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [])

  return (
    <div
        className={`${styles.navigationBar} ${isVisible ? styles.navigationBarVisible : styles.navigationBarHidden}`}
    >
        <Header setOpen={setOpen} />
        <Nav open={open} setOpen={setOpen} />
    </div>
  )
}

export default NavigationBar;