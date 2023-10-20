import User from "./userModal.js"

const register = async (req,res)=>{
	const {name,email,password} = req.body

	try {
		if(!name || !email || !password){
			return res.status(400).json({
				success:false,
				message:"All fields are madantory"
			})
		}
	
		const checkUser = await User.findOne({email})
	
		if(checkUser){
			return res.status(400).json({
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

const login = async (req,res)=>{
	
	const {email,password} = req.body
	console.log(email,password);

	try {
		const user = await User.findOne({email})
	
		if(!user){
			return res.status(400).json({
				success:false,
				message:"No account associates with this email."
			})
		}
		
		if(password != user.password){
			return res.status(400).json({
				success:false,
				message:"Invalid password."
			})
		}
	
		user.password = undefined
	
		res.status(200).json({
			success:true,
			message:"User login successful",
			user
		})
		
	} catch (error) {
		res.status(400).json({
			success:false,
			message:error.message
		})
	}

}

export {
	register,
	login
}