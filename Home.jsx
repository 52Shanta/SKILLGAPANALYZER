import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{background:"#0f172a",color:"white",height:"100vh"}}>
      
      <nav style={{display:"flex",justifyContent:"space-between",padding:"20px"}}>
        <h2>SkillAI 🚀</h2>
        <div>
          <Link to="/login">Login</Link> | 
          <Link to="/register">Register</Link> | 
          <Link to="/about">About</Link>
        </div>
      </nav>

      <div style={{textAlign:"center",marginTop:"100px"}}>
        <h1>AI Skill Gap Analyzer</h1>
        <p>Upload resume & get AI career insights</p>
      </div>
    </div>
  );
}