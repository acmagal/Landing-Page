import logo from "../assets/logoheader.svg";
import CelNote from "../assets/banner.png";
import React, { useRef } from "react";
import playStoreFooter from "../assets/playstoreFooter.svg";
import appleFooter from "../assets/appleStoreFooter.svg";
import google from "./../assets/google.svg";
import googleplay from "./../assets/googleplay.svg";
import apple from "./../assets/apple.svg";
import HighFive from "../assets/HighFive.png";
import PhoneIcons from "../assets/PhoneIcons.svg";
import { useNavigate } from "react-router-dom";
import monitor from "../assets/MonitorHow.svg";
import celHow from "../assets/MobileHow.svg";
import table from "../assets/TableHow.svg";
import Arte from "../assets/arte.svg";
import NotePlanta from "../assets/NotePlanta.svg";
import {
  Header,
  HeaderButtonsdiv,
  HeaderButton,
  Dash,
  ImgWrapper,
  LoginButton,
  Root,
  Header2,
  Footer,
  TitleWrapper,
  Title,
  Legenda,
  Button,
  ImgAside,
  ImgAsideWrapper,
  FooterWrapper,
  FooterHeader,
  AppText,
  AppButton,
  SeusPagamentos,
  SeusPagamentosTextWrapper,
  SeusPagamentosTitle,
  SeusPagamentosLegenda,
  ComoFunciona,
  ComoFuncionaTextWrapper,
  ComoFuncionaTitle,
  ComoFuncionaSection,
  Box,
  DescriptionBox,
  ButtonNumero,
  AlgunsBeneficios,
  BenefTextWrapper,
  BenefLegenda,
  BenefTitle,
  BenefSection,
  BenefLogo,
  BenefDescriptionBox,
  BenefBox,
  EoNWrapper,
  EoNAppSection,
  EoNLogo,
  SaibaMaisButton,
  OtimizeTitle,
  OtimizeLogo,
  OtimizeAppText,
  OtimizeWrapper,
  OtimizeAppSection,
  OtimizeCadastreButton,
  PhoneIMG,
  ButtonWrapper,
  ButtonSectionBottom,
  EmpresaOuNegocioTitle,
  EmpresaOuNegocioSection,
} from "./HomePF.jsx";

