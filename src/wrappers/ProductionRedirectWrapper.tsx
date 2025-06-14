// src/wrappers/ProductionRedirect.tsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isProduction } from "../hooks/helper";

const isProductionEnv = !isProduction() ;

export default function ProductionRedirect({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [allowRender, setAllowRender] = useState(false);

  useEffect(() => {
    if (isProductionEnv) {
      if (location.pathname !== "/contact") {
        navigate("/contact", { replace: true });
      } else {
        setAllowRender(true);
      }
    } else {
      setAllowRender(true); // In dev, allow everything
    }
  }, [location, navigate]);

  if (!allowRender) {
    return null; // Or return a loading spinner if preferred
  }

  return <>{children}</>;
}
