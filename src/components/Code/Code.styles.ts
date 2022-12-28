import { styled } from "../../stitches.config";

export const CodeStyled = styled("div", {
  border: "0.1rem solid $border !important",
  borderRadius: "$a",
  padding: "$b $d",
});

export const CodeFunctionStyled = styled("div", {
  float: "right",
});

export const CodeBlockStyled = styled("code", {
  lineBreak: "auto",
  margin: "$b 0",
  overflow: "auto",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  wordWrap: "break-word",
});

export default CodeStyled;
