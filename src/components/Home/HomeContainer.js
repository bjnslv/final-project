import { connect } from 'react-redux';
import Home from "./Home";

const mapStateToProps = ({ pokemons }) => ({
  pokemons
});

export default connect(
  mapStateToProps
)(Home);