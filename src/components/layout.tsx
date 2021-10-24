import { types, styles } from "../lib";

const { Fullscreen } = styles;

const Layout = ({ children }: types.props.HasChildren) => {
  return (
    <Fullscreen>
      <div>{children}</div>
    </Fullscreen>
  );
};

export default Layout;
