import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { Typography as TypographyCore, Container } from '@material-ui/core';

const drawerWidth = 240;

const DrawerTeste = () => <Container>
          <Typography 
          variant="h4"
          style={{ 
            marginTop: '20px',
            }}>
            Bem-vindo ao Meu Aplicativo
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            Este é um layout básico usando React e Material-UI.
          </Typography>
        </Container>

const TextTeste = () => <>
<Typography paragraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
  enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
  imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
  Convallis convallis tellus id interdum velit laoreet id donec ultrices.
  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
  adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
  nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
  leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
  feugiat vivamus at augue. At augue eget arcu dictum varius duis at
  consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
  sapien faucibus et molestie ac.
</Typography>
<Typography paragraph>
  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
  eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
  neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
  tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
  sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
  tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
  gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
  et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
  tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
  eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
  posuere sollicitudin aliquam ultrices sagittis orci a.
</Typography>
</>

//################# Objeto para ToogleTheme -->
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const DrawerEscopoLocal = (props) => (
    <ColorModeContext.Provider value={props.valueColorMode}>
    <ThemeProvider theme={props.theme}>
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText 
              sx={{
                ...(props.mode === 'light' && {
                  color: grey[900],
                    })
              }}
              primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                sx={{
                ...(props.mode === 'light' && {
                  color: grey[900],
                    })
              }}
              primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

//########################## Dark Theme Inicialização (Ddark - i) ##########################################################################

  const darkTheme = createTheme({
  palette: {
    mode: 'dark',
      },
    });

//########################## (Ddark - f)  #################################################################################################

//########################## Toogle Theme Inicialização (Dtoogle - i) ##########################################################################

  //Tipo de tema em vigor
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        //Alternará os temas
        //O tema será o oposto do tema em vigor ( se light -> dark ... )
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const themeToogle = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          text: {

            ...(mode === 'light' && {
                  primary: grey[900],
                  secondary: grey[800],
                  default: grey[800]
                })

                },
        },
      }),
    [mode],
  );

//########################## (Dtoogle - f)  #################################################################################################

  //const colorMode = React.useContext(ColorModeContext);

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={themeToogle}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
           >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            Responsive drawer
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {themeToogle.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
         <Box
           component="nav"
           sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
           aria-label="mailbox folders"
         >
           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
           <Drawer
             container={container}
             variant="temporary"
             open={mobileOpen}
             onTransitionEnd={handleDrawerTransitionEnd}
             onClose={handleDrawerClose}
             ModalProps={{
               keepMounted: true, // Better open performance on mobile.
             }}
             sx={{
               display: { xs: 'block', sm: 'none' },
               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
             }}
           >
             <DrawerEscopoLocal theme={themeToogle} valueColorMode={colorMode} mode={mode}/>
           </Drawer>
           <Drawer
             variant="permanent"
             sx={{
               display: { xs: 'none', sm: 'block' },
               '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
             }}
             open
           >
             <DrawerEscopoLocal theme={themeToogle} valueColorMode={colorMode} mode={mode}/>
           </Drawer>
         </Box>
         <Box
           component="main"
           sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
         >
           <Toolbar />
           <DrawerTeste/>
         </Box>
       </Box>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
