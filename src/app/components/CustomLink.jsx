import Link from "next/link";

const CustomLink = () => {
  return (
    <div className="flex flex-col">
      <Link
        className="bg-blue-200 text-black my-5 px-2 py-1"
        href="/admin/dashboard"
      >
        Go to admin dashboard
      </Link>
      <Link
        className="bg-blue-200 text-black my-5 px-2 py-1"
        href={`/user/profile/${1}`}
      >
        Go to User Profile
      </Link>
    </div>
  );
};

export default CustomLink;
