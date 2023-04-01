import { Col, Row, Modal } from 'antd';
import './card.scss';

const CardModal = (props) => {
  const { isModalOpen, setIsModalOpen, weight, types, stats, title, img } =
    props;

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let type = types.map((item) => item.type.name).join(', ');

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        className='cardModal'
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <Row>
          <Col xs={24} md={12}>
            <ul className='cardList'>
              {stats?.map((item, index) => (
                <li key={index} className='cardItem'>
                  {item?.stat.name}: {item?.base_stat}
                </li>
              ))}
              <li className='cardItem'>type: {type}</li>
              <li className='cardItem'>weight: {weight}</li>
            </ul>
          </Col>
          <Col xs={24} md={12}>
            <img style={{ width: '100%' }} src={img} alt='pokemon' />
          </Col>
        </Row>
      </Modal>
    </>
  );
};
export default CardModal;
