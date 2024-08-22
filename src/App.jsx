import { useState } from "react";
import headerLogo from "../public/images/oi_cho.png";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <a href="#" target="_blank">
          <img src={headerLogo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>Ой-Чо за бренд!!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Iure, ab aliquid? Asperiores eaque
        soluta distinctio provident cumque vel dolore, nulla, molestiae quam
        expedita quod qui iusto, maxime hic similique? Quisquam!Lorem Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores
        facere obcaecati illum excepturi, alias, corrupti debitis aliquid
        aperiam fugiat maxime ipsa ea optio qui error aut voluptatem minima.
        Quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
        hic neque totam. Pariatur illum esse dolor earum labore laborum saepe
        iusto, ipsam error, nostrum deleniti obcaecati, praesentium quasi odit
        perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Id, laudantium ab! Qui eveniet aliquam error veritatis consequuntur sit
        sed praesentium ipsam nulla. Eveniet sapiente quasi cumque quia nemo
        minus accusantium!
      </p>
      <Footer />
    </>
  );
}

export default App;
