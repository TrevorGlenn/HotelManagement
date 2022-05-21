import React,{ Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

//report
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import swal from "sweetalert2";


const generatePDF = feeDetails=> {

    const doc = new jsPDF();
    const tableColumn = ["RoomTitle", "Rentperday", "Description","RoomNumber","Discount"];
    const tableRows = [];
   

    feeDetails.map(Fee => {
        const FeeData = [
            Fee.RoomTitle,
            Fee.Rentperday,
            Fee.Description,
            Fee.RoomNumber,
            Fee.Discount,
             
        ];
        tableRows.push(FeeData);
    })
   
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
    doc.save("Fee Details Report.pdf");
};

const TuitionFeeDetail = props =>(
    <tr>
        <td>{props.feeDetails.RoomTitle}</td>
        <td>{props.feeDetails.Rentperday}</td>
        <td>{props.feeDetails.Description}</td>
        <td>{props.feeDetails.RoomNumber}</td>
        <td>{props.feeDetails.Discount}</td>
        
     
        {/*<td >

        <Link to ={"//"+props.feeDetails._id}>Edit details</Link> | <a href="#" onClick={() => { props.DeleteTuitionFee(props.feeDetails._id)}}>Delete</a></td>
        */}
      <td>
             <a className="btn btn-warning" href={`/updateTuitionFee/${props.feeDetails._id}`}>
                 <i className="fas fa-edit"></i>&nbsp;Edit
            </a>
             &nbsp;
           <a className="btn btn-danger" href="#" onClick={()=>{ props.DeleteTuitionFee(props.feeDetails._id) }}>
                 <i className="far fa-trash-alt"></i>&nbsp;Delete
            </a>
      </td>
      </tr>
)

export default class DisplayTuitionFee extends Component{
    constructor(props){
        super(props);

        this.DeleteTuitionFee = this.DeleteTuitionFee.bind(this);
        this.state = {feeDetails: []}
    }

    componentDidMount(){
        axios.get('http://localhost:8070/feeDetails/')
        .then(response => {
            this.setState({feeDetails: response.data})
        })
        .catch((error) =>{
         console.log(error);
        })
    }

    DeleteTuitionFee(id){
        axios.delete('http://localhost:8070/feeDetails/delete/'+id)
        .then(res => console.log(res.data));
        swal.fire("Deleted","Hotel Details deleted successfully!","success")
        this.setState({
            feeDetails: this.state.feeDetails.filter(el => el._id !== id)
        })
    }

    //search
    filterData(feeDetails,searchKey){

        const result = feeDetails.filter((Fee)=>

        Fee.RoomTitle.toLowerCase().includes(searchKey)||
        Fee.Rentperday.toLowerCase().includes(searchKey)||
        Fee.Description.toLowerCase().includes(searchKey)||
        Fee.RoomNumber.toLowerCase().includes(searchKey)
       
        )

        this.setState({feeDetails:result})

    }

    handleSearchArea = (e) =>{
          const searchKey = e.currentTarget.value;
          axios.get('http://localhost:8070/feeDetails/').then(res =>{

            this.filterData(res.data,searchKey)
        })

      }

    CurrentTuitionFeeTable(){
        return this.state.feeDetails.map(currentexercise => {

            return <TuitionFeeDetail feeDetails={currentexercise} DeleteTuitionFee={this.DeleteTuitionFee} key={currentexercise._id}/>

        })

    }

    

   render(){
       return (
            <div>
                <div class="mt-20 ...">
            <center><b><h3>Room Details</h3></b></center>
            </div>
           <div  className = "container" class Name="m-20 mt-3 ... ">
               <div className="container">
            <div className="row">
            <div className="col-lg-9 mt-2 mb-2"/>
            <div className="col-lg-3 mt-2 mb-2">

            <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>                                
            </input>
            </div>
            </div>
               
               <table  className="table" class Name="table table-hover" style={{backgroundColor:"rgb(200,200,200,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}}>
                   <thead className="thead-light">
                       <tr>
                       <th>RoomTitle</th>
                       <th>Rentperday</th>
                       <th>Description</th>
                       <th>RoomNumber</th>
                       <th>Discount</th>

                       </tr>
                       </thead>
                       <tbody>
                           {this.CurrentTuitionFeeTable()  }
                       </tbody>
               </table>
           </div>
           
           </div>
           </div>
       )
   }
}