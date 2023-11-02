import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteDetails } from "@/constant/RouteDetails";
import { SetterOrUpdater } from "recoil";

interface SidebarContainerProps {
  isCollapsed: boolean;
}

const SidebarContainer = styled(motion.div)<SidebarContainerProps>`
  width: ${(props) => (props.isCollapsed ? "60px" : "200px")};
  background: #333;
  color: white;
  padding: 20px;
  transition: width 0.3s;
  position: fixed;
  height: 100vh;
`;

const ToggleButton = styled.button`
  background: #444;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: #444;
  }

  span {
    margin-left: 10px;
    text-decoration: none;
    color: white;
  }
`;

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: SetterOrUpdater<boolean>;
}) => {
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContainer
      isCollapsed={isCollapsed}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}>
      <ToggleButton onClick={handleToggle}>
        {isCollapsed ? ">>" : "<<"}
      </ToggleButton>

      {!isCollapsed &&
        RouteDetails.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3>{section.title}</h3>
            {section.items.map((item, itemIndex) => (
              <Link key={itemIndex} href={item.href} passHref>
                <SidebarLink>
                  {item.icon}
                  <span>{item.label}</span>
                </SidebarLink>
              </Link>
            ))}
          </div>
        ))}
    </SidebarContainer>
  );
};

export default Sidebar;
