const router=require("express").Router();
let feeDet=require("../models/HotelDetails");

//http://localhost:8090/feeDetails/add this is the use of route method
router.route("/add").post((req,res)=>{

    const RoomTitle=req.body.RoomTitle;
    const Rentperday=req.body.Rentperday;
    const Description=req.body.Description;
    const RoomNumber=req.body.RoomNumber;
    const Discount=Number(req.body.Discount);

    const newFeeDetails=new feeDet({
        RoomTitle,
        Rentperday,
        Description,
        RoomNumber,
        Discount
    })

    //cheching if added or not
    newFeeDetails.save().then(()=>{
        res.json("Student addedd")
    }).catch((err)=>{
        console.log(err);
    })

})

//data retrieving
router.route("/").get((req,res)=>{
    //using .find() method we get all the results in the table
    feeDet.find().then((feeDetail)=>{
        res.json(feeDetail)
    }).catch((err)=>{
        console.log(err);
    })

})

//update data
router.route("/update/:id").put(async (req,res)=>{
    //assigning the mongodb assigned id
    let userId=req.params.id;

    //assigning values
    //destructure method used
    const{RoomTitle,Rentperday,Description,RoomNumber,Discount}=req.body;

    const updateFeeDetails={
        RoomTitle,
        Rentperday,
        Description,
        RoomNumber,
        Discount
    }
    //also we can use (userId,{RoomTitle,name,Description,RoomNumber,Discount})
    const update=await feeDet.findByIdAndUpdate(userId,updateFeeDetails)
    .then(()=>{
        //res.status() means like error code given 404
        res.status(200).send({status:"Details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating data", error:err.message});
    })
    
})

//delete
router.route("/delete/:id").delete(async (req,res)=>{

    let userId=req.params.id;

    await feeDet.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with deleting", error:err.message});
    })

})

//retrieve data by id

router.route("/get/:id").get(async (req,res)=>{

    let userId=req.params.id;

    const user=await feeDet.findById(userId)
    .then((FeeDetails)=>{
        res.status(200).send({status:"User fetched", FeeDetails})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with get user", error:err.message});
    })
    
})

router.route("/:id").get((req, res) => {
    feeDet.findById(req.params.id)
    .then( FeeDetails=> res.json(FeeDetails))
    .catch(err => res.status(400).json('Error: ' + err)); 
  })







module.exports=router;





