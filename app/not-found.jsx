import notFoundImage from "@@/logo/main-logo.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-10 pt-20 text-center">
      <Image
        src={notFoundImage}
        alt="not-found"
        width={600}
        className="max-w-[600px] h-auto mx-auto p-2 rounded-md"
      />
      <Link href="/" className="mt-5 mb-2 inline-block">
        <button className="btn btn-primary bg-blue-500">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
