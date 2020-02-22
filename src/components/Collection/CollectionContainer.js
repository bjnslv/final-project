import { connect } from 'react-redux';
import Collection from "./Collection";
import { selectPokemon } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => ({
    selectPokemon: (desc) => dispatch(selectPokemon(desc))
});

const mapStateToProps = ({ pokemons }) => ({
    pokemons: pokemons.filter(item => item.isCatched === true)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

