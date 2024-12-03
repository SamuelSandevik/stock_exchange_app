import axios from "axios";
import { useEffect, useState } from "react";
import "./ProfileScss/_profile.scss";
import { format } from "date-fns";

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    created: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/userInfo", {
          withCredentials: true,
        });
        setUser({
          username: response.data.username,
          email: response.data.email,
          created: response.data.created,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const notFormattedDate = user.created;

  const formatDate = (isoString: string | number | Date) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <div style={{ color: "white" }}>Profile</div>
      <p>Username:</p>
      <p>{user.username}</p>
      <p>Email:</p>
      <p>{user.email}</p>
      <p>Joined SillyStocks:</p>
      <p>{formatDate(notFormattedDate)}</p>
    </>
  );
};

export default ProfilePage;
