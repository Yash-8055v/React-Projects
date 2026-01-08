import React from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children}) => { //! here children are components whom we want to wrap and give access to global context

  const [user, setUser] = React.useState(null);

  return(
    <UserContext. Provider value={{user, setUser}}>  {/*here value are variable we want to give access to children components */}

    {children}

    </UserContext.Provider>

  )
}
export default UserContextProvider