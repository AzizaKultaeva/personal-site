import "./topbar.css"


export default function TopBar() {
  return (
    <div class="top">      
      <div class="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-linkedin"></i>      
        <i class="topIcon fa-brands fa-square-twitter"></i>
        <i class="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div class="topCenter">
        <ul class="topList">
          <li class="topListItem">Education</li>
          <li class="topListItem">Journalism</li>
          <li class="topListItem">Communication</li>
          <li class="topListItem">Capstone</li>
          <li class="topListItem">Language</li>
          <li class="topListItem">Travelling</li>
        </ul>
      </div>
      <div class="topRight">
        <img
         class="topImg"
         src="images/aziza.jpg" alt=""
        />
      </div>
    </div>
  );
}