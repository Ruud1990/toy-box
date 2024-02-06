import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Paper = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  borderRadius: '5px',
  backgroundColor: '#fff',
  marginBottom: theme.spacing(8),
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  transform: `rotate(${Math.random() * 10 - 5}deg)`,
}));

const About = () => {
  return (
    <><Typography variant="h4" sx={{marginTop: '30px', color: '#6414ab', textAlign: 'center', '@media (max-width:600px)': { fontSize: '1.5rem' } }}>
      O Nas
    </Typography>
    <Grid container spacing={2} sx={{ marginTop: '1rem', justifyContent: 'center' }}>
      <Grid item xs={6}>
        <Paper sx={{ '@media (max-width:600px)': { marginBottom: '5px' }, bgcolor: '#cfacee'}}>
          <Typography variant="body1" sx={{ '@media (max-width:600px)': { fontSize: '0.8rem' } }}>
            Jesteśmy parą rodziców, którzy rozumieją potrzebę różnorodności i jakości w zabawach dla naszych dzieci.
          </Typography>
        </Paper>
        <Paper sx={{ '@media (max-width:600px)': { marginBottom: '5px' }, bgcolor: '#cfacee'}}>
          <Typography variant="body1" sx={{ '@media (max-width:600px)': { fontSize: '0.8rem' } }}>
            Jako rodzice, rozumiemy ciągłą potrzebę adaptacji do zmieniających się potrzeb i zainteresowań dzieci. Dlatego nasza oferta wypożyczania zabawek została stworzona tak, aby dopasować się do dynamicznego rozwoju dzieci w różnym wieku. To nie tylko oszczędność miejsca w domu, ale także sposób na zapewnienie naszym dzieciom stałego dostępu do inspirujących zabawek, wspierających ich rozwój.
          </Typography>
        </Paper>
        <Paper sx={{ '@media (max-width:600px)': { marginBottom: '5px' }, bgcolor: '#cfacee'}}>
          <Typography variant="body1" sx={{ '@media (max-width:600px)': { fontSize: '0.8rem' } }}>
            W Wypakuj Mnie nie tylko oferujemy zabawki - staramy się tworzyć społeczność rodziców, którzy chcą dawać swoim dzieciom najlepsze możliwości rozwoju. Nasza misja to nie tylko zmniejszanie ilości plastiku w domach, ale także promowanie elastyczności, oszczędności finansowej i wspieranie ekologicznego stylu życia.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ '@media (max-width:600px)': { marginBottom: '5px' }, bgcolor: '#cfacee'}}>
          <Typography variant="body1" sx={{ '@media (max-width:600px)': { fontSize: '0.8rem' } }}>
            Przez lata doświadczeń zauważyliśmy, że różnorodność zabaw jest kluczem do wszechstronnego rozwoju naszych dzieci. Z tego powodu postanowiliśmy stworzyć platformę, która nie tylko daje dzieciom dostęp do różnorodnych, edukacyjnych zabawek, ale także wspiera rodziców w codziennych wyzwaniach.
          </Typography>
        </Paper>
        <Paper sx={{ '@media (max-width:600px)': { marginBottom: '5px' }, bgcolor: '#cfacee'}}>
          <Typography variant="body1" sx={{ '@media (max-width:600px)': { fontSize: '0.8rem' } }}>
            Nasze codzienne wyzwania jako opiekunów zainspirowały nas do stworzenia Fun Box - miejsca, które odzwierciedla naszą troskę o rozwój i szczęście naszych najmłodszych.
          </Typography>
        </Paper>
        <Paper sx={{ '@media (max-width:600px)': { marginBottom: '5px' }, bgcolor: '#cfacee'}}>
          <Typography variant="body1" sx={{ '@media (max-width:600px)': { fontSize: '0.8rem' } }}>
             Dołącz do naszej filozofii, gdzie troska o rozwój dzieci idzie w parze z ułatwieniem codziennego życia rodziców. Razem budujemy lepszą przyszłość poprzez radość, kreatywność i edukację - przy jednoczesnym oszczędzaniu czasu i środowiska.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
      </>
  );
};

export default About;




  // <Paragraph>
  //         Jesteśmy grupą rodziców, którzy rozumieli potrzebę różnorodności i jakości w zabawach dla naszych dzieci.
  //       </Paragraph>
  //       <Paragraph>
  //         Nasze codzienne wyzwania jako opiekunów zainspirowały nas do stworzenia Pasji Zabawy - miejsca, które odzwierciedla naszą troskę o rozwój i szczęście naszych najmłodszych.
  //       </Paragraph>
  //       <Paragraph>
  //         Przez lata doświadczeń zauważyliśmy, że różnorodność zabaw jest kluczem do wszechstronnego rozwoju naszych dzieci. Z tego powodu postanowiliśmy stworzyć platformę, która nie tylko daje dzieciom dostęp do różnorodnych, edukacyjnych zabawek, ale także wspiera rodziców w codziennych wyzwaniach.
  //       </Paragraph>
  //       <Paragraph>
  //         Jako rodzice, rozumiemy ciągłą potrzebę adaptacji do zmieniających się potrzeb i zainteresowań dzieci. Dlatego nasza oferta wypożyczania zabawek została stworzona tak, aby dopasować się do dynamicznego rozwoju dzieci w różnych wiekach. To nie tylko oszczędność miejsca w domu, ale także sposób na zapewnienie naszym dzieciom stałego dostępu do inspirujących zabawek, wspierających ich rozwój.
  //       </Paragraph>
  //       <Paragraph>
  //          W Pasji Zabawy nie tylko oferujemy zabawki - staramy się tworzyć społeczność rodziców, którzy chcą dawać swoim dzieciom najlepsze możliwości rozwoju. Nasza misja to nie tylko zmniejszanie ilości plastiku w domach, ale także promowanie elastyczności, oszczędności finansowej i wspieranie ekologicznego stylu życia.
  //       </Paragraph>
  //       <Paragraph>
  //          Dołącz do naszej Pasji Zabawy, gdzie troska o rozwój dzieci idzie w parze z ułatwieniem codziennego życia rodziców. Razem budujemy lepszą przyszłość poprzez radość, kreatywność i edukację - przy jednoczesnym oszczędzaniu czasu i środowiska.
  //       </Paragraph>