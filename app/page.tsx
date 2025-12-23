'use client';

import { Button, Card, Grid, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from './src/services/api';

export default function Home() {

  const FormContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    minHeight: '350px',
    [theme.breakpoints.up('sm')]: { maxWidth: '450px' },
  }));

  const SignInContainer = styled(Stack)(({ theme }) => ({
    minHeight: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.up('sm')]: { padding: theme.spacing(4) }
  }));

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail é obrigatório')
      .email('E-mail deve ser um endereço de e-mail válido'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await api.post('api/v1/auth/login', data)
        .then(res => console.log({res}));
        
      // router.push(returnTo || PATH_AFTER_LOGIN);
      console.log('Login data', {data, API_URL: process.env.API_URL});
    } catch (error) {
      console.error({error});
    }
  });

  return (
    <SignInContainer>
      <FormContainer>

        <form onSubmit={onSubmit}>
          <Grid container gap={2}>
            <Grid size={{ xs: 12 }} textAlign={'center'}>
              <Image src="/images/almoxapp.svg" alt="AlmoxApp" width={128} height={64} style={{ margin: '0 auto' }} />
            </Grid>
            
            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name='email'
                render={(({ field, fieldState }) => 
                  <TextField
                    fullWidth
                    label="E-mail"
                    type="email"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    {...field} />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                control={control}
                name='password'
                render={(({ field, fieldState }) => 
                  <TextField
                    fullWidth
                    label="Senha"
                    type="password"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    {...field} />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }} textAlign={'end'}>
              <Button variant='contained' type='submit' color='success'>Acessar</Button>
            </Grid>
            
            <Grid size={{ xs: 12 }}>
              <Typography variant='body2' textAlign={'center'}>
                Todos os direitos reservados
              </Typography>
            </Grid>
          </Grid>
        </form>


      </FormContainer>
    </SignInContainer>
  );
}