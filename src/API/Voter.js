import Parse from 'parse';

/* export async function addVoter(ID) {
  try {
    console.log(`ID: ${ID}`);
    const Voter = new Parse.Object("Voter");
    Voter.set("ProlificID", ID);
    await Voter.save();
  } catch (error) {
    console.log("Error saving new Voter", error);
  }
} */

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

 export async function getVoter(){
  const Voter = getCurrentUser();
  return Voter;
} 

export async function updateVoter(attribute, value){
  const Voter = await getVoter();
  Voter.set(attribute, value);
  try{
    await Voter.save();
    console.log("voter");
  }
  catch (error){
    console.log("Error updating voter: " + error);
  }
}

