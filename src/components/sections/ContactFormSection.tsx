import React, { useState } from "react";
import parse from "html-react-parser";
import HubspotForm from "react-hubspot-form";
import JotformEmbed from "react-jotform-embed";
import { Formik, Field, Form } from "formik";
import type {
  SiteLibraryFieldsFragment,
  ContactFormFieldsFragment,
} from "@/graphql/generated/graphql";
import ReactGA from "react-ga4";
import ConfettiExplosion from "react-confetti-explosion";
import { InlineWidget } from "react-calendly";

type FormikShape = {
  Name: string;
  Email: string;
  Phone: string;
  Message: string;
  SiteEmail: string;
  Website: string;
};

type ContactFormType = ContactFormFieldsFragment;

interface ContactFormProps {
  contactFormData: ContactFormType[];
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function ContactFormSection({
  contactFormData,
  siteLibrary,
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isExploding, setIsExploding] = React.useState(false);
  const handleSubmit = (values: FormikShape) => {
    setIsSubmitted(true);
    setIsExploding(true);
    let url =
      "https://docs.google.com/forms/d/1iK-ZxPZ1CW_dzUY3hW-AhkDJdOND5lg46tyVH0ueOUg/formResponse?usp=pp_url&";
    [
      ["entry.1794276203", values.Name],
      ["entry.1965148749", values.Email],
      ["entry.1311838583", values.Phone],
      ["entry.2047319632", values.Message],
      ["entry.1069556033", values.SiteEmail],
      ["entry.99525662", values.Website],
      ["submit", "Submit"],
    ].forEach((entry) => (url = `${url}&${entry[0]}=${encodeURI(entry[1])}`));
    const request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.send(null);
    ReactGA.event({
      category: "Form Submit",
      action: `${values.Name}: Submitted Form`,
      label: `${values.Name}: Submitted Form`,
    });
  };

  if (!siteLibrary) return <></>;
  const { isSpanish, contactEmail, metaDomain } = siteLibrary;

  return (
    <>
      {contactFormData.map((contactFormItem, index) => (
        <section className="container grid mx-auto my-8 " key={index}>
          <div className="w-full md:w-8/12 mx-auto">
            <div
              className={`border-round p-2 mx-auto ${
                contactFormItem?.cssClass && contactFormItem.cssClass
              }`}
            >
              {!!contactFormItem?.contactFormTitle && (
                <h3 className="text-2xl md:text-4xl mx-auto opacity-90 uppercase text-center font-bold mt-4 mb-4">
                  {parse(contactFormItem?.contactFormTitle)}
                </h3>
              )}
              {!!contactFormItem?.contactFormDescription && (
                <div className="body-parsed-text text-center mx-auto max-w-3xl mb-0">
                  {parse(contactFormItem.contactFormDescription.html)}
                </div>
              )}
              {!!contactFormItem.netlifyContactForm && (
                <>
                  {isSubmitted ? (
                    <>
                      {isExploding && <ConfettiExplosion />}
                      <div className="bg-[#38fa8c] text-center border-[#229a2a] rounded-sm border p-4">
                        <p className="text-[#229a2a]">
                          Successfully submitted form!
                        </p>
                      </div>
                    </>
                  ) : (
                    <Formik
                      initialValues={{
                        Name: "",
                        Email: "",
                        Phone: "",
                        Message: "",
                        SiteEmail: contactEmail || "",
                        Website: metaDomain || process.env.SITE_URL || "",
                      }}
                      onSubmit={handleSubmit}
                    >
                      <Form
                        className="flex flex-col px-4 w-full mx-auto gap-y-1"
                        id="contact"
                      >
                        <div className="relative mb-2">
                          <label
                            htmlFor="Name"
                            className="text-[10px] uppercase top-2 left-3 absolute"
                          >
                            {isSpanish ? "Nombre" : "Name"}
                          </label>
                          <Field
                            id="Name"
                            name="Name"
                            placeholder={isSpanish ? "Nombre" : "Name"}
                            className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="Phone"
                            className="text-[10px] uppercase top-2 left-3 absolute"
                          >
                            {isSpanish ? "Tel" : "Phone"}
                          </label>
                          <Field
                            id="Phone"
                            name="Phone"
                            placeholder={isSpanish ? "Tel" : "Phone"}
                            className="block w-full rounded-md border-0 pt-5 pr-10 text-text-color ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                          />
                        </div>
                        <div className="relative mb-2">
                          <label
                            htmlFor="Email"
                            className="text-[10px] uppercase top-2 left-3 absolute"
                          >
                            Email
                          </label>
                          <Field
                            id="Email"
                            name="Email"
                            className="block w-full rounded-md border-0 pt-5 pr-10 text-text-color ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                            placeholder="Email"
                            type="Email"
                          />
                        </div>
                        <div className="relative mb-0">
                          <label
                            htmlFor="Message"
                            className="text-[10px] uppercase top-2 left-3 absolute"
                          >
                            {isSpanish ? "Mensaje" : "Message"}
                          </label>
                          <Field
                            id="Message"
                            name="Message"
                            className="block w-full rounded-md border-0 pt-5 pr-10 text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6"
                            placeholder={isSpanish ? "Mensaje" : "Message"}
                            component="textarea"
                            rows="4"
                          />
                        </div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md bg-primary px-3 py-2.5 text-md font-semibold leading-6 !text-text-color shadow-sm hover:bg-secondary transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2"
                        >
                          {isSpanish ? "Enviar" : "Submit"}
                        </button>
                      </Form>
                    </Formik>
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
              {!!contactFormItem?.calendlyLink && (
                <InlineWidget
                  url={contactFormItem.calendlyLink}
                  styles={{
                    height: "1000px",
                    padding: "0 1rem",
                    borderRadius: "16px",
                  }}
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
