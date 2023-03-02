import Parse from 'parse';

export async function addVoter(ID) {
let user = new Parse.User();
user.set("username", ID);
user.set("password", ID);
user.set("VerificationCode", "");
user.set("Vote", "");
user.set("ProlificID", ID);
try {
  await user.signUp();
} catch (error) {
  return `Could not save new user: ${error}`;
}
}

export default function getCurrentUser() {
  let currentUser = Parse.User.current();
  return currentUser;
}

export async function saveVerificationCode(verificationCode){
  const Voter = getCurrentUser();
  if(Voter.attributes.VerificationCode === ""){
  Voter.set("VerificationCode", verificationCode);
  try{
    await Voter.save();
  }
  catch (error){
    console.log("Error saving verification code: " + error);
  }}
  else{
    alert("You already have a verification code")
  }
}

export async function saveVote(vote, bbVote){
  const Voter = getCurrentUser();
  Voter.set("Vote", vote);
  Voter.set("BBVote", bbVote);
  try{
    await Voter.save();
  }
  catch (error){
    console.log("Error saving vote: " + error);
  }
}


export async function saveReportOfProblem(problem){
  const Voter = getCurrentUser();
  Voter.set("Problem_Reporting", problem);
  try{
    await Voter.save();
  }
  catch(error){
    console.log("Error saving report of problem: " + error);

  }

}




