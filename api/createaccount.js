const db=require("../database");
const bcrypt=require("bcrypt");

export default async function handler (req,res){
    
    if(req.method==="POST"){
        console.log(req.body);
        const {Name,Email,userPassword}=req.body;

        if(req.body.Name.trim()===""||req.body.Email.trim()===""||req.body.Password.trim()===""){
            return res.status(401).json({
                success:false,
                message:"Check your info and try again"
            })

        }
            
        
        const Password=await bcrypt.hash(userPassword,12);

        //inserting  data
        try{
            const{error}=await db.from('users').insert(Name,Email,Password)
            return res.status(200).json({
                        success:true,
                        message:"Account created successfully"
                    });
        }catch(error){
            console.log(`Encountered an Error, Description: ${error}`);
        }
    }
}