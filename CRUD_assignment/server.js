import app from "./app.js"
import mongoose from "mongoose";

const PORT = 8080


const connectionToDB = async ()=>{
	await mongoose.connect('mongodb://127.0.0.1:27017/sample')
	.then(()=>{
		console.log('Db connected successfully');
	})
	.catch(err=>{
		console.log(err.message);
	})
}

connectionToDB()

app.listen(PORT,()=>{
	console.log('Server has started on PORT ' + PORT);
})