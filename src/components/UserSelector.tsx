"use client";

import React from "react";
import styled from "styled-components";
import type { User } from "@/types";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
} from "@/mocks/user";

const SelectorContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  padding: 16px;
`;

const Label = styled.label`
  color: #212121;
  font-family: var(--font-source-sans-3), sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

const Select = styled.select`
  background-color: #ffffff;
  border: 1px solid #cecece;
  border-radius: 4px;
  color: #212121;
  cursor: pointer;
  font-family: var(--font-source-sans-3), sans-serif;
  font-size: 14px;
  padding: 8px 12px;

  &:focus {
    border-color: #b00005;
    outline: none;
  }
`;

const userOptions = [
  {
    value: "multiple",
    label: "User with Multiple Subscriptions (RIGHT_1, RIGHT_2)",
    user: USER_WITH_MULTIPLE_SUBSCRIPTION,
  },
  {
    value: "one",
    label: "User with One Subscription (RIGHT_1)",
    user: USER_WITH_ONE_SUBSCRIPTION,
  },
  {
    value: "none",
    label: "User without Subscriptions",
    user: USER_WITHOUT_SUBSCRIPTION,
  },
] as const;

type UserSelectorProps = {
  selectedUser: User;
  onUserChange: (user: User) => void;
};

export default function UserSelector({
  selectedUser,
  onUserChange,
}: UserSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = userOptions.find(
      (option) => option.value === e.target.value
    );
    if (selectedOption) {
      onUserChange(selectedOption.user);
    }
  };

  const currentValue = userOptions.find(
    (option) => option.user.id === selectedUser.id
  )?.value || "multiple";

  return (
    <SelectorContainer>
      <Label htmlFor="user-selector">Select User Profile (for testing):</Label>
      <Select
        id="user-selector"
        value={currentValue}
        onChange={handleChange}
      >
        {userOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectorContainer>
  );
}

