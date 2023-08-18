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
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response: any, context: any) => {
      console.log("Successfully sent form data to Netlify Server");
    },
  });
  const onSubmit = (data: any) => netlify.handleSubmit(null, data);

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
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
              {/* {netlify.success && (
                          <div className="bg-[#38fa8c] text-center border-[#229a2a] rounded-sm border p-4">
                            <p className="text-[#229a2a] font-bold">
                              {isSpanish
                                ? "¡Formulario enviado con éxito!"
                                : "Successfully submitted form!"}
                            </p>
                          </div>
                        )} */}
              <NetlifyFormProvider {...netlify}>
                <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                  <Honeypot />
                  {netlify.success && <p>Thanks for contacting us!</p>}
                  {netlify.error && (
                    <p>
                      Sorry, we could not reach servers. Because it only works
                      on Netlify, our GitHub demo does not provide a response.
                    </p>
                  )}
                  <div>
                    <label htmlFor="email">Email:</label>
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
                    />
                    {errors.email && <div>errors.email.message</div>}
                  </div>
                  <div>
                    <button type="submit">Submit</button>
                    <button
                      type="reset"
                      onClick={() => reset()}
                      sx={{ variant: "buttons.danger" }}
                    >
                      Reset
                    </button>
                  </div>
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
