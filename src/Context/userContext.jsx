import { useContext,createContext,useState } from "react";

export const userContext =  createContext({
    user:null,
    login : ()=>{}
});

export function UserContextProvider({children}){

        const [user,SetUserData] = useState({username:'Guest User',password:''});

        function login(username,password){
            SetUserData({
                username:username,
                password:password
            })
        }

        return (

                <>
                    <userContext.Provider value={{user,login}}>{children}</userContext.Provider>
                </>
        );
}

export function useUserContext(){
    const {user,login} = useContext(userContext);
    return {user,login};
}


