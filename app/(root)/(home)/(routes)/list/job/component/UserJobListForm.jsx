import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { JobType, WorkPlace } from "@prisma/client";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import RichTextEditor from "@/components/input/RichTextEditor";
import PrimaryButton from "@/components/button/PrimaryButton";
import Loader from "@/components/ui/Loading";
import { TextInput } from "@/components/input/TextInput";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  education: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  role: Yup.string().required("Required"),
  salary: Yup.number().min(0, "Salary can be negative ???"),
  companyId: Yup.string().required("Required"),
  applyUrl: Yup.string().required("Required"),
  subCategoryId: Yup.string().required("Required"),
  categoryId: Yup.string().required("Required"),
});

function UserJobListForm() {
  const { data: session } = useSession();

  const [desc, setDesc] = useState(
    "Job Listing Description Such as Skills role responsibility"
  );

  const [applyInstruction, setApplyInstruction] = useState("");



  return (
    <Formik
      initialValues={{
        title: undefined,
        type: "FULL_TIME",
        education: "Any Graduate",
        role: undefined,
        workPlace: "REMOTE",
        location: undefined,
        categoryId: undefined,
        subCategoryId: undefined,
        applyUrl: undefined,
        companyId: undefined,
      }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values) => {
        listJob.mutate({
          title: values.title,
          desc: desc,
          type: values.type,
          education: values.education,
          role: values.role,
          experienceMin: values.experienceMin,
          experienceMax: values.experienceMax,
          salary: values.salary,
          workPlace: values.workPlace,
          location: values.location,
          companyId: values.companyId,
          categoryId: values.categoryId,
          subCategoryId: values.subCategoryId,
          applyUrl: values.applyUrl,
          applyEmail: values.applyEmail,
          applyInstruction: applyInstruction,
          userId: session.user.id,
        });
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="grid gap-6 md:grid-cols-2">
          <div className="grid h-fit gap-4">
            <Field
              component={TextInput}
              name="title"
              id="title"
              title="title"
              placeholder="Job Title"
            />

            <RichTextEditor
              value={desc}
              onChange={setDesc}
              title="Job Description"
            />

           {/* {companies && (
              <SelectV1
                options={companies}
                name="companyId"
                title="Select Company *"
              />
           )}

            <div className="grid grid-cols-2 gap-4">
              {categories && (
                <SelectV1
                  options={categories}
                  name="categoryId"
                  title="Job Department *"
                />
              )}
              {subCategories && (
                <SelectV1
                  options={subCategories}
                  name="subCategoryId"
                  title="Job Role Position"
                />
              )}
              </div>*/}

            <Field
              component={TextInput}
              name="education"
              id="education"
              title="education"
              placeholder="Any / Btech / MCA"
            />
            <Field
              component={TextInput}
              name="role"
              id="role"
              title="role"
              placeholder="SDE 1 ~ / Web Developer / Driver 🫥 "
            />
          </div>

          <div className=" grid items-start gap-4">
            <div className="grid grid-cols-2 gap-4">
            
              <Field
                component={TextInput}
                name="salary"
                id="salary"
                title="Salary LPA"
                type="number"
                placeholder="Salary"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field
                component={TextInput}
                name="experienceMin"
                id="experienceMin"
                title="experience Min"
                type="number"
                placeholder="0 | > 0"
              />

              <Field
                component={TextInput}
                name="experienceMax"
                id="experienceMax"
                title="experience Max"
                type="number"
                placeholder="Maximum experience"
              />
            </div>
            <Field
              component={TextInput}
              name="applyUrl"
              id="applyUrl"
              title="Apply Url"
              placeholder="https://company.com/jobid/apply"
            />
            <Field
              component={TextInput}
              name="applyEmail"
              id="applyEmail"
              title="Apply Email"
              placeholder="Apply Email if any"
            />
            <RichTextEditor
              value={applyInstruction}
              title="Apply Instruction (if any)"
              onChange={setApplyInstruction}
            />
            <PrimaryButton className=" my-4 w-full" type="submit">
              List
            </PrimaryButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default UserJobListForm;
