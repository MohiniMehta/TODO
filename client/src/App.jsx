import { useEffect, useState} from "react";

export default function App() {
   const [message,setMessage]=useState("");
  useEffect(() => {
    async function getTodos() {
      try {
        const res = await fetch("/api/todos");
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        const todos = await res.json();
    
        console.log(todos);
        setMessage(todos.mssg);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    getTodos();
  }, []);
  

  return (
   <main className="container">
    <h1>TO DO's</h1>
    {message &&<p>{message}</p>}
   </main>
  );
}

