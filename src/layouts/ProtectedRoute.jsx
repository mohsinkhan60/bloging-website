import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";
import { Skeleton } from "../components/ui/Skeletons";

const ProtectedRoute = () => {
  const [status, setStatus] = useState("loading"); // "loading" | "auth" | "unauth"

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setStatus(user ? "auth" : "unauth");
    });
    return () => unsubscribe();
  }, []);

  if (status === "loading") {
    return (
      <div className="bg-canvas-light min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-6">
          <Skeleton className="h-6 w-32 rounded-full" />
          <Skeleton className="h-10 w-64 rounded-app-xs" />
          <Skeleton className="w-full max-w-sm h-56 rounded-marketing" />
          <Skeleton className="h-12 w-full rounded-app-xs" />
          <Skeleton className="h-12 w-full rounded-app-xs" />
          <Skeleton className="h-28 w-full rounded-app-xs" />
        </div>
      </div>
    );
  }

  if (status === "unauth") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
