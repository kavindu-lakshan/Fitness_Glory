/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import LineIcon from "./lines.png";

const Icon = () => <img css={styles} src={LineIcon} />;

const styles = css`
  margin: 20px 0;
`;

export default Icon;
