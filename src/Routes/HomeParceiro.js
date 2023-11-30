import logo from "../assets/logoheader.svg";
import CelNote from "../assets/banner.png";
import React, { useRef } from "react";
import playStoreFooter from "../assets/playstoreFooter.svg";
import appleFooter from "../assets/appleStoreFooter.svg";
import google from "./../assets/google.svg";
import googleplay from "./../assets/googleplay.svg";
import apple from "./../assets/apple.svg";
import monitor from "../assets/MonitorHow.svg";
import celHow from "../assets/MobileHow.svg";
import table from "../assets/TableHow.svg";
import NoteBefore from "../assets/NoteBefore.svg";
import LogoWithout from "../assets/LogoWithout.svg";
import PeopleHappy from "../assets/PeopleHappy.svg";
import HighFive from "../assets/HighFive.png";
import { useNavigate } from "react-router-dom";

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
  ComoFunciona,
  ComoFuncionaTextWrapper,
  ComoFuncionaSection,
  ComoFuncionaTitle,
  ComoFuncionaLegenda,
  Box,
  ButtonNumero,
  DescriptionBox,
  EconomiaTextWrapper,
  EconomiaTitle,
  EconomiaLegenda,
  EconomiaDeCustos,
  EconomiaSection,
  EconomiaDescriptionBox,
  EconomiaBox,
  ImgLogo,
  AlgunsBeneficios,
  BenefTextWrapper,
  BenefLegenda,
  BenefTitle,
  BenefSection,
  BenefLogo,
  BenefDescriptionBox,
  BenefBox,
  NossosPlanos,
  PlanosTextWrapper,
  PlanosTitle,
  PlanosLegenda,
  PlanosSection,
  PlanosBox,
  PlanosDescriptionBox,
  PlanosDescriptionTitle,
  PlanosDescriptionLegenda,
  OtimizeTitle,
  OtimizeLogo,
  OtimizeAppText,
  OtimizeWrapper,
  OtimizeAppSection,
  OtimizeCadastreButton,
} from "./HomeParceiro.jsx";

