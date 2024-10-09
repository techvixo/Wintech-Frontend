import Spinner from "./Components/Shared/Spinner";
import TopGap from "./Components/Shared/TopGap/TopGap";
const Loading = () => {
  return (
    <div className="flex bg-[#ffffff4f] items-center pt-32 justify-center min-h-[calc(100vh-400px)]">
      <TopGap></TopGap>
      <Spinner />
    </div>
  );
};

export default Loading;
