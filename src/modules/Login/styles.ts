export const styles = {
  loginRoot: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  loginImage: {
    width: '60%',
    height: '100%',
    display: 'block',
    backgroundImage:
      'url("https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  loginWrapper: {
    width: '40%',
    minWidth: 400,
    padding: 40,
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
  },
  paper: {
    marginTop: 9,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: '20px 0',
  },
  loginImageWrapper: {
    display: 'block',
    margin: '0 auto',
    width: 200,
    height: 200,
  },
  barcodeImg: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
};
