import styled from "@emotion/styled";

interface TypographyProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  lineHeight?: string;
  align?: string;
  margin?: string;
  padding?: string;
}

export const Text = styled.p<TypographyProps>`
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  color: ${({ color }) => color || "#000"};
  line-height: ${({ lineHeight }) => lineHeight || "normal"};
  text-align: ${({ align }) => align || ""};
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  word-break: break-all;
`;

interface IconProps {
  iconPosition?: string;
  IconHeight?: string;
  IconWidth?: string;
  iconTop?: string;
  iconRight?: string;
  iconLeft?: string;
  iconBottom?: string;
  iconradious?: string;
}

export const Icon = styled.img<IconProps>`
  height: ${({ IconHeight }) => IconHeight || "16px"};
  width: ${({ IconWidth }) => IconWidth || "16px"};
  border-radius: ${({ iconradious }) => iconradious || ""};
  cursor: pointer;
`;
