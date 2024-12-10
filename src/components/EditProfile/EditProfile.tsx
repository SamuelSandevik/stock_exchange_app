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
  const [isUsernameVisible, setUsernameVisible] = useState(true);
  const [isEmailVisible, setEmailVisible] = useState(false);

  const editEmail = async (
    e: React.MouseEvent<HTMLFormElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3000/updateEmail",
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
        "http://localhost:3000/updateUserName",
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
  const toggleUsernameVisibility = () => {
    setUsernameVisible(!isUsernameVisible);
  };

  const toggleEmailVisibility = () => {
    setEmailVisible(!isEmailVisible);
  };

  return (
    <>
      <HeaderPage />
      <div className="edit-page">
        <div className="edit-profile-container">
          <h1>Edit Profile</h1>

          <p onClick={toggleUsernameVisibility}>
            <div className="edit-header-container">
              <p className="edit-header">Update Username</p>
              <i
                className={`fa-solid ${
                  isUsernameVisible ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>
          </p>
          {isUsernameVisible && (
            <form onSubmit={editUserName}>
              <p>Email:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p>Current username:</p>
              <input
                type="text"
                value={currentUserName}
                onChange={(e) => setCurrentUserName(e.target.value)}
                required
              />
              <p>New username:</p>
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                required
              />

              <button type="submit">Update</button>
            </form>
          )}

          <p onClick={toggleEmailVisibility}>
            
              <div className="edit-header-container">
                <p className="edit-header">Update Email </p>{" "}
                <i className={`fa-solid ${isEmailVisible ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              </div>
          </p>
          {isEmailVisible && (
            <form onSubmit={editEmail}>
              <p>Username:</p>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <p>Current email:</p>
              <input
                type="email"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
                required
              />
              <p>New email:</p>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />

              <button type="submit">Update</button>
            </form>
          )}
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default EditProfile;
