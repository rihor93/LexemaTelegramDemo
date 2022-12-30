import React from 'react';
import ReactDOM from 'react-dom/client';
import { useThemeParams } from '@vkruglikov/react-telegram-web-app';
import { ConfigProvider, theme } from 'antd';

import './index.css';
import logo from './logo.svg';

import MainButtonDemo from './MainButtonDemo';
import MainButtonLexema from './MainButtonLexema';

const DemoApp = () => {
  const [colorScheme, themeParams] = useThemeParams();

  return (
    <div>
      <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === 'dark'
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }
      >
        <div className="contentWrapper">
          <MainButtonLexema value='first btn'/>
          <MainButtonDemo />
          
          

        </div>
      </ConfigProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<DemoApp />);
