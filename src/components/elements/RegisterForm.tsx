import React, { useState } from "react";
import parse from "html-react-parser";
import { Formik, Field, Form } from "formik";
import type { SiteLibraryFieldsFragment } from "@/graphql/generated/graphql";
import ReactGA from "react-ga4";
import ConfettiExplosion from "react-confetti-explosion";
import LinkItem from "@/components/LinkItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type FormikShape = {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Message: string;
  Dob: string;
  Address: string;
  Apt: string;
  City: string;
  Zip: string;
  State: string;
  SiteEmail: string;
  Website: string;
};

type registerFormDataType = {
  cssClass: string;
  description: string;
  postDescription?: string;
  title: string;
};

interface ContactFormProps {
  siteLibrary: SiteLibraryFieldsFragment;
  registerFormData: registerFormDataType;
}

export default function RegisterForm({
  registerFormData,
  siteLibrary,
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isExploding, setIsExploding] = React.useState(false);
  const [IsAptFieldVisible, setIsAptFieldVisible] = React.useState(false);
  const handleSubmit = (values: FormikShape) => {
    setIsSubmitted(true);
    setIsExploding(true);
    let url =
      "https://docs.google.com/forms/d/1QvOXFeDq1ASGWx34uJNYYqQmdk6wNJvCYM5N5n8hXQE/formResponse?usp=pp_url&";
    [
      ["entry.1378036436", values.FirstName],
      ["entry.1086317903", values.LastName],
      ["entry.1866601007", values.Email],
      ["entry.1183470347", values.Phone],
      ["entry.1686114184", values.Message],
      ["entry.1383897448", values.Address],
      ["entry.684293903", values.Apt],
      ["entry.1213477454", values.Dob],
      ["entry.285760279", values.City],
      ["entry.1340502876", values.Zip],
      ["entry.1528426119", values.State],
      ["entry.106493557", values.SiteEmail],
      ["entry.49410650", values.Website],
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
      action: `${values.FirstName}: Submitted Form`,
      label: `${values.FirstName}: Submitted Form`,
    });
  };

  if (!siteLibrary) return <></>;
  const { isSpanish, contactEmail, metaDomain } = siteLibrary;

  return (
    <section className="container grid mx-auto my-16">
      <div className="w-full md:w-8/12 mx-auto">
        <div
          className={`border-round p-2 mx-auto ${
            registerFormData?.cssClass && registerFormData.cssClass
          }`}
        >
          {!!registerFormData?.title && (
            <h3 className="text-2xl md:text-4xl mx-auto opacity-90 uppercase text-center font-bold mt-4 mb-4">
              {parse(registerFormData?.title)}
            </h3>
          )}
          {!!registerFormData?.description && (
            <div className="body-parsed-text text-center mx-auto max-w-3xl mb-0">
              {parse(registerFormData.description)}
            </div>
          )}

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center my-32">
              {isExploding && <ConfettiExplosion />}
              <div className="bg-[#38fa8c] text-center border-[#229a2a] rounded-2xl border p-4 mb-8">
                <p className="text-[#229a2a]">Successfully submitted form!</p>
              </div>
              {!!registerFormData?.postDescription && (
                <div className="body-parsed-text text-center mx-auto max-w-3xl mb-0">
                  {parse(registerFormData.postDescription)}
                </div>
              )}
              <LinkItem
                label="Return Home"
                link="/"
                cssClass="my-8 py-4 px-6 bg-bg-secondary text-primary mx-auto uppercase text-2xl "
              />
            </div>
          ) : (
            <Formik
              initialValues={{
                FirstName: "",
                LastName: "",
                Email: "",
                Phone: "",
                Message: "",
                Dob: "",
                Address: "",
                Apt: "",
                City: "",
                Zip: "",
                State: "",
                SiteEmail: contactEmail || "",
                Website: metaDomain || process.env.SITE_URL || "",
              }}
              onSubmit={handleSubmit}
            >
              <Form
                className="flex flex-col px-4 w-full mx-auto gap-4"
                id="contact"
              >
                <div className="mb-8 gap-4 flex flex-col">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* fname */}
                    <div className="relative mb-2 w-full">
                      <label
                        htmlFor="FirstName"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        {isSpanish ? "Nombre" : "First Name"}
                      </label>
                      <Field
                        id="FirstName"
                        name="FirstName"
                        placeholder={isSpanish ? "Nombre" : "First Name"}
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                      />
                    </div>

                    {/* lname */}
                    <div className="relative mb-2 w-full">
                      <label
                        htmlFor="LastName"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        {isSpanish ? "Apellido" : "Last Name"}
                      </label>
                      <Field
                        id="LastName"
                        name="LastName"
                        placeholder={isSpanish ? "Apellido" : "Last Name"}
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Phone */}
                    <div className="relative mb-2 w-full">
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

                    {/* Email */}
                    <div className="relative mb-2 w-full">
                      <label
                        htmlFor="Email"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        Email
                      </label>
                      <Field
                        id="Email"
                        name="Email"
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                        placeholder="Email"
                        type="Email"
                      />
                    </div>

                    {/* DOB */}
                    <div className="relative mb-2 w-full">
                      <label
                        htmlFor="Dob"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        Date of Birth
                      </label>
                      <Field
                        id="Dob"
                        name="Dob"
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                        placeholder="02/14/1990"
                        type="date"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8 gap-y-1 flex flex-col">
                  <div className="relative mb-2">
                    <label
                      htmlFor="Address"
                      className="text-[10px] uppercase top-2 left-3 absolute"
                    >
                      {isSpanish ? "Dirección" : "Address"}
                    </label>
                    <Field
                      id="Address"
                      name="Address"
                      placeholder={isSpanish ? "Dirección" : "Address"}
                      className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                    />
                  </div>
                  {IsAptFieldVisible && (
                    <div className="relative mb-2 apt-wrapper">
                      <label
                        htmlFor="Apt"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        Address 2
                      </label>
                      <Field
                        id="Apt"
                        name="Apt"
                        placeholder={
                          isSpanish
                            ? "Apartamento, Suite, u Otro (Opcional)"
                            : "Apt, Suite, or Other (Optional)"
                        }
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                      />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsAptFieldVisible(!IsAptFieldVisible)}
                    className="flex flex-row items-center p-1 gap-x-2 text-secondary mb-2 uppercase text-xs max-w-max opacity-90 hover:opacity-100 focus-within:opacity-100 transition-all hover:text-primary focus-within:text-primary hover:bg-bg-secondary focus-within:bg-bg-secondary ml-auto rounded"
                  >
                    <FontAwesomeIcon
                      icon={faTimes as IconProp}
                      className={`fa-fw my-0 py-0 h-4 w-4 transition-all relative ${
                        IsAptFieldVisible ? "rotate-90" : "rotate-45"
                      }`}
                    />
                    <span>
                      {IsAptFieldVisible
                        ? "Close Address 2 Field"
                        : "Add apt, suite, or other (optional)"}
                    </span>
                  </button>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative mb-2 w-full">
                      <label
                        htmlFor="City"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        {isSpanish ? "Ciudad" : "City"}
                      </label>
                      <Field
                        id="City"
                        name="City"
                        placeholder={isSpanish ? "Ciudad" : "City"}
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                      />
                    </div>

                    <div className="relative mb-2 w-full">
                      <label
                        htmlFor="Zip"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        {isSpanish ? "Codigo Postal" : "Zip"}
                      </label>
                      <Field
                        id="Zip"
                        name="Zip"
                        placeholder={isSpanish ? "Codigo Postal" : "Zip"}
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                      />
                    </div>

                    <div className="relative mb-2 w-full">
                      <label
                        htmlFor="State"
                        className="text-[10px] uppercase top-2 left-3 absolute"
                      >
                        {isSpanish ? "Estado" : "State"}
                      </label>
                      <Field
                        id="State"
                        name="State"
                        placeholder={isSpanish ? "Estado" : "State"}
                        className="block w-full rounded-md border-0 pt-5 pr-10 !text-[#000] ring-1 ring-inset focus:ring-2 placeholder-[#3e3e3e5d] focus:ring-inset focus:ring-red-500 sm:leading-6 h-12"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mb-8">
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
                    placeholder={
                      isSpanish
                        ? "Mensaje"
                        : "Favorite plate or drink from BOCADO"
                    }
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
        </div>
      </div>
    </section>
  );
}
