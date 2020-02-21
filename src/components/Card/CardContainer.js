import { connect } from 'react-redux';
import Card from "./Card";
import { catchPokemon } from "../../redux/actions"

const mapDispatchToProps = (dispatch) => ({
    catchPokemon: (id) => dispatch(catchPokemon(id))
});

export default connect(
  mapDispatchToProps
)(Card);
