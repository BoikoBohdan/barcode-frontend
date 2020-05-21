import { LoginFormView } from './view';
import { withStyles } from '@material-ui/core';
import { loginActions } from '../../redux/actions';
import { connect } from 'react-redux';
import { styles } from '../../styles';

const mapDispatchToProps = {
  login: loginActions.login.trigger,
};

const LoginStyled = withStyles(styles)(LoginFormView);

const LoginFrom = connect(null, mapDispatchToProps)(LoginStyled);

export { LoginFrom };
