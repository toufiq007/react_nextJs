const AdminHeader = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-x-5 text-xl bg-blue-200 p-5 text-black ">
          <li className="cursor-pointer">Dashbaord</li>
          <li className="cursor-pointer">Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;
