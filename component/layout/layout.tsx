import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { sidebarCollapsed } from "@/Recoil";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./sidebar"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Header = dynamic(() => import("./header"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: relative;
`;

interface mainContainerProps {
  isCollapsed: boolean;
}

const Main = styled.main<mainContainerProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  transition: all 0.3s;
  left: ${(props) => (props.isCollapsed ? "100px" : "240px")};
  top: 60px;
  padding: 20px;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] =
    useRecoilState<boolean>(sidebarCollapsed);

  useEffect(() => {}, []);

  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return <></>;
  return (
    <Container>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Header isCollapsed={isCollapsed} />
      <Main isCollapsed={isCollapsed}>{children}</Main>
    </Container>
  );
};

export default Layout;
