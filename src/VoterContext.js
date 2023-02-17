import { createContext } from "react";

export const VoterContext = createContext({
  id: "",
  setID: () => {},
  verificationCode: "",
  setVerificationCode: () => {},
  vote: "",
  setVote: () => {}
});
