import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Colors from "../../constants/Color";

const getVariantStyles = ({ primary = false }) => {
  return primary
    ? css`
        color: white;
        background-color: ${Colors.Blue};
        &:hover {
          background-color: ${Colors.DarkBlue};
        }

        &:active {
          background-color: ${Colors.DarkBlue};
          transform: translateY(0.0625rem);
        }
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 0.0625rem inset;

        &:active {
          transform: translateY(0.0625rem);
        }
      `;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getSizeStyles = ({ size = "medium" }) => {
  switch (size) {
    case "small": {
      return css`
        font-size: 0.75rem;
        padding: 0.625rem 1rem;
      `;
    }
    case "large": {
      return css`
        font-size: 1rem;
        padding: 0.75rem 1.5rem;
      `;
    }
    default: {
      return css`
        font-size: 0.875rem;
        padding: 0.6875rem 1.25rem;
      `;
    }
  }
};

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => getVariantStyles({ primary: props.isPrimary })}
  ${(props) => getSizeStyles({ size: props.size })}
`;

interface IButtonProps {
  IsPrimary: boolean;
  Size: string;
  Text: string;
  OnClick: any;
}

const Button = (props: IButtonProps) => {
  const { IsPrimary, Size, Text, onClick } = props;
  return (
    <StyledButton isPrimary={IsPrimary} size={Size} onClick={onClick}>
      {Text}
    </StyledButton>
  );
};

export default Button;
