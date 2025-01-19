"use client"

import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "@/src/auth/firebaseFunctions";
import { loginAction, logoutAction } from "@/src/app/actions";

export const AuthContext = createContext<{user: User | null}>({user: null});

export const useAuthContext = () => useContext(AuthContext);

/**
 * Provides authentication context for the entire application in question.
 * When the authentication state for the user changes, it triggers a login/logout server action
 * (whichever is appropriate given what happens) which binds a cookie to the user's browser..
 *
 * @param children
 * @constructor
 */
export function AuthContextProvider({
  children,
}: {
  children?: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        await loginAction(await user.getIdToken())
      } else {
        setUser(null);
        await logoutAction();
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div></div> : children}
    </AuthContext.Provider>
  );
}
