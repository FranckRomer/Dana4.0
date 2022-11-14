import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Headers from "../component/Headers/Headers";

function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get("/api/profile");
    setUser(profile.data);
  };

  const logout = async () => {
    try {
      await axios.get("/api/auth/logout");
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  };
  return (
    <div>
      <Headers />
      {JSON.stringify(user)}
      <button onClick={() => getProfile()}>profile</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
