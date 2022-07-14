import { useEffect, useState } from "react";
import { collection, addDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Firestore() {
  const [data, setData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const [dbDados, setDbDados] = useState([]);

  useEffect(() => {
    consultaDadosBanco();
  }, []);

  async function consultaDadosBanco() {
    const querySnapshot = await getDocs(collection(db, "usuários"));

    querySnapshot.forEach((doc) =>
      setDbDados((dadosAnteriores) => [...dadosAnteriores, doc.data()])
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const campoAtual = e.target.name;
    const valorDigitadoAtual = e.target.value;

    setData((dadosAntigos) => ({
      ...dadosAntigos,
      [campoAtual]: valorDigitadoAtual,
    }));
  }

  async function handleAddStore(data) {
    try {
      // adicionando dados ao banco de dados
      const docRef = await addDoc(collection(db, "usuários"), data);

      console.log(docRef.id, "write document");
    } catch (error) {
      console.log("erro ao adicionar o documento", error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        handleAddStore(data);
        e.preventDefault();
      }}
    >
      <input type="text" name="nome" onChange={handleSubmit} />
      <input type="text" name="email" onChange={handleSubmit} />
      <input type="text" name="telefone" onChange={handleSubmit} />

      <button type="submit">Enviar dados</button>

      <ul>
        {dbDados.map((dado) => (
          <li key={dado.telefone}>{dado.nome}</li>
        ))}
      </ul>
    </form>
  );
}
