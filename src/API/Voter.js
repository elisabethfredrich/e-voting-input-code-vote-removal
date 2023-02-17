import Parse from "parse";

export async function addVoter(ID, verificationCode, vote) {
  try {
    console.log(`ID: ${ID}, code: ${verificationCode}, vote: ${vote}`);
    const Voter = Parse.Object("Voter");
    Voter.set("ProlificID", ID);
    Voter.set("VerificationCode", verificationCode);
    Voter.set("Vote", vote);
    await Voter.save();
  } catch (error) {
    console.log("Error saving new Voter", error);
  }
}
