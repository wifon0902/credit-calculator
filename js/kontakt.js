function wyslijMaila()
        {
            let imie = document.getElementById("imie").value;
            let nazwisko = document.getElementById("nazwisko").value;
            let temat = document.getElementById("temat").value;
            let problem = document.getElementById("problem").value;

            if(imie != "" && nazwisko != "" &&  temat != "" && problem != "")
            {
                let wiadomosc = "Imię: " + imie + "%0D%0A" + "Nazwisko: " + nazwisko + "%0D%0A" + "Temat: " + temat + "%0D%0A" + "Wiadomość: " + problem;

                window.open("mailto:igorka05@wp.pl?subject=Kontakt&body=" + wiadomosc);
            }
        }