import PropTypes from "prop-types";

function SCP({ selectedSCP }) {
  if (!selectedSCP) {
    return (
      <div className="scp-card empty">
        <p>Please select an SCP from the menu.</p>
      </div>
    );
  }

  return (
    <div className="scp-card">
      <h2>{selectedSCP.item}</h2>
      <h3 className={`scp-class ${selectedSCP.class?.toLowerCase()}`}>
        {selectedSCP.class}
      </h3>
      <p>
        <strong>Description: </strong>
        {selectedSCP.desc}
      </p>
      <p>
        <strong>Containment: </strong>
        {selectedSCP.containment}
      </p>
    </div>
  );
}

SCP.propTypes = {
  selectedSCP: PropTypes.shape({
    item: PropTypes.string,
    class: PropTypes.string,
    desc: PropTypes.string,
    containment: PropTypes.string,
  }),
};

export default SCP;
