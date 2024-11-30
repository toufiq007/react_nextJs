const MyProfile = ({ params }) => {
  console.log(params);
  return (
    <div>
        <h2 className="text-3xl text-red-500">this is user id : {params.id}</h2>
      <h2> this is my profile page</h2>
    </div>
  );
};

export default MyProfile;
