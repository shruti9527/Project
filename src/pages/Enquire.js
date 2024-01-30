import Navbar from "../components/Navbar";
import  Form  from "../components/Form";


export default function Enquire(){
    return(
        <>
            <Navbar title ="Shrutek Automation System" />
            <div class="container overflow-hidden text-center">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3">
     <img src="https://images.pexels.com/photos/5984599/pexels-photo-5984599.jpeg?auto=compress&cs=tinysrgb&w=600"/>
     </div>
    </div>
    <div class="col">
      <div class="p-3">
        <Form/>
      </div>
    </div>
  </div>
</div>
            
        </>
    )
}