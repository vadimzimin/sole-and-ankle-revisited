import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../themes/theme';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    console.log({ windowSize });
  })

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <DesktopSortSelectWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </DesktopSortSelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <DesktopSpacerWrapper>
          <Spacer size={42} />
        </DesktopSpacerWrapper>
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  
  @media ${p => p.theme.queries.tabletAndSmaller} {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  
  @media ${p => p.theme.queries.tabletAndSmaller} {
    flex-basis: auto;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DesktopSpacerWrapper = styled.div`
  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const DesktopSortSelectWrapper = styled.div`
  @media ${p => p.theme.queries.phoneAndSmaller} {
    display: none;
  }
`;

export default ShoeIndex;