import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";



export default class EditTuitionFeeDetail extends Component{
    constructor(props) {
        super(props);
         
        this.state = {
            EventID: '',
            EventName: '',
            Location:'',
            Description:'',
            PhoneNumber:'',
            FeeDetails: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/feeDetails/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                EventID: response.data.EventID,
                EventName: response.data.EventName,
                Location:response.data.Location,
                Description:response.data.Description,
                PhoneNumber:response.data.PhoneNumber,
                
               })
        })
        .catch(function (error){
            console.log(error);
        })
    }
    
    onChangeEventID=(e)=>{
        this.setState({
            EventID : e.target.value
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
            Description : e.target.value
        });
    }
    onChangePhoneNumber=(e)=>{
        this.setState({
            PhoneNumber : e.target.value.replace(/\D/g,'')
        });
    }
   
    
    onSubmit=(e)=>{
        e.preventDefault();
        const FeeDetails ={

            EventID: this.state.EventID,
            EventName: this.state.EventName,
            Location:this.state.Location,
            Description:this.state.Description,
            PhoneNumber:this.state.PhoneNumber,
            
        }

    
       console.log(FeeDetails);

       axios.put('http://localhost:8070/feeDetails/update/'+this.props.match.params.id ,FeeDetails)
       .then(res => console.log(res.data));
        
       swal.fire("Updated"," Updated successfully!","success")
       window.location='/listTFeeDetails'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <h3>Edit Event Details</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-grouo">
                         
                         <label>EventID</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.EventID}
                            onChange={this.onChangeEventID}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>EventName</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.EventName}
                            onChange={this.onChangeEventName}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Location</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Location}
                            onChange={this.onChangeLocation}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Description</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Description}
                            onChange={this.onChangeDescription}
                            />      
                        
                    </div>
                    <div className="form-grouo">
                         
                         <label>PhoneNumber</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.PhoneNumber}
                            onChange={this.onChangePhoneNumber}
                            />      
                        
                    </div>
                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Edit Details" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}