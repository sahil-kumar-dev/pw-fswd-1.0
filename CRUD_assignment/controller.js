import User from "./userModal.js"

const register = async (req,res)=>{
	const {name,email,password} = req.body

	try {
		if(!name || !email || !password){
			res.status(400).json({
				success:false,
				message:"All fields are madantory"
			})
		}
	
		const checkUser = await User.findOne({email})
	
		if(checkUser){
			res.status(400).json({
				success:false,
				message:"User already exists"
			})
		}
	
		const user = await User.create({
			name,email,password
		})
	
		await user.save()
	
		res.status(200).json({
			success:true,
			message:"User registration successful.",
			user
		})
		
	} catch (error) {
		res.status(400).json({
			success:false,
			message:error.message
		})
	}
	
}

const login =()=>{

}

export {
	register,
	login
}