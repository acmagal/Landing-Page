import styled from "styled-components";

export const Root = styled.div`
  background-color: white;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: "Figtree", sans-serif;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-width: 100vw;
  }
`;
export const Header = styled.div`
  width: 100vw;
  height: 2.5em;
  background-color: #1d2b4e;
  -webkit-box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  flex-wrap: wrap;
  z-index: 1;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeaderButtonsdiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;

  @media (max-width: 425px) {
    gap: 0em;
  }
`;

export const Dash = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: white;
`;

export const LoginButton = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const HeaderButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 1.18rem;
  font-weight: 500;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: translateY(4px) scale(1.1);
  }

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

export const Header2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background: rgb(31, 46, 84);
  background: linear-gradient(
    150deg,
    rgba(31, 46, 84, 1) 3%,
    rgba(29, 43, 78, 1) 50%,
    rgba(43, 69, 133, 1) 100%
  );
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 5rem;
  width: 30em;

  @media (min-width: 1232px) {
    align-items: flex-start;
  }
`;

export const Title = styled.div`
  display: flex;
  margin: 0.5em;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

export const Legenda = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 200;
  padding-top: 3em;
  padding-bottom: 3em;
  margin: 0.5em;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #253c8c;
  border-color: transparent;
  color: white;
  height: 6vh;
  font-weight: 500;
  font-size: 1em;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    transform: scale(1.6);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

export const ImgAsideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const ImgAside = styled.img`
  width: 25em;
  @media (min-width: 768px) {
    padding: 5em;
    width: 35em;
  }
  @media (min-width: 1440px) {
    padding: 5em;
    width: 40em;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  padding: 4em;
  flex-direction: column;
`;

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const AppText = styled.div`
  color: #ffff;
`;

export const AppButton = styled.button`
  background-color: #000;
  width: 300px;
  color: white;
  border-radius: 15px;
  font-size: 10px;
  height: 56px;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
export const SeusPagamentos = styled.div`
  width: 100vw;
`;

export const SeusPagamentosTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  text-align: center;
  width: 100vw;
`;

export const SeusPagamentosTitle = styled.div`
  font-size: 1.9em;
  font-weight: 700;
  width: 100vw;
  padding-top: 2em;
`;

export const SeusPagamentosLegenda = styled.div`
  color: #767272;
  padding: 1em;
  font-size: 1em;
  font-weight: 600;
`;

export const PhoneWrapper = styled.div`
  position: relative;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PhoneIMG = styled.img`
  width: 40em;
  padding-top: 1em;
  padding-bottom: 5em;
  padding-right: 4em;

  @media (max-width: 768px) {
    width: 20em;
    padding-top: 1em;
    padding-bottom: 5em;
    padding-right: 3em;
  }
  @media (max-width: 320px) {
    width: 100vw;
    padding-top: 1em;
    padding-bottom: 5em;
    padding-left: 2em;
  }
`;

export const PhoneDescriptionBox = styled.div`
  background-color: orange;
  width: 15em;
  height: 15em;
`;

export const Image = styled.img`
  position: relative;
  max-width: 40vw;
  height: fit-content;
  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 1.5em;
`;

export const ButtonSectionBottom = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

export const ComoFunciona = styled.div`
  width: 100vw;
  background-color: #f5f5f5f5;
`;

export const ComoFuncionaTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  text-align: center;
  width: 100vw;
`;

export const ComoFuncionaTitle = styled.div`
  font-size: 1.9em;
  font-weight: 700;
  width: 100vw;
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const ComoFuncionaSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  padding-bottom: 3em;
  gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;

  img {
    margin-bottom: 2em;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20em;
  height: 10em;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
`;

export const ButtonNumero = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  width: 1.5em;
  height: 1.5em;
  margin-bottom: 1em;
  color: #fff;
  border-radius: 50%;
  border-color: transparent;
  background-color: #253c8c;
  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

export const AlgunsBeneficios = styled.div`
  width: 100vw;
  padding-top: 2.5em;
  padding-bottom: 1em;
`;

export const BenefTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  text-align: center;
  width: 100vw;
`;

export const BenefTitle = styled.div`
  font-size: 1.9em;
  font-weight: 700;
  width: 100vw;
`;

export const BenefLegenda = styled.div`
  color: #767272;
  padding: 1em;
  font-size: 1em;
  font-weight: 600;
`;

export const BenefSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 320px) {
    flex-direction: row;
  }
`;

export const BenefBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1em;
  gap: 2em;
  padding-bottom: 5em;
`;

export const BenefLogo = styled.img`
  width: 25em;
  height: 25em;

  @media (min-width: 1360px) {
    width: 40em;
    height: 25em;
  }
`;

export const BenefDescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 15em;
  height: 10em;
  border-radius: 2em;
  padding: 1em;
  background-color: #f5f5f5;

  span {
    font-weight: 500;
  }
`;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

export const EmpresaOuNegocioSection = styled.div`
  background-color: #f5f5f5f5;
  padding-bottom: 3em;
`;

export const EmpresaOuNegocioTitle = styled.div`
  font-size: 2.5em;
  font-weight: 700;
  width: 100vw;
  text-align: center;
  align-items: center;
  padding-bottom: 1.5em;
`;

export const EoNWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EoNAppSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;

  li {
    font-size: 1em;
    font-weight: 500;
    padding: 3em;
  }
`;

export const EoNLogo = styled.img`
  width: 25em;
  height: 15em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 45em;
    height: 30em;
  }
`;

export const SaibaMaisButton = styled.button`
  align-items: center;
  background-color: #253c8c;
  border-color: transparent;
  color: white;
  width: 9em;
  height: 3em;
  font-weight: 500;
  font-size: 1em;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    transform: scale(1.6);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

export const EoNAppButton = styled.button`
  background-color: #000;
  width: 300px;
  color: white;
  border-radius: 15px;
  font-size: 10px;
  height: 56px;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
export const OtimizeTitle = styled.div`
  font-size: 2.5em;
  font-weight: 700;
  width: 100vw;
  padding-top: 2em;
  text-align: center;
  padding-bottom: 1.5em;
`;

export const OtimizeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OtimizeAppSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const OtimizeLogo = styled.img`
  width: 25em;
  height: 15em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 45em;
    height: 30em;
  }
`;

export const OtimizeAppText = styled.div`
  color: #939090;
  padding-top: 1em;
`;

export const OtimizeFooterHeader = styled.div`
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const OtimizeCadastreButton = styled.button`
  align-items: center;
  background-color: #253c8c;
  border-color: transparent;
  color: white;
  width: 9em;
  height: 3em;
  font-weight: 500;
  font-size: 1em;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    transform: scale(1.6);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

export const OtimizeAppButton = styled.button`
  background-color: #000;
  width: 300px;
  color: white;
  border-radius: 15px;
  font-size: 10px;
  height: 56px;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
export const Footer = styled.div`
  background: #1d2b4e;
  width: 100vw;
  margin-top: 100px;
  padding-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 14px;
  height: 40px;

  a {
    text-decoration: underline;
    cursor: pointer;
    color: white;
    :hover {
      transform: scale(1.1);
    }
    :active {
      transform: translateY(4px) scale(1.1);
    }
    :visited {
      color: white;
    }
  }
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    img {
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
      :active {
        transform: translateY(4px) scale(1.1);
      }
    }
  }

  @media (max-width: 1024px) {
    font-size: 15px;
    flex-direction: column;
    padding-top: 25px;
    height: 20vh;

    p {
      font-size: 14px;
      margin-bottom: 0px;
    }
  }
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
