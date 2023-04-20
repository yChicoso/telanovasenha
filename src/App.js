import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./App.css";


export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
       

      <header className="App-Prot">
        <h1>Protótipo de Redefinição</h1>
      </header>


      <form>
        <h2>Redefinir senha</h2>
      </form>

      <header className="App-Tela">
        <h3>Página Inicial </h3> 
      </header>

      <header className="App-Tela1">
        <h3>Login</h3>
      </header>

      <header className="App-Tela2">
        <h3>Redefinir Senha</h3>
      </header>



        <body className="App-senha">
        <FormControl sx={{ m: 1, width: '37ch' , right:250}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha Atual</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '37ch' , right:250 , top:20}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Nova Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '37ch' , right:250, top:38}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirme a Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </body>

        <form>
        <h4>
          Sua senha deve conter no mínimo 8 caracteres, 1 letra maiúscula e 1
          caractere especial.
        </h4>
      </form>

      <body className="App-Conf">
        <input type="submit" nome="acao" value="Confirmar" />
      </body>

      <form>
        <h5>Voltar para tela de login ou criar uma conta</h5>
      </form>




      </div>
    </Box>
    
  );
    
     
}
