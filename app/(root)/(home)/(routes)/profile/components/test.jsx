"use client";


import React, { useState } from "react";
import { api } from "~/utils/api";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import PrimaryButton from "~/components/button/PrimaryButton";
import { TextInput } from "~/components/input/TextInput";
import ImageUpload from "~/components/input/ImageUpload";
import RichTextEditor from "~/components/input/RichTextEditor";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  website: Yup.string().required("Required"),
  linkedin: Yup.string().required("Required"),
});

const ListCompany = () => {
  const listCompany = api.company.create.useMutation({
    onSuccess: () => {
      toast.success("Company Listed Successfully");
    },
    onError: () => {
      toast.error("Something went Wrong");
    },
  });
  const [desc, setDesc] = useState("Company Description");
  const [logo, setLogo] = useState("");
  return (
    <main className=" mx-auto w-full max-w-lg px-4 pb-16">
      <h2 className=" py-4 text-[clamp(1rem,6vw,2rem)] font-medium capitalize">
        List New Company
      </h2>
      <Formik
        initialValues={{
          name: "",
          website: "",
          linkedin: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values) => {
          if (!logo) toast.error("Fills all the fields");
          if (logo) {
            void listCompany.mutate({
              name: values.name,
              desc: desc,
              logo: logo,
              website: values.website,
              linkedin: values.linkedin,
            });
          }
        }}
      >
        <Form className=" grid gap-4">
          <ImageUpload onChange={(base64) => setLogo(base64)} />

          <Field
            component={TextInput}
            name="name"
            id="name"
            title="name"
            placeholder="Apple"
          />

          <RichTextEditor
            title="Company Description"
            value={desc}
            onChange={setDesc}
          />

          <Field
            component={TextInput}
            name="website"
            id="website"
            title="Company website"
            placeholder="Company website"
          />
          <Field
            component={TextInput}
            name="linkedin"
            id="linkedin"
            title="Company linkedin"
            placeholder="Company linkedin"
          />

          <PrimaryButton
            disable={listCompany.isLoading}
            loading={listCompany.isLoading}
            className="mt-4"
          >
            Submit
          </PrimaryButton>
        </Form>
      </Formik>
    </main>
  );
};

export default api.withTRPC(ListCompany);
