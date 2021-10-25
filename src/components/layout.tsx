import styled from "styled-components";
import { types, styles } from "../lib";

const { Fullscreen, FlexBox } = styles;

const DarkenedArea = styled(FlexBox)({
  flexDirection: "column",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  width: "100%",
});

const Layout = ({ children }: types.props.HasChildren) => {
  return (
    <Fullscreen>
      <DarkenedArea>{children}</DarkenedArea>
    </Fullscreen>
  );
};

export default Layout;
