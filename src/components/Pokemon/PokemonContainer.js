import { connect } from 'react-redux';
import Pokemon from "./Pokemon";
import { catchPokemon } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => ({
    catchPokemon: (id) => dispatch(catchPokemon(id))
});

const mapStateToProps = ({ selected }) => ({
    selected
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);