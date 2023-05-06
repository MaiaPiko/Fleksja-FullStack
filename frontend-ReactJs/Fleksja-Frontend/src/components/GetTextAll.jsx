import { useState, useEffect } from "react";
import Drop from "./Drop.jsx";
import Box from "./Box.jsx";
import JsxParser from "react-jsx-parser";
import Center from "./Center.jsx";
import Pagination from "./Pagination.jsx";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const GetTextAll = () => {
  const [passages, setPassages] = useState([]);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPassages() {
      try {
        const response = await fetch("http://127.0.0.1:8000/passages/");
        const data = await response.json();
        setPassages(shuffle(data));
      } catch (error) {
        console.error(error);
      }
    }

    fetchPassages();
  }, []);

  if (passages.length === 0) {
    return (
      <Center>
        <div>Loading...</div>
      </Center>
    );
  }

  const indexOfLastPassage = currentPage * itemsPerPage;
  const indexOfFirstPassage = indexOfLastPassage - itemsPerPage;
  const currentPassages = passages.slice(
    indexOfFirstPassage,
    indexOfLastPassage
  );

  return (
    <>
      <div className="mt-5 pt-5"></div>
      <Center>
        {currentPassages.map((passage) => (
          <div key={passage.id}>
            <br />
            <p className="ms-2 instruction">Uzupełnij Brakujące Słowa</p>
            <Box>
              <div style={{ display: "grid", placeItems: "center" }}>
                <div className="container m-5 appfonts ">
                  <JsxParser components={{ Drop }} jsx={passage.text} /> as
                  JSX.Element
                </div>
              </div>
              {/* <Score correct={score} total={total} /> */}
              <p className="src appfonts ">{`"${passage.title}" | ${passage.author}`}</p>
            </Box>
          </div>
        ))}
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={passages.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        {/* <Footer/> */}
      </Center>
    </>
  );
};

export default GetTextAll;
