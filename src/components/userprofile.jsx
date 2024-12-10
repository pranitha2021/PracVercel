import React from "react";

function userProfile({ name, age, id, address }) {

  return (
    <>
      <div className="userProfile">
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Id: {Id}</p>
        <p>Address: {address}</p>
      </div>
    </>
  );
}

export default userProfile;