"use client";
import { useRouter } from "next/navigation";
const CustomLinkRouter = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/admin/dashboard")}>
        Go to admin dashboard
      </button>
    </div>
  );
};

export default CustomLinkRouter;
