/* eslint-disable react/no-unescaped-entities */

import FormInput from '@/components/input/FormInput';
import { useState } from 'react';
const UserPostedJobs = () => {
  const [zip, setZip] = useState('');
  const [Age, setAge] = useState('');
  const [about, setAbout] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const styleEditProfile = {
    classlabel: 'block text-sm font-medium leading-6 text-gray-900 capitalize ',
    classInput:
      'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
  };

  const handleSubmit = () => {
    console.log('hello world!');
  };

  const handleClear = () => {
    setZip('');
    setAge('');
    setAbout('');
    setEmail('');
    setRegion('');
    setUsername('');
    setLastname('');
    setFirstName('');
    setMobilenumber('');
    setStreetAddress('');
    setSelectedGender('');
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    toss.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <FormInput
                label="first-name"
                type="text"
                name="first-name"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                classLabel={styleEditProfile.classlabel}
                classInput={`${styleEditProfile.classInput} mt-2`}
              />
            </div>

            <div className="sm:col-span-2">
              <FormInput
                label="last-name"
                type="text"
                name="last-name"
                autoComplete="family-name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                classLabel={styleEditProfile.classlabel}
                classInput={`${styleEditProfile.classInput} mt-2`}
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
                classLabel={styleEditProfile.classlabel}
                classInput={`${styleEditProfile.classInput} mt-2`}
              />
            </div>

            <div className="sm:col-span-4 ">
              <div>
                <div className="flex ">
                  <div className="sm:col-span-5">
                    <FormInput
                      label="Age"
                      type="number"
                      name="Age"
                      value={Age}
                      onChange={(e) => setAge(e.target.value)}
                      classLabel={styleEditProfile.classlabel}
                      classInput={`${styleEditProfile.classInput} mt-2`}
                    />
                  </div>
                  <div className="space-x-5 pl-10">
                    <label
                      htmlFor="Gender"
                      className="block text-sm font-medium leading-6 text-gray-900 ml-5"
                    >
                      Gender
                    </label>
                    <div className="mt-3 space-x-3">
                      <label>
                        <input
                          type="radio"
                          value="male"
                          checked={selectedGender === 'male'}
                          onChange={handleGenderChange}
                        />
                        Male
                      </label>

                      <label>
                        <input
                          type="radio"
                          value="female"
                          checked={selectedGender === 'female'}
                          onChange={handleGenderChange}
                        />
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-2">
                <FormInput
                  label="street address"
                  type="text"
                  name="street-address"
                  autoComplete="street-address"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  classLabel={styleEditProfile.classlabel}
                  classInput={`${styleEditProfile.classInput} mt-2`}
                />
              </div>
              <div className="flex flex-wrap justify-between mt-3">
                <div className="sm:col-span-2 sm:col-start-1">
                  <FormInput
                    label="mobile number"
                    type="number"
                    name="mobile number"
                    autoComplete="address-level2"
                    value={mobilenumber}
                    onChange={(e) => setMobilenumber(e.target.value)}
                    classLabel={styleEditProfile.classlabel}
                    classInput={`${styleEditProfile.classInput} mt-2`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <FormInput
                    label="region"
                    type="text"
                    name="region"
                    autoComplete="address-level1"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    classLabel={styleEditProfile.classlabel}
                    classInput={`${styleEditProfile.classInput} mt-2`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <FormInput
                    label="ZIP / Postal code"
                    type="number"
                    name="postal-code"
                    autoComplete="postal-code"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    classLabel={styleEditProfile.classlabel}
                    classInput={`${styleEditProfile.classInput} mt-2`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleClear}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserPostedJobs;
