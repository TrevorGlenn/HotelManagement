import React, { Component } from 'react';
import axios from 'axios';
import swal from "sweetalert2";



export default class EditTuitionFeeDetail extends Component{
    constructor(props) {
        super(props);
         
        this.state = {
            RoomTitle: '',
            Rentperday: '',
            Description:'',
            RoomNumber:'',
            Discount:'',
            FeeDetails: [] 

        }
    
    }

    componentDidMount(){
        axios.get('http://localhost:8070/feeDetails/'+this.props.match.params.id)
        .then(response => {
            this.setState({
            
            
                RoomTitle: response.data.RoomTitle,
                Rentperday: response.data.Rentperday,
                Description:response.data.Description,
                RoomNumber:response.data.RoomNumber,
                Discount:response.data.Discount,
                
               })
        })
        .catch(function (error){
            console.log(error);
        })
    }
    
    onChangeRoomTitle=(e)=>{
        this.setState({
            RoomTitle : e.target.value
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
            RoomNumber : e.target.value
        });
    }
    onChangeDiscount=(e)=>{
        this.setState({
            Discount : e.target.value.replace(/\D/g,'')
        });
    }
   
    
    onSubmit=(e)=>{
        e.preventDefault();
        const FeeDetails ={

            RoomTitle: this.state.RoomTitle,
            Rentperday: this.state.Rentperday,
            Description:this.state.Description,
            RoomNumber:this.state.RoomNumber,
            Discount:this.state.Discount,
            
        }

    
       console.log(FeeDetails);

       axios.put('http://localhost:8070/feeDetails/update/'+this.props.match.params.id ,FeeDetails)
       .then(res => console.log(res.data));
        
       swal.fire("Updated","Hotel Details updated successfully!","success")
       window.location='/listTFeeDetails'; 
        
    }



    render(){

        return(
            <div className="container">
            <div>
                <h3>Edit room Details</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-grouo">
                         
                         <label>Room Title</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.RoomTitle}
                            onChange={this.onChangeRoomTitle}
                            />      
                        
                    </div> 
                    <div className="form-grouo">
                         
                         <label>Rent perday</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Rentperday}
                            onChange={this.onChangeRentperday}
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
                         
                         <label>Room Number
                             
                             </label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.RoomNumber}
                            onChange={this.onChangeRoomNumber}
                            />      
                        
                    </div>
                    <div className="form-grouo">
                         
                         <label>Discount</label> 
                         <input 
                            type="text"
                            className="form-control"
                            value={this.state.Discount}
                            onChange={this.onChangeDiscount}
                            />      
                        
                    </div>
                    
                    <br/>
                    <div className="form-group" align="center">
                            <input type="submit" value="Edit Room Details" className="btn btn-primary"/>
                    </div>
                     
                </form> 
             </div> 
             </div>
        )
    }
}