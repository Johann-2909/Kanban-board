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
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <User
              id={user.id}
              name={user.name}
              username={user.username}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
