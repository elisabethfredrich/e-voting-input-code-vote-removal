import Parse from 'parse';

export async function addVoter(ID) {
let user = new Parse.User();
user.set("username", ID);
user.set("password", ID);
user.set("ProlificID", ID);
try {
  await user.signUp();
} catch (error) {
  console.log(`Could not save new user: ${error}`);
}
}

export default function getCurrentUser() {
  let currentUser = Parse.User.current();
  return currentUser;
}

export async function saveVerificationCode(verificationCode){
  const Voter = getCurrentUser();
  Voter.set("VerificationCode", verificationCode);
  try{
    await Voter.save();
    console.log("voter");
  }
  catch (error){
    console.log("Error saving verification code: " + error);
  }
}

export async function saveVote(vote, bbVote){
  const Voter = getCurrentUser();
  Voter.set("Vote", vote);
  Voter.set("BBVote", bbVote);
  try{
    await Voter.save();
    console.log("voter");
  }
  catch (error){
    console.log("Error saving vote: " + error);
  }
}

