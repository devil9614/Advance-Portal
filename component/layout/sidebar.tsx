import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { RouteDetails } from "@/constant/RouteDetails";
import { SetterOrUpdater } from "recoil";
import { useRouter } from "next/router";
import { FaBeer } from "react-icons/fa";

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
`;

const SidebarLinkText = styled(motion.span)`
  margin-left: 10px;
  text-decoration: none;
  color: white;
`;

const ActiveLink = styled(SidebarLink)`
  background-color: #555;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px; // Adjust as needed
`;

const FooterLogo = styled.img`
  width: 50px; // Adjust as needed
  margin-bottom: 10px;
`;

const ContactDetail = styled.div`
  margin: 5px 0;
`;

const ScrollableContent = styled.div`
  max-height: calc(100vh - 60px - 60px);
  overflow-y: auto;
`;

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: SetterOrUpdater<boolean>;
}) => {
  const router = useRouter();

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
      <ScrollableContent>
        {RouteDetails.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: isCollapsed ? 0 : 1 }}
              exit={{ opacity: 0 }}
              style={{ whiteSpace: "nowrap" }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              {section.title}
            </motion.h3>

            {section.items.map((item, itemIndex) => {
              const isActive = router.pathname === item.href; // check if the link is active
              const LinkComponent = isActive ? ActiveLink : SidebarLink; // choose the component based on active status

              return (
                <Link key={itemIndex} href={item.href} passHref>
                  <LinkComponent>
                    {item.icon}
                    {!isCollapsed && (
                      <SidebarLinkText
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ whiteSpace: "nowrap" }}
                        transition={{ duration: 0.5 }}>
                        {item.label}
                      </SidebarLinkText>
                    )}
                  </LinkComponent>
                </Link>
              );
            })}
          </div>
        ))}
      </ScrollableContent>

      {!isCollapsed && (
        <Footer>
          <FaBeer />
          <ContactDetail>+918171724122</ContactDetail>
          <ContactDetail>foundry@nowpurchase.com</ContactDetail>
        </Footer>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
