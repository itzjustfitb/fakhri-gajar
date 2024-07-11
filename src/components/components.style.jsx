import styled from "styled-components";

export const DefaultBtn = styled.button({
  cursor: "pointer",
  padding: 20,
  borderRadius: 16,
  fontSize: "20px",
  fontWeight: 600,
  fontFamily: "Poppins",
  background:
    "linear-gradient(225deg,hsla(271,100%,50%,1) 0%,hsla(294,100%,50%,1) 100%)",
  color: "#fff",
  border: "none",
  maxWidth: 300,
  transition: "0.2s",
  position: "relative",
  "&:hover": {
    transform: "scale(1.05)",
  },
});
