import React from "react";
import Button from "../components/button";
import styled from "styled-components";
import { em } from "polished";
import logo from "../assets/img/drlogo4.png";
import IconGithub from "../assets/svg/github.svg";
import IconTwitter from "../assets/svg/twitter.svg";
import IconInstagram from "../assets/svg/instagram.svg";
import IconLinkedIn from "../assets/svg/linkedin.svg";
import IconStackOverflow from "../assets/svg/stackoverflow.svg";

const LogoWrapper = styled.div`max-width: ${em("300px")};`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const SocialIconWrapper = styled.div`
  margin-top: ${em("60px")};
  margin-bottom: ${em("20px")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;

  &:not(:last-child) {
    margin-right: ${em("20px")};
  }
`;

const IndexPage = () => (
  <div>
    <LogoWrapper>
      <Logo src={logo} />
    </LogoWrapper>
    <SocialIconWrapper>
      <SocialIcon href="https://www.github.com/drewrawitz" target="_blank">
        <IconGithub width={30} />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/dem0x7" target="_blank">
        <IconInstagram width={30} />
      </SocialIcon>
      <SocialIcon href="https://www.twitter.com/drewrawitz" target="_blank">
        <IconTwitter width={30} />
      </SocialIcon>
      <SocialIcon
        href="http://stackoverflow.com/users/799653/drew"
        target="_blank"
      >
        <IconStackOverflow width={30} />
      </SocialIcon>
      <SocialIcon
        href="http://www.linkedin.com/pub/drew-rawitz/78/97b/2b7"
        target="_blank"
      >
        <IconLinkedIn width={30} />
      </SocialIcon>
    </SocialIconWrapper>
    <Button>Get in touch</Button>

    {/* <Copy>
      I enjoy playing with cutting edge web technologies and building beautiful
      websites. My job involves doing what I love, developing new websites and
      applications. I absolutely love learning new things and taking on new
      challenges. A more detailed look at my professional capabilities and
      experience is available in my resume, which is available upon request.
    </Copy>
    <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>

    <Button>Get in touch</Button> */}
  </div>
);

export default IndexPage;
