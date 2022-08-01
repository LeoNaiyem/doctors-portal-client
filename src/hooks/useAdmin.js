import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://vast-plateau-43537.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [isAdmin, adminLoading];
};
export default useAdmin;
