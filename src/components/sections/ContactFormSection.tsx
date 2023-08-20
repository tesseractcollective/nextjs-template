import React, { useState } from "react";
import React, { useEffect } from "react";
import parse from "html-react-parser";
import HubspotForm from "react-hubspot-form";
import JotformEmbed from "react-jotform-embed";
import ReactGA from "react-ga4";
import type {
  SiteLibraryFieldsFragment,
  ContactFormFieldsFragment,
} from "@/graphql/generated/graphql";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPost {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type ContactFormType = ContactFormFieldsFragment;

interface ContactFormProps {
  contactFormData: ContactFormType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function ContactFormSection({
  contactFormData,
  siteLibrary,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formReady, setFormReady] = React.useState(false);

  useEffect(() => {
    setFormReady(true);
  }, []);
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

  const onSubmit: SubmitHandler<FormPost> = (data) => {
    fetch("/contact", {
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
                  <>
                    {formReady && (
                      <form
                        name="feedbackForm"
                        method="post"
                        data-netlify="true"
                        action={"/#"}
                        encType={"application/x-www-form-urlencoded"}
                      >
                        <input
                          type="hidden"
                          name="form-name"
                          value="feedbackForm"
                        />
                        <h2>{"The mic is yours 🎙️"}</h2>
                        <h3>
                          {
                            "Drop us a line with your thoughts or suggestions so we can improve."
                          }
                        </h3>
                        <p>
                          <label>
                            Your Name: <input type="text" name="name" />
                          </label>
                        </p>
                        <p>
                          <label>
                            Your Email: <input type="email" name="email" />
                          </label>
                        </p>
                        <p>
                          <label>
                            Your Feedback:{" "}
                            <textarea className="" name="comment"></textarea>
                          </label>
                        </p>

                        <p>
                          <button type="submit" className="">
                            {"Send Feedback"}
                          </button>
                        </p>
                      </form>
                    )}
                  </>
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
