import { useState } from "react";
import { useSelector } from "react-redux";

const AddItem = () => {
  const jwt = useSelector((state) => state.loginReducer);
  const jwtToken = jwt.jwtToken;

  const [file, setFile] = useState({});
  const [filePath, setFilePath] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
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
    setShowPreview(true);
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
        setFilePath(null);
        setShowPreview(false);
        setDescription("");
      });
  };

  return (
    <div>
      <form onSubmit={upload}>
        <div className="img-preview">
          {showPreview ? (
            <div>
              <p>Recipe Image</p>
              <img src={filePath} alt="img-preview" />
            </div>
          ) : null}
        </div>
        <input name="file" type="file" onChange={fileOnChange} />
        <input
          name="description"
          type="text"
          onChange={saveInput}
          value={description}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
