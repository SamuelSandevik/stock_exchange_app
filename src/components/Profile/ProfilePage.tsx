import axios from "axios";
import { useEffect, useState } from "react";
import "./ProfileScss/_profile.scss";
import { IonIcon } from "@ionic/react";
import { arrowForwardSharp, exit, person, trendingUpOutline, wallet } from 'ionicons/icons';
import { useNavigate } from "react-router";
import useAuth from "../../services/useAuth";




const ProfilePage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    created: "",
  });
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
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
      setIsLoggedIn(false);
      // Handle the logout actions here, like updating the state or redirecting
      
      navigate("/");

    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const response = await fetch("http://localhost:3000/check-auth", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          setAuthorized(true);
        } else {
          navigate("/signUpForm");
        }
      } catch (error) {
        console.error("Authorization check failed:", error);
        navigate("/signUpForm");
      }
    };

    checkAuthorization();
  }, [navigate]);

  const goToEditProfile = () => {
    navigate("/edit-profile");
  }

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
        navigate("/foryou");
      },
    },
    {
      icon: wallet,
      title: "Go to portfolio",
      arrowicon: arrowForwardSharp,
      color: "white",
      action: () => {
        navigate("/portfolio");
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


  return authorized ? (

    <div className="profileContainer">
      <div className="topProfile">
        <IonIcon icon={person} style={{ fontSize: '80px', color: 'white' }}></IonIcon>
        <p className="userName">@{user.username}</p>
        <p className="userEmail">{user.email}</p>
        <button className="editProfileBtn" onClick={goToEditProfile}>Edit Profile</button>
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

  ) : null;
};

export default ProfilePage;


