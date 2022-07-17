import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
            <VisuallyHidden>Shopping Bag</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={1} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(currentValue => { return !currentValue; })}>
            <Icon id="menu" strokeWidth={1} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  --padding: 32px;

  display: flex;
  align-items: baseline;
  padding: 18px var(--padding);
  min-height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${p => p.theme.queries.phoneAndSmaller} {
    --padding: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.5rem,
    10vw - 6rem,
    3rem
  );

  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  align-self: center;
  margin-left: auto;

  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${p => p.theme.queries.phoneAndSmaller} {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${p => p.theme.queries.tabletAndSmaller} {
    flex: revert;
  }
`;

const LogoWrapper = styled.div`
  margin-right: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
