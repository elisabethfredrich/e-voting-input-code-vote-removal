/**
 * Copyright 2023 Christina Frederikke Nissen, Elisabeth Fredrich
 *
 * This file is part of  e-voting-system-self-remove.
 *
 *  e-voting-system-self-remove is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 *  e-voting-system-self-remove is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with  e-voting-system-self-remove. If not, see <https://www.gnu.org/licenses/>.
 */

import Parse from "parse";

export async function addVoter(ID) {
  let user = new Parse.User();
  user.set("username", ID);
  user.set("password", ID);
  user.set("VerificationCode", "");
  user.set("Vote", "");
  await user.signUp();
}

export async function loginVoter(ID) {
  await Parse.User.logIn(ID, ID);
}

export default function getCurrentUser() {
  let currentUser = Parse.User.current();
  return currentUser;
}

export async function saveVerificationCode(verificationCode) {
  const Voter = getCurrentUser();
    Voter.set("VerificationCode", verificationCode);
    await Voter.save();
}

export async function saveVote(vote) {
  const Voter = getCurrentUser();
  Voter.set("Vote", vote);
  try {
    await Voter.save();
  } catch (error) {
    console.log("Error saving vote: " + error);
  }
}

export async function saveReportOfProblem(problem) {
  const Voter = getCurrentUser();
  Voter.set("Problem_Reporting", problem);
  try {
    await Voter.save();
  } catch (error) {
    console.log("Error saving report of problem: " + error);
  }
}

export async function getNumberOfVoters(){
  const query = new Parse.Query('User');
    try {
      const count = await query.count();
      console.log(`ParseObjects found: ${count}`);
      return count;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
}
