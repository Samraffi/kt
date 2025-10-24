import { RoutePaths } from "../../constans/paths";
import { telegram } from "../../constans/telegram";
import { useI18n } from "../../hooks/useI18n";

import { CustomLink, Image, Li, Logo, Ul } from "../ui";

import styles from "./Footer.module.scss";

function Footer() {
  const { t } = useI18n();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo className={styles.footer__logo} to={"/"}>
          PluhSoft
        </Logo>
        <div className={styles.footer__info}>
          <div>
            <Ul className={styles.footer__nav}>
              <Li className={styles.footer__navLink}>
                <CustomLink to={RoutePaths.About} color="secondary">
                  {t("navBar.about")}{" "}
                </CustomLink>
              </Li>
              {/* <Li className={styles.footer__navLink}>
                <CustomLink to={RoutePaths.Projects} color="secondary">
                  {t("navBar.projects")}{" "}
                </CustomLink>
              </Li> */}
              <Li className={styles.footer__navLink}>
                <CustomLink to={RoutePaths.Practicum} color="secondary">
                  {t("navBar.practicum")}{" "}
                </CustomLink>
              </Li>
              <Li className={styles.footer__navLink}>
                <CustomLink to={RoutePaths.Internship} color="secondary">
                  {t("navBar.internship")}{" "}
                </CustomLink>
              </Li>
            </Ul>
          </div>
          <div className={styles.footer__connection}>
            <div className={styles.footer__email}>
              <CustomLink to="mailto:sales@pluhsoft.com">
                <Image src={"../image/mailFooter.svg"} alt={"mail"} />
              </CustomLink>
              <p>sales@pluhsoft.com</p>
            </div>
            <div className={styles.footer__social}>
              <CustomLink to={`https://t.me/${telegram}`}>
                <Image src={"../image/telegramFooter.svg"} alt={"telegram"} />
              </CustomLink>
              <CustomLink to="https://www.linkedin.com/company/pluhsoft">
                <Image src={"../image/linkedinFooter.svg"} alt={"linkedin"} />
              </CustomLink>
              <CustomLink to="https://www.facebook.com/people/PluhSoft/61557749789385/">
                <Image src={"../image/facebookFooter.svg"} alt={"facebook"} />
              </CustomLink>
              <CustomLink to="https://vk.com/pluhsoft">
                <Image src={"../image/vkontakteFooter.svg"} alt={"vkontakte"} />
              </CustomLink>
              <CustomLink to="https://www.youtube.com/@PluhSoft">
                <Image src={"../image/youtubeFooter.svg"} alt={"youtube"} />
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
