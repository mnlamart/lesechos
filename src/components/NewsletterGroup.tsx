"use client";

import styled from "styled-components";
import type { NewsletterGroup as NewsletterGroupType, User } from "@/types";
import NewsletterCard from "./NewsletterCard";

const CardsGrid = styled.div`
  align-items: stretch;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(302px, 1fr));
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GroupContainer = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h2`
  color: #212121;
  font-family: var(--font-source-sans-3), sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.257em;
  margin: 0 0 4px 0;
  text-transform: uppercase;
`;

const TitleContainer = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

const Underline = styled.div`
  background-color: #B00005;
  border-radius: 2px;
  height: 4px;
  width: 70px;
`;

type NewsletterGroupProps = {
  group: NewsletterGroupType;
  user: User;
};

export default function NewsletterGroup({
  group,
  user,
}: NewsletterGroupProps) {
  return (
    <GroupContainer>
      <TitleContainer>
        <Title>{group.site}</Title>
        <Underline />
      </TitleContainer>
      <CardsGrid>
        {group.newsletters.map((newsletter) => (
          <NewsletterCard
            key={`${newsletter.id}-${user.id}`}
            newsletter={newsletter}
            user={user}
          />
        ))}
      </CardsGrid>
    </GroupContainer>
  );
}

