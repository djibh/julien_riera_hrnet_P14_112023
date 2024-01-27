import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import { User } from "../types"

const INITIAL_USER: User = {
    id: "",
    name: "",
    username: "",
    email: "",
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAuthUser: async () => false as boolean,
};

type ContextType = {
    user: User;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
};

const AuthContext = createContext<ContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>(INITIAL_USER);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            // const currentAccount = await getCurrentUser();
            const currentAccount = INITIAL_USER; //FIXME - temporary
            if (currentAccount) {
                setUser({
                    id: currentAccount.id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                });
                setIsAuthenticated(true);

                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const cookieFallback = localStorage.getItem("cookieFallback");
        if (
            cookieFallback === "[]" ||
            cookieFallback === null ||
            cookieFallback === undefined
        ) {
            navigate("/"); //FIXME - Temporary
        }

        checkAuthUser();
    }, [navigate]);

    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
    };

    return <AuthContext.Provider value={ value }>{ children }</AuthContext.Provider>;
}

// export const useUserContext = () => useContext(AuthContext);