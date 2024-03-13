import "./MonsterBox.css";
import Monster from "../Monster/Monster";
import monster from "./monster.json";


const MonsterBox = () => {
  const data = monster.data;

  return (
    <>
      <h4>Ranked by threatlevel:</h4>
      {data.map((monster) => {
        return <Monster info={monster.info} number={monster.number} name={monster.name} image={monster.Image} eyes={monster.eyes} arms={monster.arms}/>;
      })}
    </>
  );
};

export default MonsterBox;
