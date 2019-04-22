import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addList } from '../action/listAction';
import Index from '../index';

const mapStateToProps = state => (
  {
    list: state.list.items
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addList
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Index);
