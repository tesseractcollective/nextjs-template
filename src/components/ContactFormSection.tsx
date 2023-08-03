import parse from "html-react-parser";
import HubspotForm from "react-hubspot-form";
import JotformEmbed from "react-jotform-embed";
import NetlifyForm from 'react-ssg-netlify-forms'
import React, { useState } from "react"
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
    // Simple controlled form setup (Control your own state)
    const handleChange = (e: { target: { name: any; value: any; }; }) => setFormValues({ ...formValues, [e.target.name]: e.target.value })
    const [formValues, setFormValues] = useState({
      name: '',
      message: '',
      phone: '',
      email: ''
    })
  if (!siteLibrary) return <></>;
  const { isSpanish } = siteLibrary;

    // Post-Submit Navigate
    const postSubmit = () => {
      setFormValues(
        {
          name: '',
          message: '',
          phone: '',
          email: ''
        }
      )
    }
  


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
                  <NetlifyForm formName="Contact" formValues={formValues} postSubmit={postSubmit} >
                        <section className="container flex-column grid mx-auto dark-section">
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
                                    id="Email"
                                    value={formValues.email} onChange={handleChange} 
                                    className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    placeholder="you@example.com"
                                  />
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
                                    value={formValues.name} onChange={handleChange}
                                    id="Name"
                                    className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    placeholder="Name"
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
                                    value={formValues.phone} onChange={handleChange} 
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
                                    value={formValues.message} onChange={handleChange} 
                                    name="Message"
                                    id="Message"
                                    className="block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset ring-dark placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
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
                  </NetlifyForm>
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
