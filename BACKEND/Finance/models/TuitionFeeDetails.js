const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const FeeDetailsSchema=new Schema({
    
    EventID: {
        type: String,
        required:true
    },
    EventName: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Description:{
        type: String,

    },
    PhoneNumber: {
        type:Number,
        required: true
    }

})

//parameters are tableName,schema name
const TuitionFeeDetails=mongoose.model("FeeDetail", FeeDetailsSchema);

// export
module.exports=TuitionFeeDetails;
