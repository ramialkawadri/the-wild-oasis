import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "column" &&
    css`
      flex-direction: column;
      gap: 2rem;
    `}
`;

Row.defaultProps = {
  type: "column",
};

export default Row;