function HomePF() {
  const navigate = useNavigate();
  const comoFunciona = useRef();
  const vantagens = useRef();

  return (
    <Root>
      <Header>
        <ImgWrapper>
          <img
            src={logo}
            alt="logo Blu"
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
          />
        </ImgWrapper>
        <HeaderButtonsdiv>
          <HeaderButton
            onClick={() =>
              comoFunciona.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Como Funciona
          </HeaderButton>
          <HeaderButton
            onClick={() =>
              vantagens.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Vantagens
          </HeaderButton>
          <HeaderButton onClick={() => navigate("/HomeParceiro")}>
            Empresa Parceira
          </HeaderButton>
          <Dash>|</Dash>
          <HeaderButton
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
            className="Go"
          >
            <LoginButton>Login</LoginButton>
          </HeaderButton>
        </HeaderButtonsdiv>
      </Header>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <Header2>
        <TitleWrapper>
          <Title>
            Todos os seus boletos de pagamentos centralizados em um único lugar!
          </Title>
          <Legenda>
            Conheça o Blu Valida, o aplicativo que facilita as transações entre
            você e a empresa remetente!
          </Legenda>
          <Button
            onClick={() =>
              window.open("https://bluvalida.com.br/create-account")
            }
            src="aaa"
          >
            Cadastre-se já!
          </Button>
        </TitleWrapper>
        <ImgAsideWrapper>
          <ImgAside src={CelNote} />
        </ImgAsideWrapper>

        <FooterWrapper>
          <FooterHeader>
            <AppText>Disponível na sua loja de aplicativos!</AppText>
            <AppButton
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.blu.bluvalida"
                )
              }
            >
              GET IT ON
              <span>
                <img src={google} alt="google" />
                <img src={googleplay} alt="googleplay" />
              </span>
            </AppButton>
            <AppButton>
              Download on the
              <span>
                <img src={apple} alt="apple" />
              </span>
            </AppButton>
          </FooterHeader>
        </FooterWrapper>
      </Header2>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <SeusPagamentos>
        <SeusPagamentosTextWrapper>
          <SeusPagamentosTitle>
            Seus pagamentos organizados com segurança!{" "}
          </SeusPagamentosTitle>
          <SeusPagamentosLegenda>
            Receba todos os seus boletos dentro da plataforma e você salva os
            comprovantes. <b>Fácil e seguro!</b>
          </SeusPagamentosLegenda>
        </SeusPagamentosTextWrapper>

        <ButtonWrapper>
          <PhoneIMG alt="Phone" src={PhoneIcons} />
          <Button
            onClick={() =>
              window.open("https://bluvalida.com.br/create-account")
            }
          >
            Cadastre-se já
          </Button>
        </ButtonWrapper>
      </SeusPagamentos>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <ComoFunciona ref={comoFunciona}>
        <ComoFuncionaTextWrapper>
          <ComoFuncionaTitle>
            Reduza as complexibilidades em suas operações!
          </ComoFuncionaTitle>
        </ComoFuncionaTextWrapper>

        <ComoFuncionaSection>
          <Box>
            <img src={monitor} alt="Monitor" />
            <DescriptionBox>
              <ButtonNumero>1</ButtonNumero>
              <span>
                A empresa remetente cadastrada em nossa conta (parceiros), envia
                um documento de remessa com os boletos em formato ”txt”.
              </span>
            </DescriptionBox>
          </Box>

          <Box>
            <img src={table} alt="Monitor" />
            <DescriptionBox>
              <ButtonNumero>2</ButtonNumero>
              <span>
                O Blu valida converte essa remessa em boletos e encaminha aos
                clientes cadastrados no app.
              </span>
            </DescriptionBox>
          </Box>

          <Box>
            <img src={celHow} alt="Monitor" />
            <DescriptionBox>
              <ButtonNumero>3</ButtonNumero>
              <span>
                O cliente encaminha o comprovante pago, e este é enviado pelo
                app para a empresa, atualizando o status do boleto para
                ”anexado”
              </span>
            </DescriptionBox>
          </Box>
        </ComoFuncionaSection>
        <ComoFuncionaSection>
          <Button
            onClick={() =>
              window.open("https://bluvalida.com.br/create-account")
            }
            src="aaa"
          >
            Cadastre-se já!
          </Button>
        </ComoFuncionaSection>
      </ComoFunciona>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <AlgunsBeneficios ref={vantagens}>
        <BenefTextWrapper>
          <BenefTitle>Alguns benefícios com a gente 👉</BenefTitle>
          <BenefLegenda>
            Aqui a comunicação entre o remetente e destinatário na operação de
            pagamentos tem vantagens para ambos os controles de forma{" "}
            <b>super prática!</b>
          </BenefLegenda>
        </BenefTextWrapper>
      </AlgunsBeneficios>

      <BenefSection>
        <BenefLogo alt="arte" src={Arte} />
        <BenefBox>
          <BenefDescriptionBox>
            <span>
              Comprovantes de pagamentos encaminhados de forma segura e direta!
            </span>
          </BenefDescriptionBox>
          <BenefDescriptionBox>
            <span>
              Boletos organizados em categorias escolhidas pela empresa.
            </span>
          </BenefDescriptionBox>
          <BenefDescriptionBox>
            <span>
              Aplicativo amigável de uso fácil e prático, com suporte ativo!
            </span>
          </BenefDescriptionBox>
          <BenefDescriptionBox>
            <span>
              Controle organizado dos status, prevenindo o acúmulo de pendências
            </span>
          </BenefDescriptionBox>
        </BenefBox>
      </BenefSection>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <EmpresaOuNegocioSection>
        <EmpresaOuNegocioTitle>
          <p>Possui uma empresa ou negócio?</p>
          envie suas remessas conosco!
        </EmpresaOuNegocioTitle>

        <EoNWrapper>
          <EoNLogo alt="NotePlanta" src={NotePlanta} />
          <EoNAppSection>
            <ul>
              <li>
                Plano gratuito para teste <b>Utilize antes de comprar!</b>
              </li>

              <li>
                Valor acessível para facilitar as transações do seu negócio!
                <b> Controle e acompanhamento de pagamentos</b>
              </li>
            </ul>
            <SaibaMaisButton
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0"
                )
              }
              src="aaa"
            >
              Saiba Mais!
            </SaibaMaisButton>
          </EoNAppSection>
        </EoNWrapper>
      </EmpresaOuNegocioSection>
      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <OtimizeTitle>Insegurança ao enviar boletos? Nunca mais! </OtimizeTitle>
      <OtimizeWrapper>
        <OtimizeLogo alt="Monitor" src={HighFive} />
        <OtimizeAppSection>
          <OtimizeAppText>
            Disponível na sua loja de aplicativos!
          </OtimizeAppText>
          <AppButton
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.blu.bluvalida"
              )
            }
          >
            GET IT ON
            <span>
              <img src={google} alt="google" />
              <img src={googleplay} alt="googleplay" />
            </span>
          </AppButton>
          <AppButton>
            Download on the
            <span>
              <img src={apple} alt="apple" />
            </span>
          </AppButton>
          <span>ou caso não tenha conta:</span>
          <OtimizeCadastreButton
            onClick={() =>
              window.open("https://bluvalida.com.br/create-account")
            }
            src="aaa"
          >
            Cadastre-se já!
          </OtimizeCadastreButton>
        </OtimizeAppSection>
      </OtimizeWrapper>
      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <Footer>
        Blu Valida 2022. Todos os direitos reservados.
        <p>Precisa de ajuda?</p>
        <p>
          Entre em contato com nosso canal de{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0"
            target="__blank"
          >
            Suporte
          </a>
          !
        </p>
        <div>
          Download:
          <a
            target="__blank"
            href="https://play.google.com/store/apps/details?id=com.blu.bluvalida"
          >
            <img src={playStoreFooter} alt="googleFooter" />
          </a>
          <img src={appleFooter} alt="appleFooter" />
        </div>
      </Footer>
    </Root>
  );
}

export default HomePF;
