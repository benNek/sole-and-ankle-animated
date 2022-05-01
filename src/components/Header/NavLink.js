import styled from "styled-components";
import { keyframes } from "styled-components";
import { WEIGHTS } from "../../constants";

const NavLink = ({ href, children, presentation = "turn" }) => {
  return (
    <Link presentation={presentation} href={href}>
      {presentation === "turn" && (
        <>
          <Real>{children}</Real>
          <Fiction>{children}</Fiction>
        </>
      )}
      {presentation === "fill" && (
        <>
          <Filled>{children}</Filled>
          <Fillable>{children}</Fillable>
        </>
      )}
    </Link>
  );
};

const turnOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const turnIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: ${(props) =>
    props.presentation !== "fill" ? "hidden" : "visible"};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filled = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  overflow: hidden;
  max-width: 0;

  --color: darkgrey;
  border-bottom: 1px solid var(--color);
  color: var(--color);

  transition: max-width 0.3s ease-in-out;
  ${Link}:hover &,
  ${Link}:focus & {
    max-width: 100%;
  }
`;

const Fillable = styled.span`
  display: inline-block;
`;

const Real = styled.span`
  display: inline-block;
  animation: ${turnIn} 0.2s reverse;

  ${Link}:hover &,
  ${Link}:focus & {
    animation: ${turnOut} 0.2s;
  }
`;

const Fiction = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  animation: ${turnOut} 0.2s reverse;
  ${Link}:hover &,
  ${Link}:focus & {
    animation: ${turnIn} 0.2s;
  }
`;

export default NavLink;
