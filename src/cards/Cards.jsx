import "./cards.css"
import Communication from "../post_components/Communication"
import LanguageLearning from "../post_components/Language"
import Travelling from "../post_components/Travelling"
import CapstoneProject from "../post_components/Capstone"
import Education from "../post_components/Education"
import Journalism from "../post_components/Journalism"

export default function Cards() {
  return (
    <div class="cards">
      <Education/>
      <Journalism/>
      <Communication/>
      <LanguageLearning/>
      <CapstoneProject/>
      <Travelling/>
    </div>
  )
}
