import Navbar from "../components/Navbar";


export default function Contactus(){
    return(
        <>
            <Navbar title ="Shrutek Automation System" />
            <div class="container overflow-hidden text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">
     <ul class="list-group list-group-flush">
  <li class="list-group-item" ><h1>Get in touch with us</h1></li>
  <li class="list-group-item">
  <h3>Contact</h3>
  <h4>999888</h4>
  </li>
  <li class="list-group-item">
  <h3>Email</h3>
  <h4>abc@gmail.com</h4>
  </li>
  <li class="list-group-item">
  <h3>Based in</h3>
  <h4>Pune</h4>
  </li>
  <li class="list-group-item"></li>
</ul>
     </div>
    </div>
    <div class="col">
      <div class="p-3">
        <img src="https://images.pexels.com/photos/5984599/pexels-photo-5984599.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>
    </div>
  </div>
</div>
        </>
    )
}