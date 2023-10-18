import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";
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
              className="bg-primary text-center border-primary rounded-sm border p-4 mt-24  max-w-xs"
            >
              Submit
            </button>
          </Form>
        </Formik>
      )}
      <div className="max-w-4xl hover:bg-secondary text-justify -z-1 h-52 flex-col-reverse"></div>
      <div className="hidden  h-screen opacity-0 xl:w-3/12 -mt-12 text-7xl -bottom-40 max-w-md mr-8 md:mr-16 sm:mr-4 xs:mr-0 md:text-8xl sm:text-6xl xl:text-8xl"></div>
      <div className="hidden h-240 bg-white xl:w-6/12 xl:w-12/12 max-w-xl -mt-24 text-6xl font-light -bottom-32"></div>
      <div className="hidden h-256 opacity-0 bg-white xl:w-12/12 max-w-2xl text-5xl italic  -mt-32  -bottom-24"></div>
      <div className="hidden h-256 opacity-0 bg-white xl:w-12/12 max-w-4xl text-4xl italic  -bottom-16   -mt-48 "></div>
      <div className="hidden h-60 opacity-0 bg-white xl:w-12/12 max-w-3xl italic  mt-32 text-9xl -mb-24  -bottom-72 gap-y-32"></div>
      <div className="hidden h-256 opacity-0 bg-white max-w-2xl italic -mt-72 text-8xl  -bottom-52 gap-y-8 "></div>
      <div className="hidden col-span-2 h-256 opacity-0 bg-white xl:w-12/12 italic  -mt-52 text-8xl rounded-r-lg -ml-24 -bottom-60 flex-col-reverse gap-y-16 max-w-6xl whitespace-nowrap"></div>
      <div className="hidden col-span-2 h-256 opacity-0 bg-white xl:w-12/12 italic  -mt-52 text-8xl rounded-r-lg -ml-24 top-0 py-12 whitespace-nowrap -bottom-60 flex-col-reverse max-w-sm gap-y-16 z-0"></div>
    </>
  );
};

export default FormTest;
