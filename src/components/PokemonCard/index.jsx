import React, { useState } from 'react';
import { Card } from 'antd';
import CardModal from './CardModal';
import heart from '../../assets/heart.png';
import btnPlus from '../../assets/btn-plus2.png';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../redux/slices/favoriteSlice';
import './card.scss';
const { Meta } = Card;

const PokemonCard = ({ props }) => {
  const dispatch = useDispatch();
  const { id, name, stats, weight, sprites, types, favorite } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const title = name?.toUpperCase();
  let type = types.map((item) => item.type.name).join(', ');

  const statList = [];
  let obj = {};
  for (let i = 0; i < stats.length; i++) {
    obj = {
      title: stats[i].stat.name,
      value: stats[i].base_stat,
    };
    if (['type'].includes(obj.title)) {
      statList.push(obj);
    }
  }

  const onClickPlus = () => {
    dispatch(addToFavorite(id));
  };

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
        className='card'
        cover={<img alt='example' src={sprites.front_default} />}
      >
        <img
          src={favorite ? heart : btnPlus}
          className='favoriteIcon checkImg'
          alt=''
          onClick={() => onClickPlus()}
        />

        <Meta
          title={title}
          style={{ marginBottom: 10 }}
          className='cardTitle'
          onClick={() => setIsModalOpen(true)}
        />
        <ul className='cardList'>
          <li className='cardItem'>type: {type}</li>
        </ul>
      </Card>
    </>
  );
};
export default PokemonCard;
