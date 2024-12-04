import Link from "next/link";
import React from "react";

const Folder1 = () => {
  return (
    <div>
      <div className="p-10 flex flex-col gap-10">
        <h2 className="text-3xl">folder 1</h2>
        <Link href="/folder1/folder2" className="text-blue-400">go to folder 2</Link>
      </div>
    </div>
  );
};

export default Folder1;
