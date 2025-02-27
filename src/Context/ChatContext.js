import { createContext, useContext, useReducer} from "react";
import { Authcontext } from "../Context/UserContext";
  
export const ChatContext = createContext();
  
export const ChatContextProvider = ({ children }) => {
    const { user } = useContext(Authcontext);
    const INITIAL_STATE = {
      chatId: "null",
      user1: {},
};
  
const chatReducer = (state, action) => {
      switch (action.type) {
        case "CHANGE_USER":
          return {
            user1: action.payload,
            chatId:
              user.uid > action.payload.uid
                ? user.uid + action.payload.uid
                : action.payload.uid + user.uid,
          };
  
        default:
          return state;
      }
    };
  
const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
    return (
      <ChatContext.Provider value={{ data:state, dispatch }}>
        {children}
      </ChatContext.Provider>
    );
  };