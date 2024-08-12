import { useEffect, useState } from "react";
import { HomeOutlined, LogoutOutlined, HeartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

type MenuItem = Required<MenuProps>["items"][number];

const NavBar = () => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const items: MenuItem[] = [
    {
      label: (
        <Link className={styles.lables} to="/">
          Home
        </Link>
      ),
      key: "/",
      icon: <HomeOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: "/login",
      label: (
        <Link className={styles.lables} to="/login">
          Log in
        </Link>
      ),
      icon: <HeartOutlined style={{ fontSize: 20 }} />,
    },
    {
      key: "/signup",
      label: (
        <Link className={styles.lables} to="/signup">
          Log in
        </Link>
      ),
      icon: <HeartOutlined style={{ fontSize: 20 }} />,
    },
  ];
  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);
  return (
    <div className={styles.navBarContainer}>
      <h1 onClick={() => navigate("/")}>Auth App</h1>
      <Menu
        className={styles.menu}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        <LogoutOutlined />
        Logout
      </Button>
    </div>
  );
};

export default NavBar;
