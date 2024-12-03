import axios from "axios";
import { useEffect, useState } from "react";
import "./ProfileScss/_profile.scss";
import { IonIcon } from "@ionic/react";
import { arrowForwardSharp, exit, person, trendingUpOutline, wallet } from 'ionicons/icons';
import { useNavigate } from "react-router";




const ProfilePage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    created: "",
  });
  const navigate = useNavigate();
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

  const handleLogout = async () => {

    // Call handleLogout for logout actions
    try {
      await fetch("http://localhost:3000/logout", {
        method: "GET",
        credentials: "include",
      });
      // Handle the logout actions here, like updating the state or redirecting
      console.log("Logged out successfully");
      navigate("/");

    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const notFormattedDate = user.created;

  const formatDate = (isoString: string | number | Date) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const navigateSections = [
    {
      icon: trendingUpOutline,
      title: "Go to saved stocks",
      arrowicon: arrowForwardSharp,
      color: "white",
      action: () => {
        console.log("Navigate to saved stocks");
        // Add navigation logic here
      },
    },
    {
      icon: wallet,
      title: "Go to portfolio * Under Dev",
      arrowicon: arrowForwardSharp,
      color: "white",
      action: () => {
        console.log("Navigate to portfolio");
        // Add navigation logic here
      },
    },
    {
      icon: person,
      title: "Log out",
      arrowicon: exit,
      color: "red",
      action: handleLogout, // Correct: Pass the function reference
    },
  ];


  return (

    <div className="profileContainer">
      <div className="topProfile">
        <IonIcon icon={person} style={{ fontSize: '80px', color: 'white' }}></IonIcon>
        <p className="userName">@{user.username}</p>
        <p className="userEmail">{user.email}</p>
        <button className="editProfileBtn">Edit Profile</button>
        <div className="wallet">
          <IonIcon className="walletIcon" icon={wallet} style={{ fontSize: '20px', color: 'white' }}></IonIcon>
          <p className="walletValue">$10 000</p>
        </div>
      </div>
      <div className="navigateSection">
        {navigateSections.map((navs, index) => (
          <div key={index} className="navigateSubSection">
            <IonIcon icon={navs.icon} style={{ fontSize: '30px', color: navs.color }} />
            <p className="navsText" style={{ color: navs.color }}>{navs.title}</p>
            <IonIcon
              icon={navs.arrowicon}
              style={{ fontSize: '30px', color: navs.color }}
              onClick={navs.action}
            />
          </div>
        ))}
      </div>

      <p className="joinDate">User since: {formatDate(notFormattedDate)}</p>

    </div>

  );
};

export default ProfilePage;
