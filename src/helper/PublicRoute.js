import { useLocation } from 'react-router-dom';

export const usePublicRoutes = () => {
  const location = useLocation();
  return location.pathname.includes("seller-dashboard");
};