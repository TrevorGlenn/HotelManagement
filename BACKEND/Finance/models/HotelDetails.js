const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const FeeDetailsSchema=new Schema({
    
    RoomTitle: {
        type: String,
        required:true
    },
    Rentperday: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    RoomNumber: {
        type: String,

    },
    Discount: {
        type:Number,
        required: true
    }

})

//parameters are tableName,schema name
const RoomDetails=mongoose.model("FeeDetail", FeeDetailsSchema);

// export
module.exports=RoomDetails;
