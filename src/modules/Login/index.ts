import { connect } from 'react-redux';
import { LoginView } from './view';
import { loginReducer } from './redux/reducers';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';

const mapStateToProps = (state: any) => {
  return {};
};

const LoginStyled = withStyles(styles)(LoginView);

const Login = connect(mapStateToProps)(LoginStyled);

export { loginReducer, Login };
