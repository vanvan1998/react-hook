import React from 'react';
import PropTypes from 'prop-types';

function Items(props) {
  const { items = [] } = props;

  if (items.length === 1) {
    return <span>{items[0]}</span>;
  }

  if (items.length > 1) {
    return (
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  return <span>No items in list</span>;
}

Items.propTypes = {
  items: PropTypes.array,
};

Items.defaultProps = {
  items: []
};

export default Items;