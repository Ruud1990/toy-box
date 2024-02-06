import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

const Questions = () => {
  return (
    <Box sx={{
      marginTop: '50px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      '@media (min-width:600px)': {
        padding: '40px',
      },
    }}>
          <Typography variant="h4" sx={{ color: '#333', marginBottom: '20px', '@media (max-width:600px)': { fontSize: '1.5rem' } }}>Najczęstsze pytania i odpowiedzi</Typography>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Czego mogę się spodziewać w zestawie?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Każdy zestaw zawiera 7-8 zabawek różnego rodzaju, adekwatnyvh do wybranego zakresu wieku dziecka. Zabawki są nowe lub używane, ale wszystkie w bardzo dobrym stanie.

            Przy tworzeniu zestawów sięgamy po zabawki takich marek jak: JANOD, LEGO, DJECO, b.Toys, Skip Hop, Fat Brain Toys, Lilliputiens, Little Dutch, Melissa&Doug, Green Toys, Playmobil, Goki, Marionex, Dumel, Fisher Price czy VIGA.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Czy mogę kupić boxy dla rodzeństwa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Oczywiście, wystarczy w koszyku dodać dwa lub więcej boxów z danego przedziału wiekowego. Za wysyłkę płacisz tylko raz :)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Jak wygląda wypożyczenie boxa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Składasz zamówienie poprzez koszyk zakupowy, podajesz swoje dane kontaktowe oraz dokonujesz płatności online, która jest realizowana poprzez Stripe.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ile kosztuje przesyłka?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Przesyłka kosztuje 15zł
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Jak wygląda odesłanie zestawu i kto za to płaci?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Przesyłkę powrotną zapewniamy my, na kilka dni przed upływem 30 dni prześlemy etykietę lub kod nadania dla powrotnej przesyłki.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Jakie jest czas realizacji zamówienia?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Maksymalny czas realizacji zamówienia to 5 dni roboczych, ale staramy się wysyłac w ciągu 2-3 dni.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Co z higieną zabawek?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wszystkie zabawki, które do nas wracają dezynfekujemy środkiem LAVECO, który jest naturalny, wytworzony z surowców odnawialnych (glukoza pochodzenia roślinnego i alkohole tłuszczowe), nie zawiera triklosanu, środka przeciwbakteryjnego i przeciwgrzybiczego uważanego za zaburzający gospodarkę hormonalną i szkodliwy dla środowiska wodnego oraz  etoksylowanych środków powierzchniowo czynnych zanieczyszczonych rakotwórczymi chemikaliami takimi jak SLES / SLS.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Czy zestawy zabawek są różne dla chłopców i dziewczynek?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nie, u nas każdy zestaw jest uniwersalny, zapewniając radość zarówno chłopcom, jak i dziewczynkom.<br></br>

W tradycyjnym podejściu często przypisuje się chłopcom zabawki konstrukcyjne, rozwijające umiejętności przestrzenne, a dziewczynkom te związane z pracami domowymi czy wyglądem fizycznym. Nie zgadzamy się z takim podejściem. Badania psychologów dziecięcych wykazują, że rodzaj zabawki, z którą dziecko się bawi, może wpływać na rozwijanie konkretnych umiejętności i zainteresowań, co potencjalnie wpływa na jego przyszłe wybory. Dlatego nasze zestawy są uniwersalne, zapewniając każdemu dziecku możliwość odkrywania świata bez względu na stereotypy płciowe. Wierzymy w równość szans i rozwijanie zainteresowań zgodnie z indywidualnymi predyspozycjami każdego dziecka.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Co w sytuacji, kiedy mojemu dziecku bardzo spodoba się jedna z zabawek/gier z zestawu i będzie chciało ją zatrzymać?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Zdarza się, że dzieci przywiązują się mocno do niektórych przedmiotów - jeśli Twój maluch bardzo polubi którąś z zabawek - nie ma problemu - możesz ją od nas odkupić, skontaktuj się przez email.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginBottom: '20px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Czy jest ryzyko, że w kolejnym zamówionym przeze mnie zestawie, powtórzą się zabawki, które już miałam?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Nie, prowadzimy archiwizację zamówień, tak aby uniknąć sytuacji powtarzania zabawki - oczywiście jeśli masz ochotę, aby zabawka się powtórzyła, ponieważ poprzednio bardzo Ci się spodobała - napisz do nas, jeśli będzie dostępna, dorzucimy ją do boxa.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Questions