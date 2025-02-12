import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useAuth()
    const axiossecure = useAxiosSecure()
  const {data : isAdmin, isPending: isAdminLoading} = useQuery({
          queryKey: [user?.email, 'isAdmin'],
          enabled:!loading,
          queryFn: async()=>{
            const res = await axiossecure.get(`/users/adminuser/${user.email}`);
            console.log(res.data);
            return res.data?.admin
          }
  })
  return [isAdmin, isAdminLoading]
};

export default useAdmin;
