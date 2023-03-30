import React, { useState } from "react";
import { Card, Popover } from "antd";
import "./card.scss";
import CardModal from "./CardModal";
const { Meta } = Card;

const PokemonCard = (props) => {
  const { id, name, stats, weight, sprites, types } = props;

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const title = name.toUpperCase();
  let type = types.map((item) => item.type.name).join(", ");
  const statList = [];
  let obj = {};
  for (let i = 0; i < stats.length; i++) {
    obj = {
      title: stats[i].stat.name,
      value: stats[i].base_stat,
    };
    if (!["hp", "special-attack", "special-defense"].includes(obj.title))
      statList.push(obj);
  }

  console.log("statLIST", statList);

  return (
    <>
      {/* <CardModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      /> */}
      <Popover
        content={
          <ul>
            <li>
              askdf ;laksdjf ;alsdkjf ;alskdjf;al skd;jflakjs;dlfkja;s
              ldkfj;alsdkfja; lskdfj;alksdjf;alskdjf;l
            </li>
          </ul>
        }
        title="Title"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Card
          hoverable
          className="card"
          cover={<img alt="example" src={sprites.front_default} />}
        >
          <Meta title={title} style={{ marginBottom: 10 }} />
          <ul className="cardList">
            {statList?.map((item) => (
              <li className="cardItem">
                {item?.title}: {item?.value}
              </li>
            ))}
            <li className="cardItem">type: {type}</li>
            <li>weight: {weight}</li>
          </ul>
        </Card>
      </Popover>
    </>
  );
};
export default PokemonCard;
