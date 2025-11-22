"use client";

import React from "react";
import styled from "styled-components";
import type { Newsletter, User } from "@/types";
import { hasAccessToNewsletter } from "@/utils/subscriptions";

const Button = styled.button<{ $isAccessible: boolean }>`
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-family: var(--font-source-sans-3), sans-serif;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  letter-spacing: -0.01em;
  line-height: 1.714em;
  padding: 8px 30px;
  text-align: center;
  transition: opacity 0.2s ease;

  ${({ $isAccessible }) =>
    $isAccessible
      ? `
    background-color: #B00005;
    color: #FFFFFF;
  `
      : `
    background-color: #FAEC70;
    color: #212121;
  `}

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  max-width: 100%;
  width: 302px;
`;

const Description = styled.p`
  color: #212121;
  flex: 1;
  font-family: var(--font-source-sans-3), sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.625em;
  margin: 0;
  text-align: center;
  width: 302px;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const ImageContainer = styled.div`
  border-radius: 4px;
  height: 201px;
  overflow: hidden;
  position: relative;
  width: 302px;
`;

const Title = styled.h3`
  color: #ffffff;
  font-family: var(--font-merriweather), serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.257em;
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  width: 262px;
`;

const TitleOverlay = styled.div`
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
`;

type NewsletterCardProps = {
  newsletter: Newsletter;
  user: User;
};

export default function NewsletterCard({
  newsletter,
  user,
}: NewsletterCardProps) {
  const hasAccess = hasAccessToNewsletter(user, newsletter);
  const buttonText = hasAccess ? "S\u2019inscrire" : "S\u2019abonner";

  return (
    <Card>
      <ImageContainer>
        <Image src={newsletter.image} alt={newsletter.title} />
        <TitleOverlay>
          <Title>{newsletter.title}</Title>
        </TitleOverlay>
      </ImageContainer>
      <Description>{newsletter.description}</Description>
      <Button $isAccessible={hasAccess}>{buttonText}</Button>
    </Card>
  );
}

