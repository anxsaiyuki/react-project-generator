import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addList } from '../action/listAction';
import List from '../component/list';

const mapStateToProps = state => (
  {
    list: state.list
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addList
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(List);
