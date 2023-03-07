import AdminDash from "../components/AdminDash";
import useUser from "../hooks/useUser";


const AdminDashboard = () => {
    const {user} = useUser();

    return (
        <>
        <h1>Welcome to the Admin Dashboard! </h1>
        {user && <AdminDash/>}
        </>
    )
}
export default AdminDashboard;