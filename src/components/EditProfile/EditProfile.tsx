import axios from "axios";
import { useState } from "react";
import "./scss/_editProfile.scss";
import HeaderPage from "../HeaderPage/HeaderPage";
import BottomNavbar from "../BottomNavbar/BottomNavBar";

const EditProfile = () => {
  const [userName, setUserName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [currentUserName, setCurrentUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");

  const editEmail = async (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://silly-stocks-server.onrender.com/updateEmail",
        {
          userName,
          currentEmail,
          newEmail,
        },
        {
          withCredentials: true, // Viktigt för att skicka cookies
        }
      );
      setStatus(response.data.message || "Email updated successfully!");
      console.log("Request payload:", { userName, currentEmail, newEmail });
    } catch (error: any) {
      setStatus(error.response?.data?.message || "Error updating email.");
    }
  };

  const editUserName = async (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://silly-stocks-server.onrender.com/updateUserName",
        {
          email,
          newUserName,
          currentUserName,
        },
        {
          withCredentials: true, // Viktigt för att skicka cookies
        }
      );
      setStatus(response.data.message || "Username updated successfully!");
      console.log("Request payload:", { email, currentUserName, newUserName });
    } catch (error: any) {
      setStatus(error.response?.data?.message || "Error updating username.");
    }
  };

  return (
    <>
      <div className="edit-page">
          <h1>Edit Profile</h1>
        <div className="edit-profile-container">

          <div className="username-container">
            <div className="edit-header-container">
              <p className="edit-header">Update Username</p>
            </div>
            <form onSubmit={editUserName}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
                className="change-form-input"
              />
              <input
                type="text"
                value={currentUserName}
                onChange={(e) => setCurrentUserName(e.target.value)}
                required
                placeholder="Current username"
                className="change-form-input"
              />
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                required
                placeholder="New username"
                className="change-form-input"
              />

              <button type="submit">Update</button>
            </form>
          </div>

          <div className="email-container">
            <div className="edit-header-container">
              <p className="edit-header">Update Email </p>
            </div>

            <form onSubmit={editEmail}>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                placeholder="Username"
                className="change-form-input"
              />
              <input
                type="email"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                required
                placeholder="Current email"
                className="change-form-input"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
                placeholder="New email"
                className="change-form-input"
              />

              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default EditProfile;
