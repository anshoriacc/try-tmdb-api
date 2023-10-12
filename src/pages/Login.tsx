import { useCallback, useState } from "react";

import { Button, Form, Input } from "antd";
import { SiThemoviedatabase } from "react-icons/si";

import useTitle from "../hooks/useTitle";
import loginAction, { LoginData } from "../utils/login";

const LoginPage = () => {
  useTitle("SIGN IN");

  // form
  const [form] = Form.useForm();

  const [isError, setIsError] = useState<boolean>(false);

  const submitHandler = useCallback(async (value: LoginData) => {
    setIsError(false);
    const loginStatus = await loginAction(value);
    if (!loginStatus) {
      setIsError(true);
    }
  }, []);

  return (
    <main className="bg-gradient-to-tr from-darkblue to-lightblue min-h-screen w-full flex justify-center items-center">
      <section className="relative w-full max-w-[300px] m-[5vh] bg-white p-[5vh] sm:p-[60px] rounded-[20px] flex flex-col items-center">
        <p className="text-2xl text-gray-700 flex gap-1 items-center font-bold">
          TRY <SiThemoviedatabase /> API
        </p>
        <h2 className="text-5xl font-black mb-4 text-center bg-gradient-to-bl from-darkblue to-lightblue bg-clip-text text-transparent">
          SIGN IN
        </h2>
        <p className="mb-10 text-center">
          Fill username and password to sign in.
        </p>
        <Form
          form={form}
          onFinish={submitHandler}
          layout="vertical"
          className="w-full flex flex-col gap-5"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Username wajib diisi" }]}
          >
            <Input
              placeholder="Username"
              size="large"
              onChange={() => (isError ? setIsError(false) : null)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password wajib diisi" }]}
          >
            <Input.Password
              placeholder="Password"
              size="large"
              onChange={() => (isError ? setIsError(false) : null)}
            />
          </Form.Item>

          <Form.Item className="m-0">
            <Button
              type="primary"
              htmlType="submit"
              loading={false}
              size="large"
              className="w-full bg-gradient-to-bl from-darkblue to-lightblue border-0"
            >
              SIGN IN
            </Button>
            {isError && (
              <p className="text-red-500 mt-3 text-center">
                Username atau password tidak sesuai.
              </p>
            )}
          </Form.Item>
        </Form>
      </section>
    </main>
  );
};

export default LoginPage;
