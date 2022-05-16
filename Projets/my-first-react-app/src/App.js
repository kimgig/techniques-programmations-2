import Container from "./components/Container";
import ImgLogo from "./components/ImgLogo";
import Title from "./components/Title";
import Paragraphe from "./components/Paragraphe"
import EthereumClock from "./components/EthereumClock";
import Avatar from "./components/Avatar";


function App() {
  return (
    <div className="App">
      <Container>
        <ImgLogo></ImgLogo>
        <Title></Title>
        <Paragraphe></Paragraphe>
        <EthereumClock></EthereumClock>
        <hr className="hrsize"></hr>
        <Avatar></Avatar>
      </Container>
    </div> 
  );
}
export default App;
