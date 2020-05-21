import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig, github } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import { FormattedIcon } from '@components/icons';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
`;
const StyledToolsHeader = styled.div`
  margin-top: 20px;
`;
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-items: start | center;
  justify-content: start | center; 
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
`;
const Skill = styled.li`
  position: relative;
  width: 10%;
  margin-bottom: 20px;
  color: ${colors.slate};
`;
const StyledSkillLink = styled.a`
  padding: 5px;
  &:hover,
  &:focus {
    background: transparent;
    transform: scale(1.1) translateX(3px);
    svg {
      fill: ${colors.green};
    }
  }
  svg {
    fill: ${colors.slate};
    width: 25px;
    height: 25px;
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const StyledAvatarLink = styled.a`
  // ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 10px;
      left: 10px;
    }
    ${StyledAvatar} {
      transform: translate(3px, 3px);
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    // transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border-right: 2px solid ${colors.green};
    border-bottom: 2px solid ${colors.green};
    top: 15px;
    left: 15px;
    z-index: -2;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar, tools } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading><span dangerouslySetInnerHTML={{ __html: title }}/></Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => 
              <Skill key={i}>
                <StyledSkillLink
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={skill}>
                  {<FormattedIcon name={skill}/>}
                </StyledSkillLink>
              </Skill>
            )}
          </SkillsContainer>
          <StyledToolsHeader>Tools which I use on daily basis:</StyledToolsHeader>
          <SkillsContainer>
            {tools && tools.map((tool, i) => 
              <Skill key={i}>
                <StyledSkillLink
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={tool}>
                  {<FormattedIcon name={tool}/>}
                </StyledSkillLink>
              </Skill>
            )}
          </SkillsContainer>
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
