import { createContext } from "react";

// Actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});


export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  )
}