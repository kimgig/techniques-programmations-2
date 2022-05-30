import Container from "./components/Container";
import ImgLogo from "./components/ImgLogo";
import Title from "./components/Title";
import Paragraphe from "./components/Paragraphe"
import EthereumClock from "./components/EthereumClock";
import Avatar from "./components/Avatar";
import HorizontalLine from "./components/HorizontalLine";

function App() {
  const avatarComponentOnClick = (event) =>{
    alert("Creation of Jules Wyvern");
  }

  return (
    <div className="App">
      <Container>
        <ImgLogo></ImgLogo>
        <Title></Title>
        <Paragraphe></Paragraphe>
        <EthereumClock></EthereumClock>      
        <HorizontalLine></HorizontalLine>
        <Avatar OnClick={avatarComponentOnClick}></Avatar>
      </Container>
    </div> 
  );
}
export default App;
