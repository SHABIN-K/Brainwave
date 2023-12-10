import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({
  value,
  title,
  onChange,
}) => {
  return (
    <div className=" resize pb-4">
      {title && (
        <h2 className=" pb-1  text-xs capitalize text-gray-600 dark:text-gray-100">
          {title}
        </h2>
      )}
      <ReactQuill
        value={value}
        style={{
          height: "240px",
        }}
        onChange={onChange}
        className="resize bg-white pb-10"
      />
    </div>
  );
};

export default RichTextEditor;
