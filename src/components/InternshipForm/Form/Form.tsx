import emailjs from "@emailjs/browser";
import { ErrorMessage, Field, Formik, Form as FormikForm } from "formik";
import { useState } from "react";

import { useI18n } from "../../../hooks/useI18n";
import { Button, ModalForm } from "../../ui";

import styles from "./Form.module.scss";

interface FormValues {
  email: string;
  linkedin: string;
  message: string;
}

export const Form = () => {
  const { t } = useI18n();

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    return <ModalForm onClose={() => setIsModalOpen(false)} />;
  }
  const validateValues = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.email) {
      errors.email = t("internshipPage.form.requiredField");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = t("internshipPage.form.email");
    }
    if (values.linkedin && !/^https?:\/\/.+/.test(values.linkedin)) {
      errors.linkedin = t("internshipPage.form.linkedin");
    }
    if (!values.message) {
      errors.message = t("internshipPage.form.requiredField");
    }
    return errors;
  };

  const onSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    const templateParams = {
      email: values.email,
      linkedin: values.linkedin || t("internshipPage.form.noLinkedin"),
      message: values.message,
    };

    // Нужно будет создать аккаунт на EmailJs с нужной для PluhSoft почтой и вписать в send( 1) Сервис ключ, 2) темплейт ключ, 3)..., 4) паблик ключ)
    // В темплейте email в {{email}}, message в {{message}}, linkedin в {{linkedin}}
    emailjs
      .send(
        "service_ddtgdaz",
        "template_ycxja5h",
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
          setIsModalOpen(true);
          resetForm();
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <Formik<FormValues>
      initialValues={{ email: "", linkedin: "", message: "" }}
      validate={validateValues}
      onSubmit={onSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <FormikForm className={styles.form}>
          <div className={styles.wrapper}>
            <div>
              <Field
                className={styles.input}
                type="text"
                name="email"
                placeholder="*Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field
                className={styles.input}
                type="text"
                name="linkedin"
                placeholder="Linkedin"
              />
              <ErrorMessage
                name="linkedin"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field
                as="textarea"
                className={styles.textarea}
                name="message"
                placeholder={t("internshipPage.form.whyIWant")}
              />
              <ErrorMessage
                name="message"
                component="div"
                className={styles.error}
              />
            </div>

            <Button
              className={styles.button}
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {t("internshipPage.form.submit")}
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
