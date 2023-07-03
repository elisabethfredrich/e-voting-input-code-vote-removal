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

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="outer-page-container">
        <div className="inner-page-container-narrow">
          <h1 className="blue-text">Thank you for voting!</h1>
          <Text>
            Once all votes have been counted, the results are published on our
            offical webpage.{" "}
          </Text>
          <Text className="text-margin-top">
            Please use this webpage to check, if your vote has been saved
            correctly by finding your unique verification code.
          </Text>
          <Button className="blue-btn" onClick={() => navigate("/info-2")}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
