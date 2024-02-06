import { Box, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';

const List = styled('ol')(({ theme }) => ({
  [theme.breakpoints.down(425)]: {
    '& li': {
      fontSize: '0.8rem',
    },
     paddingLeft: '1px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down(425)]: {
    fontSize: '1.4rem',
  },
}));

const Privacy = () => {
  return (
    <Box>
      <Title variant='h4' textAlign='center' marginTop='20px'>Polityka prywatności</Title>
      <List>

      <ol>
        <li>Administratorem danych osobowych przekazanych przez Kupującego podczas korzystania z Wypożyczalni jest Wypakuj mnie Marta Blicharska 59-220, Legnica, ul. Chrobrego 6/3.</li>
        <li>Celem przetwarzania danych Klienta przez Wypożyczalnię, podanych przez Klienta w związku z zakupami w Wypożyczalni, jest realizacja zamówień. Podstawą przetwarzania danych osobowych w tym przypadku jest:
        <ul>
          <li>umowa wypożyczenia lub działania podejmowane na żądanie Kupującego, zmierzające do jej zawarcia (art. 6 ust. 1 lit. b RODO),</li>
          <li>ciążący na Wypożyczalni obowiązek prawny związany z rachunkowością (art. 6 ust. 1 lit. c) oraz</li>
          <li>prawnie uzasadniony interes Wypożyczalni, polegający na przetwarzaniu danych w celu ustalenia, dochodzenia lub obrony ewentualnych roszczeń (art. 6 ust. 1 lit. f RODO).</li>
        </ul></li>
        <li>Podanie danych przez Klienta jest dobrowolne, ale jednocześnie konieczne do zawarcia umowy sprzedaży. Niepodanie danych uniemożliwi zawarcie umowy sprzedaży w Sklepie.</li>
        <li>Dane Klienta podane w związku z zakupami w Wypożyczalni będą przetwarzane do momentu, w którym:
        <ul>
          <li>przestanie obowiązywać umowa wypożyczenia zawarta między Klientem a Wypożyczalnią;</li>
          <li>na Wypożyczalni przestanie ciążyć obowiązek prawny, zobowiązujący go do przetwarzania danych Klienta;</li>
          <li>ustanie możliwość dochodzenia roszczeń przez Klienta lub Wypożyczalnię, związanych z umową wypożyczenia zawartą przez Wypożyczalnię;</li>
          <li>zostanie przyjęty sprzeciw Klienta wobec przetwarzania jego danych osobowych – w przypadku gdy podstawą przetwarzania danych był uzasadniony interes Wypożyczalni – w zależności od tego, co ma zastosowanie w danym przypadku i co nastąpi najpóźniej.</li>
        </ul></li>
        <li>Klientowi przysługuje prawo żądania:
        <ol>
          <li>dostępu do swoich danych osobowych,</li>
          <li>ich sprostowania,</li>
          <li>usunięcia,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>przeniesienia danych do innego administratora a także prawo:
            <ol>
               <li>wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania danych z przyczyn związanych ze szczególną sytuacją Klienta – wobec przetwarzania dotyczących go danych osobowych, opartego na art. 6 ust. 1 lit. f RODO (tj. na prawnie uzasadnionych interesach realizowanych przez administratora).</li>
            </ol></li>
            <li>W celu realizacji swoich praw, Klient powinien skontaktować się ze Wypożyczalnią przy wykorzystaniu danych z § 1 Regulaminu.</li>
            <li>W przypadku gdy Klient uzna, że jego dane są przetwarzane niezgodnie z prawem, Klient może złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.</li>
        </ol></li>
      </ol>
      </List>
    </Box>
  )
}

export default Privacy