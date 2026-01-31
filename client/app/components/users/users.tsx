"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
}

export default function UserData() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setData(data);
        console.log("Data fetching from backend side to frontend side: ", data);
      } catch (error) {
        console.log("error occured in this field: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="text-white p-4">
      <h1 className="text-xl py-6">Users List</h1>
      {data.map((user) => (
        <div
          key={user.id}
          className="border border-gray-400 rounded-lg p-4 mb-4">
          <h2>
            {user.name} ({user.username})
          </h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>

          <div>
            <strong>Address:</strong>
            <p>
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
          </div>

          <div>
            <strong>Company:</strong>
            <p>
              {user.company.name} - {user.company.catchPhrase}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
