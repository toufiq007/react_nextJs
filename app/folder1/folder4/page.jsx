import Link from "next/link";

const Folder4 = () => {
  return (
    <div>
      <h2 className="text-3xl">this is folder 4</h2>
      <Link href="/folder1/folder3" className="text-green-400">go to folder 3</Link>
    </div>
  );
};

export default Folder4;
