import React from "react";

const Style2 = () => {
    const styleTitle = {
        fontSize: "2rem",
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    }



  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nobis
        quo enim eos, voluptatibus illo! Obcaecati atque aliquam dolores
        corporis quod accusamus excepturi optio, totam a, culpa molestiae fugit
        provident!
      </p>

      <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nobis
        quo enim eos, voluptatibus illo! Obcaecati atque aliquam dolores
        corporis quod accusamus excepturi optio, totam a, culpa molestiae fugit
        provident!
      </p>
    </div>
  );
};

export default Style2;
