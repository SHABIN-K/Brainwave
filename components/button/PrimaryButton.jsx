import { motion } from "framer-motion";
import React from "react";
import { PuffLoader } from "react-spinners";

const PrimaryButton = ({
  type = undefined,
  children,
  disable = false,
  loadingText = "",
  loading = false,
  onClick,
  title = "",
  className = "",
}) => {
  return (
    <motion.button
      type={type}
      style={{}}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        opacity: 0.7,
        scale: 1.02,
      }}
      whileTap={{
        scale: [1, 1.02, 1],
      }}
      title={title}
      disabled={disable}
      className={`text-white ${className} flex   items-center justify-center  rounded-full bg-dark-500 py-2.5 px-4 capitalize  `}
      onClick={onClick}
    >
      {loading ? (
        <>
          <p className=" flex items-center gap-4 px-4">
            <PuffLoader size={22} color="white" />
            {loadingText}
          </p>
        </>
      ) : (
        <>{children}</>
      )}
    </motion.button>
  );
};

export default PrimaryButton;
