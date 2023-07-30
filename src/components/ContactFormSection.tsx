import parse from "html-react-parser";
import HubspotForm from "react-hubspot-form";
import JotformEmbed from "react-jotform-embed";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";
import ReactGA from "react-ga4";
import type {
  SiteLibraryFieldsFragment,
  PageFieldsFragment,
} from "@/graphql/generated/graphql";

type ContactFormType =
  PageFieldsFragment["layoutBlocks"][number]["layoutBlockColumns"][number]["contactForm"];

interface ContactFormProps {
  contactFormData: ContactFormType;
  siteLibrary: SiteLibraryFieldsFragment;
}

export default function ContactFormSection({
  contactFormData,
  siteLibrary,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const netlify = useNetlifyForm({
    name: "Contact",
    action: "#",
    honeypotName: "bot-field",
    onSuccess: (response: any, context: any) => {
      ("Successfully sent form data to LanzaMe Server");

      console.log("response", response);
      console.log("context", context);
      reset();
    },
  });

  if (!siteLibrary) return <></>;
  const { isSpanish } = siteLibrary;

  const onSubmit = (data: any) => netlify.handleSubmit(null, data);

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

  // cssClass
  // netlifyFormFields

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
              {!!contactFormItem?.netlifyContactForm &&
                contactFormItem?.netlifyContactForm === true && (
                  <NetlifyFormProvider {...netlify}>
                    <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                      <Honeypot />
                      <section className="container flex-column grid mx-auto dark-section">
                        <div className="w-full mx-auto">
                          <div className="form-input-wrapper border-round p-2">
                            {netlify.success && (
                              <p>Thanks for contacting us!</p>
                            )}
                            {netlify.error && (
                              <p>
                                Sorry, we could not reach servers. Because it
                                only works on Netlify, our GitHub demo does not
                                provide a response.
                              </p>
                            )}

                            <div className="mb-2">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Email
                              </label>
                              <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                  type="email"
                                  id="Email"
                                  {...register("Email", {
                                    required: "Email is required",
                                    pattern: {
                                      value: EMAIL_REGEX,
                                      message: "Invalid email address",
                                    },
                                  })}
                                  className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                  placeholder="you@example.com"
                                />
                              </div>
                            </div>

                            <div className="mb-2">
                              <label
                                htmlFor="Name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                {isSpanish ? "Nombre" : "Name"}
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  {...register("Name", {
                                    required: "Name is required",
                                  })}
                                  id="Name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="Name"
                                />
                              </div>
                            </div>

                            <div className="mb-2">
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                {isSpanish ? "Tel" : "Phone"}
                              </label>
                              <div className="mt-2">
                                <input
                                  type="text"
                                  id="phone"
                                  {...register("Phone", {
                                    required: "Phone is required",
                                  })}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="281-330-8004"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="Message"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                {isSpanish ? "Mensaje" : "Message"}
                              </label>
                              <div className="mt-2">
                                <textarea
                                  rows={4}
                                  {...register("Message", {
                                    required: "Message is required",
                                  })}
                                  name="Message"
                                  id="Message"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div>
                              <button
                                type="submit"
                                onClick={() => {
                                  ReactGA.event({
                                    category: "Interaction",
                                    action: `Contact Page - Form Submit`,
                                    label: `Contact Page - Form Submit`,
                                  });
                                }}
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 !text-white shadow-sm hover:bg-primary-hover transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2"
                              >
                                {isSpanish ? "Enviar" : "Submit"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </NetlifyFormComponent>
                  </NetlifyFormProvider>
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
