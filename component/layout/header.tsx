import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { RouteDetails } from "@/constant/RouteDetails";

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
  const router = useRouter();
  const currentRoute = router.pathname;

  // Find the section with a matching route
  const matchedSection = RouteDetails.find((section) =>
    section.items.some((item) => item.href === currentRoute)
  );

  // If a matching section is found, display its title. Otherwise, default to an empty string or any default value.
  const headerTitle = matchedSection ? matchedSection.title : "";

  return (
    <StyledHeader isCollapsed={isCollapsed}>
      <h3>{headerTitle}</h3>
    </StyledHeader>
  );
};

export default Header;
