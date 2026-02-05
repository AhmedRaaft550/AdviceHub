import React from "react";
import { IconType } from "react-icons";

export type HeaderConstTypes = {
  links: {
    name: string;
    path: string;
  }[];
};

// => from the booking steps component to the booking card
export type BookingStepProps = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

// => from the get started component to the get started card
export type GetStartedCardProps = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  btnText: string;
  link: string;
  color: string;
};

// => from the about to about pillars
export type AboutPillarsProps = {
  id: number;
  title: string;
  desc: string;
  icon: IconType;
  iconColor: string;
  gridSpan: string;
  bg: string;
  isSpecial?: boolean;
  hasAvatars?: boolean;
  hasGlow?: boolean;
};

export type ContactInputType = {
  id: number;
  label: string;
  inputType: string;
  placeHolder: string;
  icon: IconType;
};
