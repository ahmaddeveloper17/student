"use client"
import { useState, useEffect } from "react"
import { getDocs, collection, query, where, deleteDoc, doc, updateDoc} from "firebase/firestore"
import { db } from "@/config/firebase"

export default function Home() {

  const [students, setStudents] = useState([])

  const [id, setId] = useState("")

  const [loading, setLoading] = useState(false)

  const fetchDocs = async ()=> {
    try {
      const collectionName = collection(db, "student" )
      const docs = await getDocs(collectionName)
      const studentsData = []
      docs.forEach((doc)=>{
        studentsData.push({
          id:doc.id,
          ...doc.data()
        })
      })
      setStudents(studentsData)
      console.log("students",studentsData)

    } catch (error) {
      console.log("error",error);
    }
  


  }
  useEffect(() => {
   fetchDocs()
  }, [])

  const onDeletHandler = async (id)=>{
    const docRef = doc(db,"abc", id )

   try {
    setId(id)
    setLoading(true)
    
    await deleteDoc(docRef)
    
     
    const newStudents = students.filter((student)=>id !== student.id)
    setLoading(false)
    setStudents(newStudents)
     
   } catch (error) {
    alert("error")
   }
  }

  const onUpdateHandler = async (id)=>{
    try {
      const docRef = doc(db,"abc", id)
      setId(id)
      setLoading(true)
      await updateDoc(docRef, {
        email:"naveed@techloset.com"
      })
      fetchDocs()
      setLoading(false)


    } catch (error) {
      
    }
  }


  
  return (
    <div>

      <h1 style={{textAlign:"center"}}>List of students</h1>

      <table style={{marginLeft:"200px"}}>
        <tr style={{border:"4px solid white"}}>
          <td style={{border:"4px solid white", marginLeft:"10px"}}>id</td>
          <td style={{border:"4px solid white"}}>Student Name</td>
          <td style={{border:"4px solid white"}}>Student email</td>
          <td style={{border:"4px solid white"}}>Student course</td>
          <td style={{border:"4px solid white"}}> delete</td>
          <td style={{border:"4px solid white"}}> update</td>
        </tr>
         {
          students.map((student)=>{
            return (
              <tr>
                <td style={{border:"2px solid black"}}>{student.id}</td>
                <td style={{border:"2px solid black"}}>{student.name}</td>
                <td style={{border:"2px solid black"}}>{student.email}</td>
                <td style={{border:"2px solid black"}}>{student.course}</td>
                <td style={{border:"2px solid black"}}><button onClick={()=>onDeletHandler(student.id)} style={{background:"red",color:"white"}} >  { student.id == id && loading ? "loading...":"delete"}</button></td>
                <td style={{border:"2px solid black"}}><button onClick={()=>onUpdateHandler(student.id)} style={{background:"#0198e1" ,color:"white"}}>  { student.id == id && loading ? "loading...":"update"}</button></td>

              </tr>
            )
          })
         }
      </table>


      <div className="container">
<div className="row" style={{marginTop:"40px"}}>
  
<div style={{border:"0.2px solid black" , borderRadius:"10px" , backgroundColor:"#5b5b5b" }} className="col-lg-2 md-2 sm-5"><h5>total students</h5><h6 style={{color:"white"}}>156</h6></div>
<div className="col"></div>
<div style={{border:"0.2px solid black" , borderRadius:"10px"  , backgroundColor:"#5b5b5b"}} className="col-lg-2 md-2 sm-5"><h5>total courses</h5><h6 style={{color:"white"}}>6</h6> </div>
<div className="col"></div>
<div style={{border:"0.2px solid black" , borderRadius:"10px"  , backgroundColor:"#5b5b5b"}} className="col-lg-2 md-2 sm-5"><h5> Attendance</h5><h6 style={{color:"white"}}>130</h6> </div>
<div className="col"></div>
<div style={{border:"0.2px solid black" , borderRadius:"10px"  , backgroundColor:"#5b5b5b"}} className="col-lg-2 md-2 sm-5"><h5>Today Absent</h5><h6 style={{color:"white"}}>26</h6> </div>
<div className="col"></div>
</div>
</div>

    </div>
  )
}