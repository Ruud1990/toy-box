import React from 'react';
import { Box, Typography, Link } from '@mui/material';
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

const Rules = () => {
  return (
        <Box>
      <Title variant='h4' textAlign='center' marginTop='20px'>Regulamin wypożyczalni</Title>
      <Title variant='h5' textAlign='center' marginTop='20px'>Regulamin wysyłkowej wypożyczalni spersonalizowanych boxów zabawkowych „Fun Box”</Title>
     <List>

      <ol>
      <li>Niniejszy regulamin (dalej "Regulamin" określa zasady i warunki korzystania ze wypożyczalni internetowej "Fun Box" działającej pod adresem www.xyx.pl.)</li>
      <li>BOXy zabawkowe będące przedmiotem wypożyczenia są własnością:<br></br>
Fun Box Marta Blicharska<br></br>
ul. Chrobrego 6/3<br></br>
59-220 Legnica<br></br>
działającej w ramach nierejestrowanej działalności gospodarczej.
</li>
<li>Dane kontaktowe wypożyczalni są następujące:<br></br>
adres do kontaktu: Chrobrego 6/3, 59-220 Legnica<br></br>
adres e-mail: @@@<br></br>
nr telefonu: 49875r</li>
      <li>Usługa Wypożyczalni skierowana jest do mieszkańców Polski. BOXy nie są wysyłane za granicę.</li>
      <li>Wypożyczający zobowiązuje się do przestrzegania warunków Regulaminu. Regulamin obowiązuje od dnia 25.01.2024r.</li>
      <li>Klient wypożycza BOX poprzez stronę internetową www.fgfgf.ooo wypełniając formularz zamówienia oraz dokonując płatności online.</li>
      <li>Płatności za wypożyczenie obsługiwane są przez międzynarodową platformę płatniczą Stripe, z której regulaminem można się zapoznać w podanych linkach:<br></br>
      - <Link href="https://stripe.com/en-pl/legal/link-account-terms">warunki konta</Link><br></br>
      - <Link href="https://stripe.com/en-pl/privacy">polityka prywatności</Link></li>
      <li>Wypożyczalnia wysyła BOX w ciągu 5 dni roboczych po złożeniu zamówienia. Wyjątek stanowią sytuacje, kiedy wypożyczalnia informuje na stronie głównej, że jest inaczej.</li>
      <li>Przesyłkę BOXa w obie strony – do klienta oraz spowrotem do Wypożyczalni opłaca Wypożyczalnia. Etykieta zwrotna lub kod nadania wysyłana jest na adres email Klienta do 3 dni przed upływem terminu wypożyczenia.</li>
      <li>Klient wysyła przesyłkę zwrotną po upływie czasu wypożyczenia, do maksymalnie 3 dni roboczych</li>
      <li>Klient ma możliwość wymiany zestawu bez podawania przyczyny. Klient ponosi w tym przypadku koszt odesłania otrzymanego zestawu do wypożyczalni oraz wysyłki nowego zestawu. Koszty wysyłki oraz sposób wymiany zestawu można skonsultować z Wypożyczalnią pod adresem mailowym lucy@acoto.ooo.</li>
      <li>Klient zwraca wypożyczony BOX wyznaczoną przez Wypożyczalnię poprzez usługą kurierską lub poprzez Paczkomaty na wskazany na etykiecie adres. Wypożyczalnia przygotowuje etykietę zwrotną. W przypadku, gdy klient nie zwróci BOXa, a termin ważności etykiety upłynie, klient ponosi koszt każdej kolejnej etykiety wysyłkowej wygenerowanej przez Wypożyczalnię aż do momentu odebrania BOXa przez Wypożyczalnię.</li>
      <li>Klient zobowiązuje się do zwrócenia BOX-a wyczyszczonego, w pełni kompletnego, w stanie technicznym jak przy odbiorze i bez żadnych uszkodzeń, zgodnie z ustalonym wcześniej terminem.</li>
      <li>Klient zobowiązuje się do odpowiedzialnej opieki nad wypożyczonym BOX-em, korzystania z niego zgodnie z jego przeznaczeniem, utrzymania go w należytym stanie oraz skutecznego zabezpieczenia przed potencjalną utratą.</li>
      <li>Wypożyczalnia nie ponosi odpowiedzialności za ewentualne szkody materialne lub fizyczne wynikające z korzystania z wypożyczonego BOX-a i jego zawartości. Wszystkie zabawki są przeznaczone do użytku wyłącznie pod bezpośrednim nadzorem osoby dorosłej.</li>
      <li>Użyczenie zabawek znajdujących się w BOXie osobie trzeciej odbywa się na odpowiedzialność Klienta.</li>
      <li>Klient nie ponosi odpowiedzialności za zużycie zabawek znajdujących się w BOXie wynikające z normalnego używania zgodnie z ich przeznaczeniem np. drobne rysy, odbicia palców.</li>
      <li>Klient ponosi pełną odpowiedzialność za trwałe i znaczne zniszczenie, utratę integralności lub zaginięcie zabawek znajdujących się w BOX-ie, a także za utratę pojedynczych elementów. Zniszczenia trwałe i znaczne obejmują wszelkie złamania lub uszkodzenia, które uniemożliwiają normalne użytkowanie zabawek zgodnie z ich pierwotnym przeznaczeniem. W przypadku zwrócenia uszkodzonego lub niekompletnego towaru, Klient ponosi koszty zakupu identycznej zabawki.</li>
      <li>Okresem rozliczeniowym za wypożyczenie BOXa jest dzień dostarczenia paczki do miejsca odbioru oraz dzień, w którym zostanie nadana paczka zwrotna.</li>
      <li>W przypadku, kiedy Klient nie zwróci BOXa w umówionym terminie lub nie poinformuje o decyzji przedłużenia lub nie uzyska akceptacji Wypożyczalni, sprawa zostaje zgłoszona jako przywłaszczenie do właściwych organów ścigania, a Wypożyczalnia nalicza opłatę w wysokości 3-krotnej ceny ustalonej w cenniku, aż do momentu zwrotu BOXa.</li>
      <li>W przypadku zwłoki w dokonaniu zwrotu Zestawu - na koniec okresu rozliczeniowego, o którym mowa w powyższych punktach Użytkownikowi zostanie naliczona kara umowna w wysokości 25 zł za każdy dzień zwłoki, licząc od ostatniego dnia miesiąca wypożyczenia.</li>
      <li>Wypożyczalnia ma prawo do przetwarzania danych osobowych w celu realizacji Umowy Wypożyczenia zabawek. Administratorem danych osobowych Klientów jest Fun Box Marta Blicharska 59-220, Legnica,  ul. Chrobrego 6/3. Klient ma prawo dostępu do treści swoich danych oraz prawo do ich poprawiania. Administrator dba o to, by dane były zbierane tylko w zakresie niezbędnym do wskazanego celu i przetwarzane tylko przez okres, w jakim jest to niezbędne.</li>
      <li>Inne, nieujęte w "Regulaminie" kwestie reguluje Kodeks Cywilny.</li>
      </ol>
     </List>
    </Box>
  )
}

export default Rules