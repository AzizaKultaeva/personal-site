import "./home.css"
import Header from "../../header/Header"
import About from "../../about/About";
import Cards from "../../cards/Cards";



export default function Home() {
  return (
   <>
    <Header/>
    <About/>
    <div class="home">
      <Cards />
    </div>
  </>
  );
}
