import { useState } from "react";
import { useSelector } from "react-redux";

const AddItem = () => {
  const jwt = useSelector((state) => state.loginReducer);
  const jwtToken = jwt.jwtToken;

  const [file, setFile] = useState({});
  const [filePath, setFilePath] = useState("");
  const [description, setDescription] = useState("");

  const saveInput = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      setDescription(value);
    }
  };

  const fileOnChange = (e) => {
    setFile(e.target.files[0]);
    setFilePath(URL.createObjectURL(e.target.files[0]));
  };

  const upload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);

    fetch(
      "https://simple-e-commerce-backend.herokuapp.com/api/shopItems/addItem",
      {
        method: "post",
        body: formData,
        headers: {
          Authorization: `token ${jwtToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((resBody) => {
        console.log(resBody);
      });
  };

  return (
    <>
      <form onSubmit={upload}>
        <div className="img-preview">
          <img src={filePath} alt="img-preview" />
        </div>
        <input name="file" type="file" onChange={fileOnChange} />
        <input name="description" type="text" onChange={saveInput} />
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddItem;
