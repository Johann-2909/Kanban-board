import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Link to={`/users/${user.id}`}>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
            />
          ))}
        </Link>
      </div>
    </>
  );
}

export default Home;
