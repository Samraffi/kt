import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";

import { telegram } from "../../constans/telegram";
import { useI18n } from "../../hooks/useI18n";
import { isMobile } from "../../utils/isMobile";
import { translit } from "../../utils/translit";

import Frame from "../Frame/Frame";
import {
  FormField,
  Image,
  InputField,
  ModalForm,
  SelectField,
  SubmitButton,
  TextareaField,
  Title,
} from "../ui";

import styles from "./ApplicationMain.module.scss";

function ApplicationMain() {
  const { t } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialValues = {
    email: "",
    name: "",
    description: "",
    business: "",
    count: "",
    link: "",
  };

  const validate = (values: typeof initialValues) => {
    const errors: { [key: string]: string } = {};
    if (!values.name.trim()) {
      errors.name = t("applicationMain.form.nameRequired");
    }

    if (!values.email.trim()) {
      errors.email = t("applicationMain.form.emailRequired");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = t("applicationMain.form.emailInvalid");
    }

    if (!values.description.trim()) {
      errors.description = t("applicationMain.form.descriptionRequired");
    }

    return errors;
  };

  const onSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const employeesText = values.count
      ? t("applicationMain.employeesText", { employees: values.count })
      : "";
    const websiteText = values.link
      ? t("applicationMain.websiteText", { website: values.link })
      : "";

    const businessText = values.business ? `[${values.business}]` : "";

    const message = t("applicationMain.message", {
      name: values.name,
      email: values.email,
      description: values.description,
      business: businessText,
      employees: employeesText,
      website: websiteText,
    });

    let encodedMessage = "";

    if (isMobile()) {
      encodedMessage = encodeURIComponent(message);
    } else {
      encodedMessage = encodeURIComponent(translit(message));
    }

    const templateParams = {
      email: values.email,
      message,
    };

    // Нужно будет создать аккаунт на EmailJs с нужной для PluhSoft почтой и вписать в send( 1) Сервис ключ, 2) темплейт ключ, 3)templateParams, 4) паблик ключ)
    // В темплейте email в {{email}}, message в {{message}}
    emailjs
      .send(
        "service_ddtgdaz",
        "template_x8f2n7l",
        templateParams,
        "1DWXPlXtTnmomReN7"
      )
      .then(
        (response) => {
          console.log(
            "Email successfully sent!",
            response.status,
            response.text
          );
          resetForm();
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );

    const telegramUrl = `https://t.me/${telegram}?text=${encodedMessage}`;

    window.open(telegramUrl, "_blank");
    setIsModalOpen(true);
    resetForm();
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.formWrapper} id="mainForm">
      <Frame>
        <div className={styles.applicationForm__info}>
          <Title>{t("mainPage.applicationForm.title")}</Title>
          <p>{t("mainPage.applicationForm.description")}</p>
        </div>
        {isModalOpen ? (
          <ModalForm onClose={handleCloseModal} />
        ) : (
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
          >
            <FormField>
              <div>
                <Field
                  component={InputField}
                  id="name"
                  name="name"
                  placeholder={t("applicationMain.form.name")}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.form__error}
                />
              </div>
              <div>
                <Field
                  component={InputField}
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("applicationMain.form.email")}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.form__error}
                />
              </div>
              <Field
                component={SelectField}
                id="business"
                name="business"
                placeholder={t("applicationMain.form.business")}
              />
              <Field
                component={InputField}
                id="count"
                name="count"
                placeholder={t("applicationMain.form.count")}
              />
              <Field
                component={InputField}
                id="link"
                name="link"
                placeholder={t("applicationMain.form.link")}
              />
              <div>
                <Field
                  component={TextareaField}
                  id="description"
                  name="description"
                  placeholder={t("applicationMain.form.description")}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className={styles.form__error}
                />
              </div>
              <SubmitButton />
            </FormField>
          </Formik>
        )}
      </Frame>
      <Image
        src={"../image/hexagonApplicationMain.svg"}
        alt={"hexagon"}
        className={styles.hexagonApplicationMain}
      />
    </div>
  );
}

export default ApplicationMain;
