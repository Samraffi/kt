import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { telegram } from "../../constans/telegram";

import NavBar from "../NavBar/NavBar";
import { CustomLink, GreenButton, Image, LangButton, Logo } from "../ui";

import styles from "./Header.module.scss";

function Header() {
  const location = useLocation();
  const isInternshipPage = location.pathname === "/internship";
  const [mobileOpen, setMobileOpen] = useState(false);

  const background = isInternshipPage ? "secondary" : "primary";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2 }}>
      <NavBar />
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CustomLink
          to="mailto:sales@pluhsoft.com"
          className={styles.contact__link}
        >
          <Image
            src={"../image/mail.svg"}
            alt={"mail"}
            className={styles["contact__link-img"]}
          />
        </CustomLink>
        <CustomLink
          to={`https://t.me/${telegram}`}
          className={styles.contact__link}
        >
          <Image
            src={"../image/telegram.svg"}
            alt={"telegram"}
            className={styles["contact__link-img"]}
          />
        </CustomLink>
        <LangButton />
        <GreenButton />
      </Box>
    </Box>
  );

  return (
    <header className={`${styles.header} ${styles[background]}`}>
      <div className={styles.header__container}>
        <div className={styles.header__menu}>
          <Logo className={styles.header__logo} to={"/"}>
            <Image src={"../image/logo.svg"} alt={"logo"} />
          </Logo>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavBar />
          </Box>
        </div>
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className={styles.contact__block}
        >
          <CustomLink
            to="mailto:sales@pluhsoft.com"
            className={styles.contact__link}
          >
            <Image
              src={"../image/mail.svg"}
              alt={"mail"}
              className={styles["contact__link-img"]}
            />
          </CustomLink>
          <CustomLink
            to={`https://t.me/${telegram}`}
            className={styles.contact__link}
          >
            <Image
              src={"../image/telegram.svg"}
              alt={"telegram"}
              className={styles["contact__link-img"]}
            />
          </CustomLink>
          <LangButton />
          <GreenButton />
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
          className={styles.burger__menu}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: background === "secondary" ? "#fbfefb" : "#fff9f2",
          },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
}

export default Header;
