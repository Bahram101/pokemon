import React, { useState } from "react";
import { Card } from "antd";
import CardModal from "./CardModal";
import "./card.scss";
const { Meta } = Card;

const PokemonCard = (props) => {
  const { id, name, stats, weight, sprites, types } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const title = name.toUpperCase();
  let type = types.map((item) => item.type.name).join(", ");

  const statList = [];
  let obj = {};
  for (let i = 0; i < stats.length; i++) {
    obj = {
      title: stats[i].stat.name,
      value: stats[i].base_stat,
    };
    if ([ "type"].includes(obj.title)) {
      statList.push(obj);
    }
  }

  return (
    <>
      <CardModal
        title={title}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        types={types}
        stats={stats}
        weight={weight}
        img={sprites.front_default}
      />
      <Card
        onClick={() => setIsModalOpen(true)}
        hoverable
        className="card"
        cover={<img alt="example" src={sprites.front_default} />}
      >
        <Meta title={title} style={{ marginBottom: 10 }} />
        <ul className="cardList">
          {statList?.map((item, i) => (
            <li key={i} className="cardItem">
              {item?.title}: {item?.value}
            </li>
          ))}
          <li className="cardItem">type: {type}</li>
        </ul>
      </Card>
    </>
  );
};
export default PokemonCard;
