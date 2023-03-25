import { useEffect, useState } from "react";
import axios from "axios";
import "./postview.css"
const PostView = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios("http://localhost:5000/api/v1/notes", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="post-view">
      {userData.data && userData.data.map((user) => (
        <div className="post" key={user._id}>
          <h2 className="post-title">{user.title}</h2>
          <p className="post-description">{user.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostView;
