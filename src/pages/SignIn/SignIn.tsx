import { Container, Content, Header, VideoBg, Background } from './styles';

import logo from '../../assets/images/logo.png';
import video from '../../assets/videos/video.mp4';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <Header>
          <img src={logo} alt="Logo Finance web" />
        </Header>
      </Content>
      <Background>
        <div>
          <h1>Gerencie seus ganhos e gastos de forma gratuita.</h1>
        </div>
        <VideoBg autoPlay loop muted src={video} />
      </Background>
    </Container>
  );
}
