import { Button, Form, FormProps, Input } from "antd";
import { Link } from "react-router-dom";
import { UserAuthentication } from "../../types/auth";
import useSignUp from "../../hooks/useSignup";

const Signup = () => {
  const { mutate } = useSignUp();
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
      <Link to="/login">Log in</Link>
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please insert your name (min 3 characters)!",
              min: 3,
              max: 55,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please insert a valid email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please insert your password (min 8 characters)!",
              min: 8,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signup;
