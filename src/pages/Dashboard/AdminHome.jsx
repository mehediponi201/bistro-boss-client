import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AdminHome = () => {

    const { user } = useContext(AuthContext);

    const { data: stats,isLoading } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/admin-stats')
            return res.data;
        }
    })

     if (isLoading) return <p>Loading stats...</p>;

    return (
        <div>
            <h3 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h3>
          <div className="mt-10">
              <div className="stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat">
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default AdminHome;