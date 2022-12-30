import { Button, Form, Input, Typography, Switch } from 'antd';
import { FC, PropsWithChildren, useState } from 'react';
import {
  MainButton,
  MainButtonProps,
} from '@vkruglikov/react-telegram-web-app';

const MainButtonLexema: React.FC <
PropsWithChildren<{ value: string}>
>= ({value}) => {
  const [buttonState, setButtonState] = useState<
    {
      show: boolean;
    } & Pick<MainButtonProps, 'text' | 'progress' | 'disable'>
  >({
    text: 'Lexema btn',
    show: false,
    progress: false,
    disable: false,
  });
  const onFinish = (values: any) => setButtonState(values);

  return (
    <>
      <Form
        labelCol={{ span: 6 }}
        name="basic"
        layout="horizontal"
        initialValues={buttonState}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item>
          <Button
            block
            type="primary"
            onClick={() =>
              setButtonState({
                ...buttonState,
                show: !buttonState?.show,
              })
            }
          >
            {value}
          </Button>
        </Form.Item>
      </Form>
      
    </>
  );
};
export default MainButtonLexema;
