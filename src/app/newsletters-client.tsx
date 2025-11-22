"use client";

import { useState } from "react";
import styled from "styled-components";
import type { Newsletter, User, NewsletterGroup as NewsletterGroupType } from "@/types";
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from "@/mocks/user";
import UserSelector from "@/components/UserSelector";
import NewsletterGroup from "@/components/NewsletterGroup";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 30px 20px;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 970px;
`;

const Description = styled.p`
  color: #212121;
  font-family: var(--font-source-sans-3), sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.625em;
  margin: 0;
  max-width: 930px;
  text-align: center;
`;

const Heading = styled.h1`
  color: #212121;
  font-family: var(--font-source-sans-3), sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1em;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

const HeadingSection = styled.section`
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 970px;
  padding: 20px;
`;

type NewslettersClientProps = {
  newsletters: Newsletter[];
};

export default function NewslettersClient({
  newsletters,
}: NewslettersClientProps) {
  const [selectedUser, setSelectedUser] = useState<User>(
    USER_WITH_MULTIPLE_SUBSCRIPTION
  );

  // Group newsletters by site
  const groupedNewsletters: NewsletterGroupType[] = newsletters.reduce(
    (acc, newsletter) => {
      const existingGroup = acc.find((g) => g.site === newsletter.site);
      if (existingGroup) {
        existingGroup.newsletters.push(newsletter);
      } else {
        acc.push({
          site: newsletter.site,
          newsletters: [newsletter],
        });
      }
      return acc;
    },
    [] as NewsletterGroupType[]
  );

  return (
    <Container>
      <HeadingSection>
        <Heading>Newsletters</Heading>
        <Description>
          Dans cette page, vous retrouvez l&apos;ensemble des newsletters des Echos
          et des marques satellites. Ainsi, vous pouvez découvrir toutes nos
          newsletters selon vos centres d&apos;intérêt et gérer plus facilement
          l&apos;inscription à vos newsletters.
        </Description>
      </HeadingSection>

      <Content>
        <UserSelector
          selectedUser={selectedUser}
          onUserChange={setSelectedUser}
        />

        {groupedNewsletters.map((group) => (
          <NewsletterGroup
            key={`${group.site}-${selectedUser.id}`}
            group={group}
            user={selectedUser}
          />
        ))}
      </Content>
    </Container>
  );
}

