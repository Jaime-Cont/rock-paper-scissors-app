import Header from "./components/header";
import RPSBoard from "./components/rps-gameboard";
import RPSLSBoard from "./components/rpsls-gameboard";
import Footer from "./components/footer";
import RPSRules from "./components/rps-rules";
import RPSLSRules from "./components/rpsls-rules";

function App() {
  return (
    <>
      <main>
        <Header />
        <RPSRules />
        <div className="rules-bg" id="rulesBG"></div>
        <RPSLSRules />
        <RPSBoard />
        <RPSLSBoard />
      </main>

      <Footer />
    </>
  );
}

export default App;
