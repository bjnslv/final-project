import { connect } from 'react-redux';
import Pokemon from "./Pokemon";

const mapStateToProps = ({ selected }) => ({
    selected
});

export default connect(
  mapStateToProps
)(Pokemon);