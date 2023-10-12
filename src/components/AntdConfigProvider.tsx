import { ReactNode } from "react";
import { ConfigProvider, theme } from "antd";

type TProps = {
  children: ReactNode;
};

const AntdConfigProvider: React.FC<TProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#007cab",
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigProvider;
