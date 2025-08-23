import axios from "axios";
import { useNavigate } from "react-router-dom";
import { APIURL } from "../../utills";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${APIURL}/api/v1/user/logout`,
        {
           headers: {
          "Content-Type": "application/json",
        },
        },
        { withCredentials: true }
      );

      // clear all client-side data
      localStorage.clear();
      navigate("/");
      toast.success("successfully logout")
    } catch (err) {
      toast.error("Logout failed:", err.response?.data || err.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
