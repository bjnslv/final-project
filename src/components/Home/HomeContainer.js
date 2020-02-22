import { connect } from 'react-redux';
import Home from "./Home";
import { catchPokemon, getPokemons, selectPokemon } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => ({
    catchPokemon: (id) => dispatch(catchPokemon(id)),
    loadMore: (count) => dispatch(getPokemons(count)),
    selectPokemon: (desc) => dispatch(selectPokemon(desc))
});

const mapStateToProps = ({ pokemons, count }) => ({
    pokemons,
    count
});

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Home);