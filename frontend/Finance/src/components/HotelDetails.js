/*import React,{useState} from 'react'
import axios from "axios";

export default function AddFeeDetails(){

    const [RoomTitle,setRoomTitle]=useState("");
    const [Rentperday,setRentperday]=useState("");
    const [Description,setDescription]=useState("");
    const [RoomNumber,setRoomNumber]=useState("");
    const [Discount,setDiscount]=useState("");

    function sendData(e){
        //preventDefault() is used to stop doing the allocated task in submit
        e.preventDefault();
        
        const newFeeDetails ={
            RoomTitle,
            Rentperday,
            Description,
            RoomNumber,
            Discount,
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
                <label for="RoomTitle" class="form-label">RoomTitle</label>
                <input type="text" class="form-control"  id="RoomTitle" placeholder="Enter RoomTitle" 
                onChange={(e)=>{
                    setRoomTitle(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="Name" class="form-label">Rentperday</label>
                <input type="text" class="form-control" id="Name" placeholder="Rentperday"
                onChange={(e)=>{
                    setRentperday
                    (e.target.value);
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
                <label for="RoomNumber" class="form-label">RoomNumber</label>
                <input type="text" class="form-control" id="RoomNumber" placeholder="Enter RoomNumber"
                onChange={(e)=>{
                    setRoomNumber(e.target.value);
                }}></input>
                
            </div>
            <div class="form-group">
                <label for="Discount" class="form-label">Discount</label>
                <input type="text" class="form-control" id="Discount" placeholder="Enter Discount"
                onChange={(e)=>{
                    setDiscount(e.target.value);
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

export default class RoomDetails extends Component{
    constructor(props) {
        super(props);

        //this.onChangeRoomTitle = this.onChangeRoomTitle.bind(this);
        //this.onChangeRentperday = this.onChangeRentperday.bind(this);
        //this.onChangeDescription = this.onChangeDescription.bind(this);
        //this.onChangeRoomNumber = this.onChangeRoomNumber.bind(this);
        //this.onChangeDiscount = this.onChangeDiscount.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        

        this.state = {
            RoomTitle: '',
            Rentperday: '',
            Description:'',
            RoomNumber:'',
            Discount:'',
            feeDetails: [],
            RoomTitleError:'',
            RentperdayError:'',
            DescriptionError:'',
            DiscountError:''

        }
    }  
    
    //componentDitMount called automatically called right before anything display on the page
    componentDidMount(){
        this.setState({
            feeDetails:['test user'],
            name : 'test user'
        })
    }
    
    
    onChangeRoomTitle=(e)=>{
        this.setState({
            RoomTitle: e.target.value
        });
    }
    onChangeRentperday=(e)=>{
        this.setState({
            Rentperday: e.target.value
        });
    }
    onChangeDescription=(e)=>{
        this.setState({
            Description: e.target.value
        });
    }
    onChangeRoomNumber=(e)=>{
        this.setState({
            RoomNumber: e.target.value
        });
    } 
    onChangeDiscount=(e)=>{
        this.setState({
            Discount: e.target.value.replace(/\D/g,'')
        });
    }
    //validation part
    validate=()=>{

        let RoomTitleError='';
        let RentperdayError='';
        let DescriptionError='';
        let DiscountError='';

        if(!this.state.RoomTitle){
            RoomTitleError="RoomTitle cannot be empty";
        }
        if(!this.state.Rentperday){
            RentperdayError="Rentperday cannot be empty";
        }
        if(!this.state.Description){
            DescriptionError="Description cannot be empty";
        }
        if(!this.state.Discount){
            DiscountError="Discount cannot be empty";
        }

        if(RoomTitleError || RentperdayError || DescriptionError || DiscountError){
            this.setState({RoomTitleError,RentperdayError,DescriptionError,DiscountError});
            return false;
        }

        return true;



    } 
   

    onSubmit=(e)=>{
        e.preventDefault();

        //changed barrow to some name
        const feeDetails ={
            RoomTitle:this.state.RoomTitle,
            Rentperday:this.state.Rentperday,
            Description:this.state.Description,
            RoomNumber:this.state.RoomNumber,
            Discount:this.state.Discount,
        }

        const isValid = this.validate()

        if(isValid){
        axios.post('http://localhost:8070/feeDetails/add',feeDetails)
        swal.fire("Inserted","Room Details added successfully!","success")
        .then(()=>{
            //alert("New Fee Details Added");
            this.setState({
                RoomTitle:"",
                Rentperday:"",
                Description:"",
                RoomNumber:"",
                Discount:"",
            })
        }).catch((err)=>{
            alert(err)
        })
    }
}
//demo button
btnDemo = (e) => {
    e.preventDefault();
  
    const {RoomTitle,Rentperday,Description,RoomNumber,Discount } = this.state;
  
    const data = {
        RoomTitle:RoomTitle,
        Rentperday:Rentperday,
        Description:Description,
        RoomNumber:RoomNumber,
        Discount:Discount,
    }
  
    console.log(data)
  
    this.setState(
        {
            RoomTitle:"AC Room",
            Rentperday:"5000",
            Description:"Per one person",
            RoomNumber:"55",
            Discount:"1000",
        }
    )
  }
    

 render(){
        return(

            <div className="m-8 ..."style={{backgroundColor:"rgb(200,200,200,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}>
               <h3><center><b>Room Details </b></center></h3>
                
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="RoomTitle" class="form-label">RoomTitle</label>
                <input type="text" class="form-control"  id="RoomTitle" placeholder="Enter RoomTitle"
                value={this.state.RoomTitle}
                onChange={this.onChangeRoomTitle}></input>
                <div style={{color:"red"}}>
                    {this.state.RoomTitleError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="Name" class="form-label">Rentperday</label>
                <input type="text" class="form-control" id="Name" placeholder="Rentperday"
                value={this.state.Rentperday}
                onChange={this.onChangeRentperday}></input>
                <div style={{color:"red"}}>
                    {this.state.RentperdayError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="Description" class="form-label">Description</label>
                <input type="text" class="form-control" id="Description" placeholder="Enter Description"
                value={this.state.Description}
                onChange={this.onChangeDescription} required></input>
                <div style={{color:"red"}}>
                    {this.state.DescriptionError}
                </div>   
                
            </div>
            <div class="form-group">
                <label for="RoomNumber" class="form-label">RoomNumber</label>
                <input type="text" class="form-control" id="RoomNumber" placeholder="Enter RoomNumber"
                value={this.state.RoomNumber}
                onChange={this.onChangeRoomNumber}></input>
                
            </div>
            <div class="form-group">
                <label for="Discount" class="form-label">Discount</label>
                <input type="text" class="form-control" id="Discount" placeholder="Enter Discount"
                value={this.state.Discount}
                onChange={this.onChangeDiscount}></input>
                <div style={{color:"red"}}>
                    {this.state.DiscountError}
                </div>   
                
            </div>
            <br></br>
            <center><button type="submit" class="btn btn-primary">Submit</button></center>
            <div className="float-right ...">
            <td >
                <Link to ={"/listTFeeDetails"}>View Details</Link></td>
            </div>
            <button className="btn btn-warning" type="submit" style={{ marginTop: '15px', marginLeft:'5px' }} onClick={this.btnDemo}>
                                    <i className="far far-check-square"></i>
                                    &nbsp; <b>Demo</b>
             </button>
            </form>
            
        </div>







        )
    }

}