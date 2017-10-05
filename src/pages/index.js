import React from "react";
import Button from "../components/button";
import styled from "styled-components";
import { em } from "polished";
import logo from "../assets/img/l_drewrawitz-avatar.png";
import IconGithub from "../assets/svg/github.svg";
import IconTwitter from "../assets/svg/twitter.svg";
import IconInstagram from "../assets/svg/instagram.svg";
import IconLinkedIn from "../assets/svg/linkedin.svg";
import IconStackOverflow from "../assets/svg/stackoverflow.svg";

const LogoWrapper = styled.div`max-width: ${em("350px")};`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const SocialIconWrapper = styled.div`
  margin-top: ${em("60px")};
  margin-bottom: ${em("25px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: ${em("20px")};
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const svgWidth = 25;

const IndexPage = () => (
  <div>
    <LogoWrapper>
      <Logo src={logo} alt="Drew Rawitz" />
    </LogoWrapper>
    <SocialIconWrapper>
      <SocialIcon href="https://www.github.com/drewrawitz" target="_blank">
        <IconGithub width={svgWidth} />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/dem0x7" target="_blank">
        <IconInstagram width={svgWidth} />
      </SocialIcon>
      <SocialIcon href="https://www.twitter.com/drewrawitz" target="_blank">
        <IconTwitter width={svgWidth} />
      </SocialIcon>
      <SocialIcon
        href="http://stackoverflow.com/users/799653/drew"
        target="_blank"
      >
        <IconStackOverflow width={svgWidth} />
      </SocialIcon>
      <SocialIcon
        href="http://www.linkedin.com/pub/drew-rawitz/78/97b/2b7"
        target="_blank"
      >
        <IconLinkedIn width={svgWidth} />
      </SocialIcon>
    </SocialIconWrapper>
    <Button href="mailto:email@drewrawitz.com">Get in touch</Button>
  </div>
);

export default IndexPage;
