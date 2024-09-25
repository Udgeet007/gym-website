import { Loader } from "lucide-react";
import { useState } from "react";
// import {ClipLoader} from "lucide-react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <section className="contact">
      <form>
        <h1>Contact us</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <input type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button type="submit" disabled={loading} style={{display: "flex", justifyContent:"center", alignItems:"center", gap:"15px"}}>{loading && <Loader size={20} color="white"/>}Send Message</button>
      </form>
    </section>
  );
};
