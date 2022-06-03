import Container from "./Container";
import Image from "./Image";
import QRCodeimage from "../images/image-qr-code.png"
import Text from "./Text";

function App() {
  return (
    <div className="App">
      <Container>
        <Image src={QRCodeimage} alt="QRCode" />
        <Text as = "h2">
          Improve your frontend skills by building projects.
        </Text>                
      </Container>
    </div>
  );
}
export default App;
