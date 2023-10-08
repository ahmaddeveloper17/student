


"use client"
import {useState} from "react"
import {addDoc, collection, getDoc} from "firebase/firestore"
import {db} from "@/config/firebase"

export default function Form() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")

  const onSubmitHanlder = async () =>{
    let student = {
      name: userName,
      email,
      course
    }
    try {
      const collectionName = collection(db,"student")
    
      await addDoc(collectionName, student )
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>
        Course registeration Form
      </h1>

      {/* <form> */}
       <div className="form">
       <input   className="input" type="text" placeholder="Enter name"  onChange={(e)=> setUserName(e.target.value)}  />
       <input  className="input" type="email" placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)}  />
       <input  className="input" type="text" placeholder="Enter phone number"  onChange={(e)=> setCourse(e.target.value)}  />
       
       <button style={{borderRadius:"10px", color:"white",backgroundColor:"#2391e4"}} onClick={onSubmitHanlder}>Submit</button></div>
      {/* </form> */}





    </div>
  )
}

