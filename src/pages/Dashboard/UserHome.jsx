import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";

const UserHome = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h3 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h3>
        </div>
    );
};

export default UserHome;