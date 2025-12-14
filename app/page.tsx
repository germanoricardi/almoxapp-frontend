import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        AlmoxAPP
      </Typography>

      <Typography>
        Sistema moderno de gestão de estoque para organizar, controlar e otimizar operações de almoxarifado.
      </Typography>
    </Container>
  );
}