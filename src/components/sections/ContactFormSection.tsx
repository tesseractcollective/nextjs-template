import React, { useState } from "react";
import parse from "html-react-parser";
import HubspotForm from "react-hubspot-form";
import JotformEmbed from "react-jotform-embed";
import type {
  SiteLibraryFieldsFragment,
  ContactFormFieldsFragment,
} from "@/graphql/generated/graphql";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPost {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type ContactFormType = ContactFormFieldsFragment;

interface ContactFormProps {
  contactFormData: ContactFormType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export interface NetlifyFormState {
  loading: boolean;
  error: boolean;
  success: boolean;
  recaptchaError?: boolean | undefined;
  recaptcha?: React.ReactElement | undefined;
}

export default function ContactFormSection({
  contactFormData,
  siteLibrary,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPost>();
  if (!siteLibrary) return <></>;
  const { isSpanish } = siteLibrary;
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Source: https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const onSubmit: SubmitHandler<FormPost> = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    setSubmitted(true);
    console.log(data);
  };

  return (
    <>
      {contactFormData.map((contactFormItem, index) => (
        <section
          className="container grid mx-auto my-8 dark-section"
          key={index}
        >
          <div className="w-full md:w-8/12 mx-auto">
            <div
              className={`border-round p-2 mx-auto ${
                contactFormItem?.cssClass && contactFormItem.cssClass
              }`}
            >
              {!!contactFormItem?.contactFormTitle && (
                <div className="body-parsed-text text-center mb-0">
                  {parse(contactFormItem.contactFormTitle)}
                </div>
              )}
              {!!contactFormItem?.contactFormDescription && (
                <div className="body-parsed-text text-center mx-auto w-10">
                  {parse(contactFormItem.contactFormDescription.html)}
                </div>
              )}
              {submitted && (
                <div className="bg-[#38fa8c] text-center border-[#229a2a] rounded-sm border p-4">
                  <p className="text-[#229a2a]">
                    {isSpanish
                      ? "¡Formulario enviado con éxito!"
                      : "Successfully submitted form!"}
                  </p>
                </div>
              )}
              {!submitted &&
                !!contactFormItem?.netlifyContactForm &&
                contactFormItem?.netlifyContactForm === true && (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                      <div>
                        <input
                          type="text"
                          id="name"
                          placeholder="First Name"
                          {...register("name")}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="message"
                          placeholder="Message"
                          {...register("message")}
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        {...register("email", {
                          required: true,
                          pattern: emailRegex,
                        })}
                      />
                      {errors.email?.type === "required" ? (
                        <p>Email is required</p>
                      ) : errors.email?.type === "pattern" ? (
                        <p>Invalid email</p>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      <button type="submit">Get Access</button>
                    </div>
                  </form>
                )}

              {!!contactFormItem?.hubspotFormId && (
                <HubspotForm
                  portalId={contactFormItem.hubspotPortalId}
                  formId={contactFormItem.hubspotFormId}
                  cssClass="block w-full mx-auto"
                  loading={<div />}
                />
              )}
              {!!contactFormItem?.jotformUrl && (
                <JotformEmbed src={contactFormItem?.jotformUrl} />
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
