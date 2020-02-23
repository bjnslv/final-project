import { connect } from 'react-redux';
import Pokemon from "./Pokemon";
import { catchPokemon } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => ({
    catchPokemon: (id) => dispatch(catchPokemon(id))
});

const mapStateToProps = ({ selected, pokemons }) => ({
    selected,
    pokemons
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon);