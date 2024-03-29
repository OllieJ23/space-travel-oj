import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledBg = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -5;
  top: 0;
`;

function Background() {
  const backgroundImageURLs = {
    home: {
      mobile: '/assets/background/background-home-mobile.jpg',
      tablet: '/assets/background/background-home-tablet.jpg',
      desktop: '/assets/background/background-home-desktop.jpg',
    },
    destination: {
      mobile: '/assets/background/background-destination-mobile.jpg',
      tablet: '/assets/background/background-destination-tablet.jpg',
      desktop: '/assets/background/background-destination-desktop.jpg',
    },
    crew: {
      mobile: '/assets/background/background-crew-mobile.jpg',
      tablet: '/assets/background/background-crew-tablet.jpg',
      desktop: '/assets/background/background-crew-desktop.jpg',
    },
    technology: {
      mobile: '/assets/background/background-technology-mobile.jpg',
      tablet: '/assets/background/background-technology-tablet.jpg',
      desktop: '/assets/background/background-technology-desktop.jpg',
    },
  };

  const breakpoints = {
    mobile: 400,
    tablet: 800,
    desktop: 1200,
  };

  const location = useLocation();
  const { pathname } = location;
  const currentPage = pathname.slice(1);

  // Get the current screen size
  const currentScreenWidth = window.innerWidth;
  let currentScreenSize = 'desktop';

  if (currentScreenWidth < breakpoints.mobile) {
    currentScreenSize = 'mobile';
  } else if (currentScreenWidth < breakpoints.tablet) {
    currentScreenSize = 'tablet';
  }
  console.log(backgroundImageURLs?.home?.desktop);

  // Render the background image based on the current page and screen size
  return (
    <StyledBg
      src={
        backgroundImageURLs[currentPage]?.[currentScreenSize] || // Use optional chaining to handle undefined currentPage
        backgroundImageURLs.home.desktop
      } // Default to home page desktop image if current page/screen size image is not defined
      alt="Background Image of Page"
    />
  );
}

export default Background;
