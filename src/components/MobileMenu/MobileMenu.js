/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, COLORS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import ClickTargetHelper from '../ClickTargetHelper';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <DismissIconWrapper>
          <UnstyledButton onClick={onDismiss}>
            <ClickTargetHelper>
              <Icon id="close" size="24px"></Icon>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </ClickTargetHelper>
          </UnstyledButton>
        </DismissIconWrapper>
        <KeepProportional />
        <Navigation>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Navigation>
        <KeepProportional>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink >
            <FooterLink href="/privacy">Privacy Policy</FooterLink >
            <FooterLink href="/contact">Contact Us</FooterLink >
          </Footer>
        </KeepProportional>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: white;
  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`;

const DismissIconWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 22px;
`;

const KeepProportional = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  flex: 0 1 auto;
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.125rem;
  color: var(--color-gray-900);
  font-weight: 600;

  &:hover {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;
  margin-top: 32px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  font-size: 0.875rem;
  color: var(--color-gray-700);
  font-weight: 500;
`;

export default MobileMenu;