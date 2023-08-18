import React, { useState } from "react";
import parse from "html-react-parser";
import HubspotForm from "react-hubspot-form";
import JotformEmbed from "react-jotform-embed";
import type {
  SiteLibraryFieldsFragment,
  ContactFormFieldsFragment,
} from "@/graphql/generated/graphql";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";
type ContactFormType = ContactFormFieldsFragment;

interface ContactFormProps {
  contactFormData: ContactFormType[];
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
    name: "contact",
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
              <NetlifyFormProvider {...netlify}>
                <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                  <Honeypot />
                  <section className="container flex-column grid mx-auto dark-section">
                    <div className="w-10/12 md:w-8/12 mx-auto">
                      <div className="form-input-wrapper border-round p-4">
                        {netlify.success && (
                          <div className="bg-[#38fa8c] text-center border-[#229a2a] rounded-sm border p-4">
                            <p className="text-[#229a2a] font-bold">
                              {isSpanish
                                ? "¡Formulario enviado con éxito!"
                                : "Successfully submitted form!"}
                            </p>
                          </div>
                        )}
                        {netlify.error && (
                          <p>
                            Sorry, we could not reach servers. Because it only
                            works on Netlify, our GitHub demo does not provide a
                            response.
                          </p>
                        )}

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                              type="email"
                              id="email"
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: EMAIL_REGEX,
                                  message: "Invalid email address",
                                },
                              })}
                              className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                              placeholder="you@example.com"
                              defaultValue="adamwathan"
                              aria-invalid="true"
                              aria-describedby="email-error"
                            />
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
                          </div>
                          <p
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            Not a valid email address.
                          </p>
                        </div>

                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            {isSpanish ? "Nombre" : "Name"}
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              {...register("name", {
                                required: "Name is required",
                              })}
                              id="name"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="you@gmail.com"
                            />
                          </div>
                        </div>

                        <div>
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
                              {...register("phone", {
                                required: "phone is required",
                              })}
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="you@gmail.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            {isSpanish ? "Mensaje" : "Message"}
                          </label>
                          <div className="mt-2">
                            <textarea
                              rows={4}
                              {...register("message", {
                                required: "Message is required",
                              })}
                              name="message"
                              id="message"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            {isSpanish ? "Enviar" : "Submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </NetlifyFormComponent>
              </NetlifyFormProvider>

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
