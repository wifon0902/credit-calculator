    function oblicz()
        {
            var miesiace = parseFloat(document.getElementById("miesiac").value);
            var kwotaKredytu = parseFloat(document.getElementById("kwota").value);
            var nadplata = parseFloat(document.getElementById("nadplata").value);
            var oprocentowanie = parseFloat(document.getElementById("oprocentowanie").value) / 100;
            var prowizja = parseFloat(document.getElementById("prowizja").value) / 100;

            if(document.getElementById("waluta").value == "PLN")
            {
                var waluta = 1;
                var nazwa = document.getElementById("waluta").value;
            }

            else if(document.getElementById("waluta").value == "EUR")
            {
                var waluta = 4.68;
                var nazwa = document.getElementById("waluta").value;
            }

            else if(document.getElementById("waluta").value == "USD")
            {
                var waluta = 4.43;
                var nazwa = document.getElementById("waluta").value;
            }

            else if(document.getElementById("waluta").value == "GBP")
            {
                var waluta = 5.3;
                var nazwa = document.getElementById("waluta").value;
            }

            else if(document.getElementById("waluta").value == "CHF")
            {
                var waluta = 4.73;
                var nazwa = document.getElementById("waluta").value;
            }


            if(document.getElementById("ubezpieczenie").checked)
            {
                var ubezpieczenie = kwotaKredytu * 0.025;
            }
            else
            {
                var ubezpieczenie = 0;
            }

            if(miesiace>360 || miesiace<12)
            {
                document.getElementById("error").innerHTML = "Podaj poprawną ilość miesięcy!";
            }

            else if(kwotaKredytu>300000 || kwotaKredytu<10000)
            {
                document.getElementById("error").innerHTML = "Podaj poprawną kwotę!";
            }

            else if(oprocentowanie>0.1 || oprocentowanie<0.01)
            {
                document.getElementById("error").innerHTML = "Podaj poprawne oprocentowanie!";
            }

            else if(prowizja>0.3 || prowizja<0)
            {
                document.getElementById("error").innerHTML = "Podaj poprawną prowizje!";
            }

            else
            {
                var q = parseFloat(1 + (oprocentowanie / miesiace));
                kwotaKredytu = kwotaKredytu - nadplata;
                var kosztSplaty = parseFloat(kwotaKredytu + (kwotaKredytu*prowizja) + ubezpieczenie);
                var rata = (kosztSplaty * Math.pow(q, miesiace) * (q-1)/((Math.pow(q, miesiace))-1)) / waluta;
                var kosztKredytu = (rata*miesiace)-(kwotaKredytu/waluta);
                var calkowitaSplata = (rata*miesiace);


                document.getElementById("rata").value = rata.toFixed(2) + " " + nazwa;
                document.getElementById("koszt").value = kosztKredytu.toFixed(2) + " " + nazwa;
                document.getElementById("calkowita").value = calkowitaSplata.toFixed(2) + " " + nazwa;
                document.getElementById("error").innerHTML = "";
            }

            
            
        }