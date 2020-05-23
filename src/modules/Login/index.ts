import { connect } from 'react-redux';
import { loginReducer } from './redux/reducers';
import { withStyles } from '@material-ui/core';
import { pathOr } from 'ramda';
import { LoginView } from './view';
import { styles } from './styles';

const mapStateToProps = (state: any, props: any) => {
  return {
    loading: pathOr(false, ['login', 'loading'], state),
  };
};

const LoginStyled = withStyles(styles)(LoginView);

const Login = connect(mapStateToProps)(LoginStyled);

export { loginReducer, Login };
