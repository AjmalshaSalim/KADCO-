import React from "react";

const Profile = () => {
  return (
    <div className="w-full bg-slate-100 flex h-80 gap-10">
      <div className=" h-36 m-auto bg-white w-96 rounded-2xl shadow-2xl">
        <div className=" bg-white h-20 w-20 rounded-full overflow-hidden">
          <img
            src="https://www.keralaartisans.com/images/profile1.png"
            alt=""
            className="h-26"
          />
        </div>
        <div className=" h-28 pl-5 pb-5 ">
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia,</p>
        </div>
      </div>

      <div className=" h-40 m-auto rounded-2xl bg-white shadow-2xl w-96">
        <div className=" bg-white h-20 w-20 rounded-full overflow-hidden">
          <img
            src="https://www.keralaartisans.com/images/minprofile.jpg"
            alt=""
            className="h-26"
          />
        </div>
        <div className=" h-28 pl-5 pb-5 ">
          <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia,</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
