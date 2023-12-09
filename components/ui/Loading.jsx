import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed flex h-full w-full items-center justify-center">
      <span>
        <PuffLoader size={22} color="#7367f0" />
      </span>
    </div>
  );
};

export default Loader;
