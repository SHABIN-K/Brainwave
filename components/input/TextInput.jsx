export const TextInput = ({
    field, // { name, value, onChange, onBlur },
    type = "text",
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => {
    return (
      <>
        <div className="relative mb-2 grid">
          <label
            htmlFor={props.id}
            className=" pb-1  text-xs capitalize text-gray-600 dark:text-gray-100"
          >
            {props.title}
          </label>
          <input
            type={type}
            {...field}
            {...props}
            className={`w-full rounded-md bg-white py-2 pl-4 text-base font-normal text-gray-900 ring-1 ring-gray-500 ring-opacity-25 placeholder:text-sm placeholder:text-gray-400  focus:outline-none focus:ring-2 focus:ring-accent-500 dark:text-gray-50 dark:ring-opacity-50`}
          />
          {touched[field.name] && errors[field.name] && (
            <div className=" absolute -bottom-5 left-2 text-xs font-medium text-red-500">
              {errors[field.name]}
            </div>
          )}
        </div>
      </>
    );
  };
  