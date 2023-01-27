import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInsumos } from "../redux/actions";
import { createProd } from "../redux/actions";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function CrearProd() {
  const dispatch = useDispatch();
  const allInsumos = useSelector((state) => state.allInsumos);
  console.log(allInsumos, "alli");

  const [input, setInput] = useState({
    name: "",
    img: "",
    details: "",
    stock: 0,
    min: 0,
    insumos: [],
    defaultInput: [],
    aux: {},
  });
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  const [loading, setLoading] = React.useState(1);

  const [errors, setErrors] = React.useState({});

  const [valueIns, setValueIns] = useState("");
  const [valueCant, setValueCant] = useState("");
  console.log("input", input);

  useEffect(() => {
    dispatch(getInsumos("name", "ASC"));
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProd(input));
    alert("Producto creado satisfactoriamente");
    setInput({
      name: "",
      img: "",
      details: "",
      stock: 0,
      min: 0,
      insumos: [],
      defaultInput: [],
      aux: {},
    });
  };

  const handleSelect = (e) => {
    e.preventDefault();
    console.log(e.target.value, "vaaaalue");
    setValueIns(e.target.value);

    setInput({
      ...input,
      insumos: [...new Set([...input.insumos, e.target.value])],
      aux: { insumos: e.target.value },
    });
  };
  console.log(input.aux, "auxiliar");

  const handleChangeCant = (e) => {
    e.preventDefault();
    setValueCant(e.target.value);
    setInput({
      ...input,
      aux: { insumos: input.aux.insumos, cantidad: e.target.value },
    });
  };

  const handleSubCant = (e) => {
    e.preventDefault();
    input.defaultInput.push(input.aux);
    setInput({
      ...input,
      aux: {},
    });
    setValueCant("");
    setValueIns("");
  };

  //------------------------------------------------------------
  //Cloudinary

  const handleimg = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    let size = 0; //toma valor numerico del archivo.
    if (files) {
      size += files[0].size;
    }

    data.append("file", files[0]);
    data.append("upload_preset", "gestorDeInventario");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dwblsrtdb/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      let array = file.secure_url.split(".");
      let format = array[array.length - 1];

      if (size > 2000000) {
        setErrors({
          ...errors,
          img: "El archivo es demasiado grande",
        });
      } else {
        if (format === "jpg" || format === "png") {
          setErrors({
            ...errors,
            img: "",
          });
          setImage(file.secure_url);
          setLoading(0);
          setInput({
            ...input,
            img: file.secure_url,
          });
        } else {
          setErrors({
            ...errors,
            img: "Solo se admiten archivos formato jpeg o png",
          });
          setLoading(1);
        }
      }
    } catch (error) {
      setErrors({
        ...errors,
        img: "Solo se admiten archivos formato jpeg o png",
      });
      setLoading(1);
    }
  };

  //-----------------------------------------------------------------------------------------------------------------

  return (
    <div className="">
      <Link
        to="/home"
        className="flex justify-start pt-2 pl-2 pb-2 sm:pt-8 sm:pl-8"
      >
        <button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
          Volver
        </button>
      </Link>
      <div className="sm:flex sm:justify-start sm:align-start">
        <Menu />
      </div>
      <h1 className=" flex justify-center text-black text-xl font-mono font-bold pt-10 pb-10 sm:text-4xl underline">
        Agregar un nuevo producto
      </h1>
      <p className="flex justify-center ml-4 mr-4 pb-4 sm:pb-8">
        Agregar un nuevo producto detallando las características del mismo
      </p>
      <div className="flex justify-center">
        <form className="flex flex-col">
          <div className="flex flex-col sm:text-xl sm:font-bold ">
            <label className="">Nombre del producto: </label>
            <input
              className="border-2 border-blue-800 rounded-xl"
              type="text"
              name="name"
              id=""
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:text-xl sm:font-bold ">
            <label>Stock inicial:</label>
            <input
              className="border-2 border-blue-800 rounded-xl"
              type="number"
              name="stock"
              id=""
              value={input.stock}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:text-xl sm:font-bold ">
            <label>Detalles del producto:</label>
            <input
              className="border-2 border-blue-800 rounded-xl"
              type="text"
              name="details"
              id=""
              value={input.details}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col sm:text-xl sm:font-bold">
            <label>Stock minimo deseado:</label>
            <input
              className="border-2 border-blue-800 rounded-xl"
              type="number"
              name="min"
              id=""
              value={input.min}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col sm:text-xl sm:font-bold">
            <label>Insumos utilizados:</label>
            <select
              className="border-2 border-blue-800 rounded-xl"
              onChange={handleSelect}
              value={valueIns}
            >
              <option value="">Seleccione un insumo</option>
              {allInsumos?.map((i) => (
                <option value={i.name} key={i.id}>
                  {i.name}
                </option>
              ))}
            </select>

            <div className="flex flex-row sm:flex-row py-2	">
              <span value={valueCant}>
                <div className="flex sm:pt-4 rounded-xl">
                  <input
                    onChange={(e) => handleChangeCant(e)}
                    type="number"
                    placeholder="seleccione cantidad"
                    value={valueCant}
                  />
                  <div className="py-2 pl-4">
                    <button
                      onClick={(e) => handleSubCant(e)}
                      className="border-2 border-blue-800 rounded-xl px-1 "
                    >
                      Cargar insumo
                    </button>
                  </div>
                </div>
              </span>
            </div>
            {input.defaultInput.map((e) => {
              return (
                <div className="flex flex-col sm:flex-row mb-4">
                  <h1 className="text-xl font-thin">{e.insumos} - </h1>
                  <h2 className="sm:pl-2 text-xl font-thin">
                    Cantidad: {e.cantidad}
                  </h2>
                </div>
              );
            })}
          </div>

          <div>
            <label className="flex flex-col sm:text-xl sm:font-bold pb-2">
              {" "}
              Imagen del producto:
            </label>
            <input
              className="border-2 border-blue-800 rounded-xl"
              id="inputFile"
              type="file"
              name="image"
              onChange={(e) => handleimg(e)}
            />

            {loading === 0 ? (
              <div>
                <br />
                <img
                  src={image}
                  alt=""
                  className="border-2 border-blue-800 rounded-xl w-32 h-32 sm:w-64 sm:h-56"
                />
                <br />
              </div>
            ) : (
              false
            )}
            {errors.img ? errors.img : false}
            <br />
            <div className="pt-2 pb-8">
              <button
                onClick={(e) => handleSubmit(e)}
                className=" border-2 border-blue-800 py-2 px-4 rounded-xl hover:bg-blue-800 hover:text-white font-bold"
              >
                Guardar cambios
              </button>
            </div>
          </div>

          {/* <div className="pt-8 flex justify-center">
						<button
							className=" border-2 border-blue-800 py-2 px-4 rounded-xl hover:bg-blue-800 hover:text-white font-bold"
							type="submit"
							onClick={handleSubmit}
						>
							Guardar cambios
						</button>
					</div> */}
        </form>
      </div>
    </div>
  );
}
