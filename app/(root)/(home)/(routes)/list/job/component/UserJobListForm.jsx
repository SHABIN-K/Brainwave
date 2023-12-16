import PrimaryButton from '@/components/button/PrimaryButton';
import FormInput from '@/components/input/FormInput';
import RichTextEditor from '@/components/input/RichTextEditor';
import React, { useState } from 'react';

const UserJobListForm = () => {
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [education, setEducation] = useState('');
  const [applyEmail, setApplyEmail] = useState('');
  const [applyInstruction, setApplyInstruction] = useState('');


  const styleJobList = {
    classlabel: 'pb-1 text-xs capitalize text-gray-600 dark:text-gray-100',
    classInput:
      'block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
  };

  return (
    <form className="grid gap-6 md:grid-cols-2">
      <div className="grid h-fit gap-4 md:mb-5">
        <FormInput
          label="Title"
          type="text"
          name="job-title"
          autoComplete="job-title"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          classLabel={styleJobList.classlabel}
          classInput={styleJobList.classInput}
        />
        <RichTextEditor value={desc} onChange={setDesc} title="Job Description" />
        <div>
          <FormInput
            label="education"
            type="text"
            name="education"
            autoComplete="education"
            placeholder="Qualification"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            classLabel={styleJobList.classlabel}
            classInput={styleJobList.classInput}
          />
        </div>
      </div>
      <div className="grid items-start gap-4">
        <div className="grid-cols-2 pt-3 gap-4">
          <div className="pr-72">
            <FormInput
              label="Salary"
              type="text"
              name="salary"
              autoComplete="salary"
              placeholder="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              classLabel={styleJobList.classlabel}
              classInput={styleJobList.classInput}
            />
          </div>

          <div className="pr-20">
            <FormInput
              label="Apply Email"
              type="text"
              name="applyEmail"
              autoComplete="applyEmail"
              placeholder="Apply Email if any"
              value={applyEmail}
              onChange={(e) => setApplyEmail(e.target.value)}
              classLabel={styleJobList.classlabel}
              classInput={styleJobList.classInput}
            />
          </div>
          <RichTextEditor
            value={applyInstruction}
            title="Apply Instruction (if any)"
            onChange={setApplyInstruction}
          />
          <PrimaryButton className=" my-4 w-full" type="submit">
            List
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
};

export default UserJobListForm;
