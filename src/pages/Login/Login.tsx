import { Button, Form, Input, FormProps } from "antd";
import { Link } from "react-router-dom";
import { UserAuthentication } from "../../types/auth";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const { mutate } = useLogin();
  const onFinish: FormProps<UserAuthentication>["onFinish"] = (values) => {
    mutate(values);
  };

  const onFinishFailed: FormProps<UserAuthentication>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Link to="/signup">Sign up</Link>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please insert your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please insert your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
