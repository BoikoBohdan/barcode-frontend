import { connect } from 'react-redux';
import { loginReducer } from './redux/reducers';
import { withStyles } from '@material-ui/core';
import { pathOr } from 'ramda';
import { LoginView } from './view';
import { styles } from './styles';
import { loginActions } from './redux/actions';

const mapStateToProps = (state: any, props: any) => {
  return {
    loading: pathOr(false, ['login', 'loading'], state),
  };
};

const mapDispatchToProps = {
  login: loginActions.login.trigger,
};

const LoginStyled = withStyles(styles)(LoginView);

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginStyled);

export { loginReducer, Login };
