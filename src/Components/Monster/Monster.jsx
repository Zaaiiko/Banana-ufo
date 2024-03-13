import "./Monster.css";

const Monster = ({ number, name, image, eyes, arms, info }) => {
  return (
    <>
      <div className="MonsterCard">
        <h5> Number: {number}</h5>
        <p> Name: {name}</p>
        <p> Info: {info}</p>
        <p> Eyes: {eyes}</p>
        <p> Arms: {arms}</p>
        <img src= {image} alt="monsterpicture" /> 
      </div>
    </>
  );
};

export default Monster;
