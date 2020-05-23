import { SignUpFormView } from './view';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { styles } from './styles';
import { signUpActions } from '../../../redux/actions';

const mapDispatchToProps = {
  signUp: signUpActions.signUp.trigger,
};

const SignUpStyled = withStyles(styles)(SignUpFormView);

const SignUpForm = connect(null, mapDispatchToProps)(SignUpStyled);

export { SignUpForm };
