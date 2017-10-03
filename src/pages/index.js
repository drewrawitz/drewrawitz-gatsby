import React from "react";
import Button from "../components/button";
import styled from "styled-components";
import { em } from "polished";

const Heading = styled.h1`
  font-size: ${em("50px")};
  margin: ${em("5px")} 0 0 0;
  font-style: italic;
`;

const Copy = styled.p`line-height: 1.5;`;

const IndexPage = () => (
  <div>
    <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
    <Heading>About Me</Heading>
    <Copy>
      I enjoy playing with cutting edge web technologies and building beautiful
      websites. My job involves doing what I love, developing new websites and
      applications. I absolutely love learning new things and taking on new
      challenges. A more detailed look at my professional capabilities and
      experience is available in my resume, which is available upon request.
    </Copy>

    <Button>Get in touch</Button>
  </div>
);

export default IndexPage;
