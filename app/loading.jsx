import Spinner from "./Components/Shared/Spinner";
const Loading = () => {
  return (
    <div className="flex bg-[#ffffff4f] items-center justify-center min-h-[calc(100vh-400px)]">
      <Spinner />
    </div>
  );
};

export default Loading;
