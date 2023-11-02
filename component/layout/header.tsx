import styled from "styled-components";
import { motion } from "framer-motion";

interface styledHeaderProps {
  isCollapsed: boolean;
}

const StyledHeader = styled(motion.header)<styledHeaderProps>`
  width: calc(100% - ${(props) => (props.isCollapsed ? "100px" : "200px")});
  background: #222;
  height: 60px;
  color: white;
  padding: 20px;
  position: fixed;
  transition: all 0.3s;
  top: 0;
  box-sizing: border-box;
  left: ${(props) => (props.isCollapsed ? "100px" : "240px")};
`;

const Header = ({ isCollapsed }: { isCollapsed: boolean }) => {
  return (
    <StyledHeader
      // initial={{ y: "-100%" }}
      // animate={{ y: 0 }}
      // exit={{ y: "-100%" }}
      isCollapsed={isCollapsed}>
      Header Content
    </StyledHeader>
  );
};

export default Header;
