
import Center from "./Center";
function About() {
  return (
    <div className="mt-5 pt-5">
      <Center>
        <div className="container-sm m-1 p-3 shadow p-3 mb-5 bg-body rounded">
          <br />
          <p className="ms-3 instruction">O Fleksji</p>

          <p  className="ms-3">
            Fleksja została stworzona, aby pomóc uczącym się ćwiczyć polską
            gramatykę, wybierając poprawną formę każdego słowa. Pozycje w
            rozwijanym menu zostały wygenerowane przy użyciu{" "}
            <a href="http://morfeusz.sgjp.pl/">
              "Analizatora i generatora fleksyjnego Morfeusz 2”
            </a>
            . Wszystkie teksty pochodzą z polskich książek znajdujących się w
            domenie publicznej. Pełne teksty znajdują się na stronie{" "}
            <a href="https://wolnelektury.pl/">wolnelektury.pl/</a>.
          </p>
        </div>
        <div >
          <h3 className="contact">
            <a href="https://twitter.com/Maia_Creates">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
            style={{color:"#1DA1F2"}}
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
          </a>
          &nbsp;
          <a href="https://www.reddit.com/user/Piko8Blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-reddit"
            viewBox="0 0 16 16"
            style={{color:"#FF5700"}}
          >
            <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z" />
          </svg>
          </a>
          </h3>
          </div>
          </Center>
        </div>
     

  );
}

export default About;
