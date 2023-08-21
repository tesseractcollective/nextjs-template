import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useState } from "react";

type FormikShape = {
  FullName: string;
  Email: string;
  Phone: string;
  Message: string;
};

const PodcastQuestion = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const validationSchema = Yup.object().shape<any>({
    FullName: Yup.string().required("Please enter your first name"),
    Email: Yup.string()
      .required("Please enter your email")
      .email("Must be a valid email address."),
    Phone: Yup.string().required("Please enter your first name"),
    Message: Yup.string().required("Please enter your first name"),
  });

  const handleSubmit = (values: FormikShape) => {
    setIsSubmitted(true);
    let url =
      "https://docs.google.com/forms/d/1iK-ZxPZ1CW_dzUY3hW-AhkDJdOND5lg46tyVH0ueOUg/formResponse?usp=pp_url&";
    [
      ["entry.1794276203", values.FullName],
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

  const formikPrimitiveProps = (
    formikProps: FormikProps<FormikShape>,
    field: keyof FormikShape
  ) => {
    const { values, errors, touched, setFieldValue, setFieldTouched } =
      formikProps;
    return {
      value: values[field],
      onChange: (value: any) => setFieldValue(field, value),
      onBlur: () => setFieldTouched(field),
      showError: !!errors[field] && touched[field],
    };
  };

  return (
    <>
      <Formik
        initialValues={
          {
            FullName: "",
            Email: "",
            Phone: "",
            Message: "",
          } as FormikShape
        }
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { touched, handleSubmit } = formikProps;
          return (
            <form onSubmit={handleSubmit}>
              {/* <ErrorWrapper
                field="Name"
                formikProps={touched["Name"] && formikProps}
                className="margin-bottom--16"
              >
                <Input
                  label="First Name"
                  type="text"
                  placeholder="What is your first name?"
                  {...formikPrimitiveProps(formikProps, "Name")}
                />
              </ErrorWrapper> */}
              {/* <ErrorWrapper
                field="Email"
                formikProps={touched["Email"] && formikProps}
                className="margin-bottom--16"
              >
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="What is your email?"
                  {...formikPrimitiveProps(formikProps, "Email")}
                />
              </ErrorWrapper> */}
              {/* <ErrorWrapper
                field="Username"
                formikProps={touched["Phone"] && formikProps}
                className="margin-bottom--16"
              >
                <Input
                  label="TrainerRoad Username"
                  type="text"
                  placeholder="What is your TrainerRoad username? (Optional)"
                  {...formikPrimitiveProps(formikProps, "Phone")}
                />
              </ErrorWrapper> */}
              {/* <ErrorWrapper
                field="Question"
                formikProps={touched["Message"] && formikProps}
                className="margin-bottom--16"
              >
                <Textarea
                  label="Your Question"
                  placeholder="What is your question?"
                  {...formikPrimitiveProps(formikProps, "Message")}
                />
              </ErrorWrapper> */}
              <input
                type="text"
                placeholder="What is your Name? (Optional)"
                {...formikPrimitiveProps(formikProps, "FullName")}
              />
              <input
                type="email"
                placeholder="What is your email? (Optional)"
                {...formikPrimitiveProps(formikProps, "Email")}
              />
              <input
                type="text"
                placeholder="What is your Phone? (Optional)"
                {...formikPrimitiveProps(formikProps, "Phone")}
              />
              <textarea
                placeholder="What is your question?"
                {...formikPrimitiveProps(formikProps, "Message")}
              />
              <button
                type="submit"
                color="red"
                name="submit"
                className="margin-bottom--16"
                disabled={isSubmitted}
              >
                Submit Question
              </button>
            </form>
          );
        }}
      </Formik>
      <Confirmation show={isSubmitted} />
    </>
  );
};

const Confirmation = ({ show }: { show?: boolean }) => (
  <>
    <div className="bg-[#38fa8c] text-center border-[#229a2a] rounded-sm border p-4">
      <p className="text-[#229a2a]">Successfully submitted form!</p>
    </div>
  </>
);

export default PodcastQuestion;
