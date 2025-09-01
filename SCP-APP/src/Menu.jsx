import PropTypes from "prop-types";

function Menu({ scps, onSelect }) {
  return (
    <nav className="menu-container">
      <ul className="menu-list">
        {scps.map((scp, index) => (
          <li
            key={index}
            className="menu-item"
            onClick={() => onSelect(scp)}
          >
            {scp.item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  scps: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Menu;
