import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import FormInput from '../input/FormInput';
import RichTextEditor from '../input/RichTextEditor';

const DialogueBox = ({ isOpen, setIsOpen }) => {
  const [desc, setDesc] = useState('');
  const [email, setEmail] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  const styleEditCompany = {
    classlabel: 'block text-sm font-medium leading-6 text-gray-600 capitalize ',
    classInput:
      'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
  };
  const handleSubmit = () => {
    console.log('hello world!');
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <h2 className=" py-2 text-[clamp(1rem,6vw,2rem)] font-medium capitalize">
                    Add Your Shop
                  </h2>
                  <form>
                    <div className="sm:col-span-2 ">
                      <FormInput
                        label="Company Name"
                        type="text"
                        name="company-name"
                        value={companyname}
                        onChange={(e) => setCompanyname(e.target.value)}
                        classLabel={styleEditCompany.classlabel}
                        classInput={`${styleEditCompany.classInput} mt-2`}
                      />
                    </div>
                    <div>
                      <RichTextEditor
                        title="Company Description"
                        value={desc}
                        onChange={setDesc}
                      />
                    </div>
                    <div className="sm:col-span-4">
                      <FormInput
                        label="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        classLabel={styleEditCompany.classlabel}
                        classInput={`${styleEditCompany.classInput} mt-2`}
                      />
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <FormInput
                        label="mobile number"
                        type="number"
                        name="mobile number"
                        autoComplete="address-level2"
                        value={mobilenumber}
                        onChange={(e) => setMobilenumber(e.target.value)}
                        classLabel={styleEditCompany.classlabel}
                        classInput={`${styleEditCompany.classInput} mt-2`}
                      />
                    </div>
                    <div className="col-span-full mt-2">
                      <FormInput
                        label="address"
                        type="text"
                        name="street-address"
                        autoComplete="street-address"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        classLabel={styleEditCompany.classlabel}
                        classInput={`${styleEditCompany.classInput} mt-2`}
                      />
                    </div>
                    <div className="mt-6 flex px-52 gap-x-6 pl-1">
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="text-white  py-2 px-8 rounded-lg bg-accent-400 hover:bg-accent-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogueBox;
