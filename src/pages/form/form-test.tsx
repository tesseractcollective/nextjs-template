import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

type FormikShape = {
  Name: string;
  Email: string;
  Phone: string;
  Message: string;
};

const FormTest = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const handleSubmit = (values: FormikShape) => {
    setIsSubmitted(true);
    let url =
      "https://docs.google.com/forms/d/1iK-ZxPZ1CW_dzUY3hW-AhkDJdOND5lg46tyVH0ueOUg/formResponse?usp=pp_url&";
    [
      ["entry.1794276203", values.Name],
      ["entry.1965148749", values.Email],
      ["entry.1311838583", values.Phone],
      ["entry.2047319632", values.Message],
      ["submit", "Submit"],
    ].forEach((entry) => (url = `${url}&${entry[0]}=${encodeURI(entry[1])}`));
    const request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    request.send(null);
  };

  return (
    <>
      {isSubmitted ? (
        <div className="bg-[#38fa8c] text-center border-[#229a2a] rounded-sm border p-4">
          <p className="text-[#229a2a]">Successfully submitted form!</p>
        </div>
      ) : (
        <Formik
          initialValues={{
            Name: "",
            Email: "",
            Phone: "",
            Message: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col px-4 w-full mx-auto">
            <label htmlFor="Name">First Name</label>
            <Field id="Name" name="Name" placeholder="Name" />

            <label htmlFor="Phone">Last Name</label>
            <Field id="Phone" name="Phone" placeholder="Phone" />

            <label htmlFor="Email">Email</label>
            <Field
              id="Email"
              name="Email"
              placeholder="jane@acme.com"
              type="Email"
            />
            <label htmlFor="Message">Last Name</label>
            <Field id="Message" name="Message" placeholder="Message" />
            <button
              type="submit"
              className="bg-primary-fade text-center border-primary rounded-sm border p-4"
            >
              Submit
            </button>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default FormTest;
