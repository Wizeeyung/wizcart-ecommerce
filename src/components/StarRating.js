import { MdOutlineStar } from 'react-icons/md';

const RatingStars = ({ product }) => {
  const stars = product.rating === 4
    ? <>
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </>
    : product.rating === 3
    ? <>
        <MdOutlineStar />
        <MdOutlineStar />
        <MdOutlineStar />
      </>
    : product.rating === 2
    ? <>
        <MdOutlineStar />
        <MdOutlineStar />
      </>
    : product.rating === 1
    ? <MdOutlineStar />
    : null;

  return (
    <div>
      {stars}
    </div>
  );
};

export default RatingStars