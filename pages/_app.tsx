import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import dynamic from "next/dynamic";
import AppLoader from "@/component/Loader/appLoader";

const Layout = dynamic(() => import("@/component/layout/layout"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  setTimeout(() => {
    return <AppLoader />;
  }, 500);
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
