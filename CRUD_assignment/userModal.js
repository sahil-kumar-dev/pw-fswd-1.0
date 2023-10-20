import mongoose from "mongoose";

const {Schema,model} = mongoose

const userSchema = new Schema({
	name:{
		type:String,
		required:[true,"Name is required"]
	},
	email:{
		type:String,
		required:[true,"Email is required"],
		unique:true
	},
	password:{
		type:String,
		required:[true,"Password is required"],
		minLength:[8,"Password length should be minimum 8 charcters."]
	}
})

const User =  model('user',userSchema)

export default User