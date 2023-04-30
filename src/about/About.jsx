import "./about.css"
import { supabase } from "../supabaseClient"
import { useEffect, useState } from "react";


export default function About() {
  
  const [descs, setDesc] = useState([]);

  useEffect(() => {
    getDescription();
  }, []);

  async function getDescription() {
    const { data } = await supabase.from("education").select();
    setDesc(data);
  }

  return (
    <div className="about-info">
        {descs.map((desc) => (
        <p className="about-text" key={desc.description}>{desc.description}</p>
        ))}
    </div>
  )
}
