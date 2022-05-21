/*import React,{useState} from 'react'
import axios from "axios";

export default function AddFeeDetails(){

    const [EventID,setEventID]=useState("");
    const [EventName,setEventName]=useState("");
    const [Location,setLocation]=useState("");
    const [Description,setDescription]=useState("");
    const [PhoneNumber,setPhoneNumber]=useState("");

    function sendData(e){
        //preventDefault() is used to stop doing the allocated task in submit
        e.preventDefault();
        
        const newFeeDetails ={
            EventID,
            EventName,
            Location,
            Description,
            PhoneNumber,
        }
        //console.log(newFeeDetails)
        //adding data
        axios.post("http://localhost:8070/feeDetails/add",newFeeDetails).then(()=>{
            alert("Fee details added")
        }).catch((err)=>{
            alert(err);
            console.log(err)
        })

    }


    return(
        <div className="m-24 p-3 border-1 border-gray-400 ...">
            <form onSubmit={sendData}>
            <div class="form-group">
                <label for="EventID" class="form-label">EventID</label>
                <input type="text" class="form-control"  id="EventID" placeholder="Enter EventID" 
                onChange={(e)=>{
                    setEventID(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="Name" class="form-label">EventName</label>
                <input type="text" class="form-control" id="Name" placeholder="Enter Name"
                onChange={(e)=>{
                    setEventName(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="Location" class="form-label">Location</label>
                <input type="text" class="form-control" id="Location" placeholder="Enter Location"
                onChange={(e)=>{
                    setLocation(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="Description" class="form-label">Description</label>
                <input type="text" class="form-control" id="Description" placeholder="Enter Description"
                onChange={(e)=>{
                    setDescription(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="PhoneNumber" class="form-label">PhoneNumber</label>
                <input type="text" class="form-control" id="PhoneNumber" placeholder="Enter PhoneNumber"
                onChange={(e)=>{
                    setPhoneNumber(e.target.value);
                }}></input>
                
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>







        
    )
}*/

import React, { Component} from 'react';

import axios from 'axios';
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import swal from "sweetalert2";

export default class TuitionFeeDetails extends Component{
    constructor(props) {
        super(props);

        //this.onChangeEventID = this.onChangeEventID.bind(this);
        //this.onChangeEventName = this.onChangeEventName.bind(this);
        //this.onChangeLocation = this.onChangeLocation.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);
        //this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            EventID: '',
            EventName: '',
            Location:'',
            Description:'',
            PhoneNumber:'',
            feeDetails: [],
            EventIDError:'',
            EventNameError:'',
            LocationError:'',
            PhoneNumberError:''

        }
    }  
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            feeDetails:['test user'],
            name : 'test user'
        })
    }
    
    
    onChangeEventID=(e)=>{
        this.setState({
            EventID: e.target.value
        });
    }
    onChangeEventName=(e)=>{
        this.setState({
            EventName: e.target.value
        });
    }
    onChangeLocation=(e)=>{
        this.setState({
            Location: e.target.value
        });
    }
    onChangeDescription=(e)=>{
        this.setState({
            Description: e.target.value
        });
    } 
    onChangePhoneNumber=(e)=>{
        this.setState({
            PhoneNumber: e.target.value.replace(/\D/g,'')
        });
    }
    //validation part
    validate=()=>{

        let EventIDError='';
        let EventNameError='';
        let LocationError='';
        let PhoneNumberError='';

        if(!this.state.EventID){
            EventIDError="EventID cannot be empty";
        }
        if(!this.state.EventName){
            EventNameError="EventName cannot be empty";
        }
        if(!this.state.Location){
            LocationError="Location cannot be empty";
        }
        if(!this.state.PhoneNumber){
            PhoneNumberError="PhoneNumber cannot be empty";
        }

        if(EventIDError || EventNameError || LocationError || PhoneNumberError){
            this.setState({EventIDError,EventNameError,LocationError,PhoneNumberError});
            return false;
        }

        return true;



    } 
   

    onSubmit=(e)=>{
        e.preventDefault();

        //changed barrow to some name
        const feeDetails ={
            EventID:this.state.EventID,
            EventName:this.state.EventName,
            Location:this.state.Location,
            Description:this.state.Description,
            PhoneNumber:this.state.PhoneNumber,
        }

        const isValid = this.validate()

        if(isValid){
        axios.post('http://localhost:8070/feeDetails/add',feeDetails)
        swal.fire("Inserted","Tuition Fee added successfully!","success")
        .then(()=>{
            //alert("New Fee Details Added");
            this.setState({
                EventID:"",
                EventName:"",
                Location:"",
                Description:"",
                PhoneNumber:"",
            })
        }).catch((err)=>{
            alert(err)
        })
    }
}
//demo button
btnDemo = (e) => {
    e.preventDefault();
  
    const {EventID,EventName,Location,Description,PhoneNumber } = this.state;
  
    const data = {
        EventID:EventID,
        EventName:EventName,
        Location:Location,
        Description:Description,
        PhoneNumber:PhoneNumber,
    }
  
    console.log(data)
  
    this.setState(
        {
            EventID:"tv980",
            EventName:"Paba",
            Location:"sub456",
            Description:"A/L History",
            PhoneNumber:"1500",
        }
    )
  }
    

 render(){
        return(

            <div className="m-8 ..."style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
               <h3><center><b>Event Planning Form </b></center></h3>
                
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="EventID" class="form-label">EventID</label>
                <input type="text" class="form-control"  id="EventID" placeholder="Enter EventID"
                value={this.state.EventID}
                onChange={this.onChangeEventID}></input>
                <div style={{color:"red"}}>
                    {this.state.EventIDError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="Name" class="form-label">EventName</label>
                <input type="text" class="form-control" id="Name" placeholder="Enter Name"
                value={this.state.EventName}
                onChange={this.onChangeEventName}></input>
                <div style={{color:"red"}}>
                    {this.state.EventNameError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="Location" class="form-label">Location</label>
                <input type="text" class="form-control" id="Location" placeholder="Enter Location"
                value={this.state.Location}
                onChange={this.onChangeLocation} required></input>
                <div style={{color:"red"}}>
                    {this.state.LocationError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="Description" class="form-label">Description</label>
                <input type="text" class="form-control" id="Description" placeholder="Enter Description"
                value={this.state.Description}
                onChange={this.onChangeDescription}></input>
                
            </div>
            <div class="form-group">
                <label for="PhoneNumber" class="form-label">PhoneNumber</label>
                <input type="text" class="form-control" id="PhoneNumber" placeholder="Enter PhoneNumber"
                value={this.state.PhoneNumber}
                onChange={this.onChangePhoneNumber}></input>
                <div style={{color:"red"}}>
                    {this.state.PhoneNumberError}
                </div>   
                
            </div>
            <br></br>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
            <div className="float-right ...">
            <td >
                <Link to ={"/listTFeeDetails"}>View Details</Link></td>
            </div>
           
            </form>
            
        </div>







        )
    }

}