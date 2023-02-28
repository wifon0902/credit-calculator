function pokaz_kredyt()
        {
            var div = document.getElementById("definicje");
            div.style.opacity = "1";
            div.style.transition = "0.4s";

            document.getElementById("tekst").innerHTML = `
            <b>Czym jest kredyt?</b><br><br>
            Definicja określona jest w ustawie Prawo Bankowe. Zgodnie z nią kredytem jest zawarcie umowy kredytowej, w ramach której bank zobowiązuje się przekazać kredytobiorcy środki. 
            W umowie określony jest czas, na jaki udzielana jest pożyczka oraz cel, na który powinno się ją przeznaczyć. 
            Kredytobiorca może korzystać ze środków, o ile trzyma się warunków umowy. 
            Kredyt bankowy definicja wiąże jeszcze z koniecznością spłaty pożyczonych pieniędzy wraz z odsetkami oraz prowizją. <br><br>

            Podpisując umowę z bankiem, zobowiązujemy się do przestrzegania jej warunków, a także do zwrotu pożyczonych środków wraz z naliczonymi odsetkami w terminach zawartych w harmonogramie spłaty. 
            Jesteśmy również zobowiązani do zapłaty prowizji od udzielonego kredytu - o ile bank taką stosuje. 
            Podsumowując, kredyt jest zobowiązaniem o charakterze pieniężnym, zwrotnym, odpłatnym i celowym.
            
            `;
        }

        function pokaz_prowizje()
        {
            var div = document.getElementById("definicje");
            div.style.opacity = "1";
            div.style.transition = "0.4s";

            document.getElementById("tekst").innerHTML = `
            <b>Co to jest prowizja kredytu?</b><br><br>
            Jedną z podstawowych opłat związanych z zaciągnięciem każdego rodzaju kredytu jest prowizja. 
            Jest to swego rodzaju wynagrodzenie pobierane przez kredytodawcę z tytułu dokonania określonych czynności na rzecz klienta. 
            Prowizja za udzielenie kredytu naliczana jest jednorazowo, a jej wysokość zależy od wysokości kwoty kredytu. 
            Prowizja stanowi procent od kwoty przyznanego kredytu, zatem im wyższy kredyt, tym większa prowizja.<br><br>

            Prowizja od kredytu może stanowić jedną oddzielną opłatę, pobieraną przy zawieraniu kredytu lub wliczona w jego całkowity koszt i spłacana wraz z comiesięczną ratą. 
            Płacenie prowizji w ratach jest dobrym rozwiązaniem, gdy jednorazowa spłata jest zbyt dużym obciążeniem dla domowego budżetu, jednak należy pamiętać, że wiąże się to z jej kredytowaniem, co skutkuje podniesieniem całkowitego kosztu kredytu.
            `;
        }

        function pokaz_oprocentowanie()
        {
            var div = document.getElementById("definicje");
            div.style.opacity = "1";
            div.style.transition = "0.4s";

            document.getElementById("tekst").innerHTML = `
            <b>Co to jest oprocentowanie kredytu?</b><br><br>
            Oprocentowanie kredytu to jeden głównych i najcześciej podawanych parametrów danej oferty kredytowej. 
            Jest ono procentowym wyznacznikiem kosztu, jaki poniesiemy w związku z udzieleniem nam pożyczki i jaki zostanie nam doliczony w odpowiednich proporcjach do wszystkich rat kredytu.<br><br>
            Od wysokości oprocentowania zależy wysokość opłacanych przez nas rat miesięcznych, a co za tym idzie - i całkowity koszt kredytu. Im większe oprocentowanie, tym mniej korzystna może być dana oferta - choć w przypadku sporych zobowiązań kredytowych koszty niewchodzące w skład oprocentowania mogą mieć większy wpływ na koszt kredytu. 
            Wysokości oprocentowania często nie można poddawać negocjacjom - choć w przypadku dobrej zdolności kredytowej niektóre banki zgadzają się na obniżenie jednej ze składowych oprocentowania - marży. 
            `;
        }

        function pokaz_nadplate()
        {
            var div = document.getElementById("definicje");
            div.style.opacity = "1";
            div.style.transition = "0.4s";

            document.getElementById("tekst").innerHTML = `
            <b>Czym jest nadpłata kredytu?</b><br><br>
            Nadpłata to częściowa wcześniejsza spłata kredytu. Polega na przelewaniu bankowi wyższych kwot w porównaniu z ratami, które wynikają z harmonogramu spłaty w umowie kredytowej.
            Dzięki nadpłatom zmniejszasz kwotę pożyczoną od banku, czyli kapitał, od którego naliczane są odsetki. Im niższa jest kwota pozostała do spłaty, tym mniejsze są odsetki. 
            W efekcie kredyt jest tańszy.<br><br>
            Jako kredytobiorca decydujesz o częstotliwości i wysokości nadpłat. Możesz wpłacać wyższe raty kredytowe co miesiąc, co kilka miesięcy lub nadpłacić kredyt jednorazowo.<br><br>
            Kredyt nadpłacisz dowolną „nadprogramową” kwotą, ale realne znaczenie dla obniżenia spłacanych rat lub skrócenia okresu spłaty kredytu mają nadpłaty przekraczające przynajmniej jedną ratę.
            `;
        }

        function pokaz_ubezpieczenie()
        {
            var div = document.getElementById("definicje");
            div.style.opacity = "1";
            div.style.transition = "0.4s";

            document.getElementById("tekst").innerHTML = `
            <b>Jak działa ubezpieczenie kredytu?</b><br><br>
            Ubezpieczenie kredytu zabezpiecza spłatę zadłużenia. W przypadku utraty pracy, zdrowia lub życia ubezpieczyciel zobowiązuje się do pokrycia części lub reszty zadłużenia. 
            Ubezpieczenie pomoże zapewnić stabilność finansową naszym bliskim na wypadek naszej śmierci.<br><br>
            Dla nas samych, może okazać się zbawienne, gdy stracimy pracę, bądź czasowo nie będziemy do niej zdolni i będziemy przebywać na długotrwałym zwolnieniu lekarskim. 
            To ważne, aby w tak ciężkich chwilach nie martwić się o spłatę zadłużenia naszych kredytów.<br><br>
            To, co istotne, to fakt, że opłata ubezpieczeniowa zostanie doliczona do kwoty uzyskanego kredytu i wraz z nim zostanie rozłożona na raty. 
            Nie obciąża to budżetu domowego wysoką kwotą jednorazowej składki.
            `;
        }