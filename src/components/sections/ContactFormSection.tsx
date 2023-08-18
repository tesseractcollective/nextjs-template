import React, { useState } from "react";
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
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit(onSubmit)}
                    action="#?formSubmit=success"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <section className="container flex-col grid mx-auto dark-section">
                      <div className="w-full mx-auto">
                        <div className="form-input-wrapper border-round p-2">
                          <div className="mb-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium leading-6 text-dark"
                            >
                              Email
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                              <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                {...register("email")}
                                className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                              />
                              {errors.email?.type === "required" ? (
                                <p>Email is required</p>
                              ) : errors.email?.type === "pattern" ? (
                                <p>Invalid email</p>
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>

                          <div className="mb-2">
                            <label
                              htmlFor="Name"
                              className="block text-sm font-medium leading-6 text-dark"
                            >
                              {isSpanish ? "Nombre" : "Name"}
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                placeholder="name"
                                {...register("name")}
                                id="name"
                                className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>

                          <div className="mb-2">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium leading-6 text-dark"
                            >
                              {isSpanish ? "Tel" : "Phone"}
                            </label>
                            <div className="mt-2">
                              <input
                                type="text"
                                id="phone"
                                {...register("phone")}
                                className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                placeholder="281-330-8004"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="Message"
                              className="block text-sm font-medium leading-6 text-dark"
                            >
                              {isSpanish ? "Mensaje" : "Message"}
                            </label>
                            <div className="mt-2">
                              <textarea
                                rows={4}
                                placeholder="message"
                                {...register("message")}
                                name="message"
                                id="message"
                                className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
                  </form>
                )}
              <div className="sr-only">
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit(onSubmit)}
                  action="#?formSubmit=success"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <section className="container flex-col grid mx-auto dark-section">
                    <div className="w-full mx-auto">
                      <div className="form-input-wrapper border-round p-2">
                        <div className="mb-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-dark"
                          >
                            Email
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                              type="email"
                              id="email"
                              placeholder="Email"
                              {...register("email")}
                              className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                            />
                            {errors.email?.type === "required" ? (
                              <p>Email is required</p>
                            ) : errors.email?.type === "pattern" ? (
                              <p>Invalid email</p>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>

                        <div className="mb-2">
                          <label
                            htmlFor="Name"
                            className="block text-sm font-medium leading-6 text-dark"
                          >
                            {isSpanish ? "Nombre" : "Name"}
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              placeholder="name"
                              {...register("name")}
                              id="name"
                              className="block w-full rounded-md border-0 py-1.5 text-dark ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="mb-2">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-6 text-dark"
                          >
                            {isSpanish ? "Tel" : "Phone"}
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              id="phone"
                              {...register("phone")}
                              className="block w-full rounded-md border-0 py-1.5 text-dark ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                              placeholder="281-330-8004"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="Message"
                            className="block text-sm font-medium leading-6 text-dark"
                          >
                            {isSpanish ? "Mensaje" : "Message"}
                          </label>
                          <div className="mt-2">
                            <textarea
                              rows={4}
                              placeholder="message"
                              {...register("message")}
                              name="message"
                              id="message"
                              className="block w-full rounded-md border-0 py-1.5 text-dark ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
                </form>
              </div>
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
