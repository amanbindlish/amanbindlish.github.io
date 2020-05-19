import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconCodepen,
  IconMedium,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLocation,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconZap,
  IconAndroid,
  IconKotlin,
  IconJava,
  IconFlutter,
  IconReact,
  IconHtml,
  IconAndroidStudio,
  IconVSCode,
  IconSlack,
  IconNotion,
  IconSourcetree,
  IconAtlassian,
  IconStackOverflow,
  IconCircleCI,
  IconFirebase,
  IconPostman,
  IconFigma,
  IconSketch,
  IconGradle,
  IconJenkins,
  IconZoom,
  IconSwagger,
  IconXCode,
  IconOpenVPN,
  IconDart,
  IconAngular,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Medium':
      return <IconMedium />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Location':
      return <IconLocation />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Zap':
      return <IconZap />;
    case 'Android':
      return <IconAndroid/>
    case 'Kotlin':
      return <IconKotlin/>
    case 'Java':
      return <IconJava/>
    case 'Flutter':
      return <IconFlutter/>
    case 'React':
      return <IconReact/>
    case 'HTML':
      return <IconHtml/>
    case 'Android Studio':
      return <IconAndroidStudio/>
    case 'VS Code':
      return <IconVSCode/>
    case 'Slack':
      return <IconSlack/>
    case 'Notion':
      return <IconNotion/>
    case 'Sourcetree':
      return <IconSourcetree/>
    case 'Atlassian':
      return <IconAtlassian/>
    case 'Stack Overflow':
      return <IconStackOverflow/>
    case 'CircleCI':
      return <IconCircleCI/>
    case 'Firebase':
      return <IconFirebase/>
    case 'Postman':
      return <IconPostman/>
    case 'Figma':
      return <IconFigma/>
    case 'Sketch':
      return <IconSketch/>
    case 'Gradle':
      return <IconGradle/>
    case 'Jenkins':
      return <IconJenkins/>
    case 'Zoom':
      return <IconZoom/>
    case 'Swagger':
      return <IconSwagger/>
    case 'XCode':
      return <IconXCode/>
    case 'OpenVPN':
      return <IconOpenVPN/>
    case 'Dart':
      return <IconDart/>
    case 'Angular':
      return <IconAngular/>
    default:
      return <IconExternal />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