function HomeParceiro() {
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
          <HeaderButton onClick={() => navigate("/")}>
            Pessoa Física
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
            Deseja enviar boletos via remessa de modo descomplicado e seguro?
          </Title>
          <Legenda>
            Conheça o Blu Valida, o aplicativo que facilita suas operações de
            modo organizado.
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

      <ComoFunciona ref={comoFunciona}>
        <ComoFuncionaTextWrapper>
          <ComoFuncionaTitle>
            Reduza as complexibilidades em suas operações!
          </ComoFuncionaTitle>
          <ComoFuncionaLegenda>
            Suas transações com boletos são complexas, morosas e sem controle
            eficiente com os destinatários? <b>Nós cuidamos disso para você!</b>
          </ComoFuncionaLegenda>
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
      <EconomiaDeCustos ref={vantagens}>
        <EconomiaTextWrapper>
          <EconomiaTitle>Economia de custos em software </EconomiaTitle>
          <EconomiaLegenda>
            Seu envio de remessas mais acessível e eficiente!
          </EconomiaLegenda>
        </EconomiaTextWrapper>

        <EconomiaSection>
          <EconomiaBox>
            <img alt="Monitor" src={NoteBefore} />
            <EconomiaDescriptionBox>
              <h1>Sofwares personalizados</h1>
              <ul>
                <li>Manutenção de bugs e erros nativos</li>
                <li>Problemas com suporte.</li>
                <li>Usabilidade complexa.</li>
                <li>Custo alto.</li>
                <li>Tempo de desenvolvimento.</li>
              </ul>
            </EconomiaDescriptionBox>
          </EconomiaBox>
          <h1>x</h1>
          <EconomiaBox>
            <ImgLogo alt="Monitor" src={LogoWithout} />
            <img alt="Monitor" src={CelNote} />
            <EconomiaDescriptionBox>
              <h1>Blu Valida</h1>
              <ul>
                <li>Sistema eficaz que previne bugs nativos.</li>
                <li>Suporte ativo via Whatsapp.</li>
                <li>Usabilidade amigável e objetiva.</li>
                <li>Planos acessíveis para empresas.</li>
                <li>Disponível para download.</li>
              </ul>
            </EconomiaDescriptionBox>
          </EconomiaBox>
        </EconomiaSection>
      </EconomiaDeCustos>
      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <AlgunsBeneficios>
        <BenefTextWrapper>
          <BenefTitle>Alguns benefícios para empresas 🏢</BenefTitle>
          <BenefLegenda>
            Aqui a comunicação entre o remetente e destinatário na operação de
            pagamentos tem vantagens para ambos os controles de forma{" "}
            <b>super prática!</b>
          </BenefLegenda>
        </BenefTextWrapper>
      </AlgunsBeneficios>

      <BenefSection>
        <BenefLogo alt="Monitor" src={PeopleHappy} />
        <BenefBox>
          <BenefDescriptionBox>
            <span>
              Status de Pagamento Atualizado: Obtenha informações sobre o status
              dos pagamentos, com atualizações automáticas quando os
              comprovantes são anexados.
            </span>
          </BenefDescriptionBox>
          <BenefDescriptionBox>
            <span>
              Economia de Recursos: Reduza custos operacionais e a complexidade
              de processos.
            </span>
          </BenefDescriptionBox>
          <BenefDescriptionBox>
            <span>
              Ofereça uma experiência conveniente e eficiente aos seus clientes,
              agilizando o processo de pagamento e comprovantes.
            </span>
          </BenefDescriptionBox>
          <BenefDescriptionBox>
            <span>
              Facilidade de Cadastro para Clientes: Ofereça aos seus clientes
              uma maneira simples de se cadastrarem para receberem boletos e
              anexarem comprovantes de pagamento.
            </span>
          </BenefDescriptionBox>
        </BenefBox>
      </BenefSection>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <NossosPlanos>
        <PlanosTextWrapper>
          <PlanosTitle>Nossos planos</PlanosTitle>
          <PlanosLegenda>
            Teste e comprove a qualidade antes de adquirir!
          </PlanosLegenda>
        </PlanosTextWrapper>

        <PlanosSection>
          <PlanosBox>
            <PlanosDescriptionBox>
              <PlanosDescriptionTitle>
                PLANO VALIDA(100)
                <PlanosDescriptionLegenda>
                  100 boletos - GRÁTIS
                </PlanosDescriptionLegenda>
              </PlanosDescriptionTitle>

              <ul>
                <li>Máximo de 100 boletos p/mês.</li>
                <li>Tem bloqueio ao acesso dos resumos da empresa</li>
              </ul>

              <Button>Adquirir já!</Button>
            </PlanosDescriptionBox>

            <PlanosDescriptionBox>
              <PlanosDescriptionTitle>
                PLANO VALIDA(1000)
                <PlanosDescriptionLegenda>
                  1000 boletos - R$ 399,00
                </PlanosDescriptionLegenda>
              </PlanosDescriptionTitle>

              <ul>
                <li>Excesso: 18% do valor do boleto.</li>
              </ul>

              <Button>Adquirir já!</Button>
            </PlanosDescriptionBox>

            <PlanosDescriptionBox>
              <PlanosDescriptionTitle>
                PLANO VALIDA(10.000)
                <PlanosDescriptionLegenda>
                  1000 boletos - R$ 599,00
                </PlanosDescriptionLegenda>
              </PlanosDescriptionTitle>

              <ul>
                <li>Excesso: 18% do valor do boleto.</li>
              </ul>

              <Button>Adquirir já!</Button>
            </PlanosDescriptionBox>

            <PlanosDescriptionBox>
              <PlanosDescriptionTitle>
                PLANO SMART(5000)
                <PlanosDescriptionLegenda>
                  1000 boletos - R$ 1.999,00
                </PlanosDescriptionLegenda>
              </PlanosDescriptionTitle>

              <ul>
                <li>Excesso: 15% do valor do boleto.</li>
              </ul>

              <Button>Adquirir já!</Button>
            </PlanosDescriptionBox>

            <PlanosDescriptionBox>
              <PlanosDescriptionTitle>
                PLANO PLUS(10.000)
                <PlanosDescriptionLegenda>
                  10.000 boletos - R$ 7.999,00
                </PlanosDescriptionLegenda>
              </PlanosDescriptionTitle>

              <ul>
                <li>Excesso: 10% do valor do boleto.</li>
              </ul>

              <Button>Adquirir já!</Button>
            </PlanosDescriptionBox>
          </PlanosBox>
          <span>
            dúvidas? contate o nosso{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0"
              target="__blank"
            >
              <b>Suporte</b>
            </a>
          </span>
        </PlanosSection>
      </NossosPlanos>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <OtimizeTitle>
        Otimize seu envio de remessas com o Blu Valida!
      </OtimizeTitle>
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

export default HomeParceiro;
