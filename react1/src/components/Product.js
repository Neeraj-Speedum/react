import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import DetailItem from "./detailItem";

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      // const response = await fetch('https://api.github.com/users');
      const response = await fetch("https://fakestoreapi.com/products/");
      setLoading(false);
      setUsers(await response.json());
    } catch (error) {
      setLoading(false);
      console.log("my error is " + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <DetailItem users={users} />
    </>
  );
};

export default UseEffectAPI;
