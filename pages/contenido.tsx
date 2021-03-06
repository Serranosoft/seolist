import React, { useState } from "react";
import Contenido_res from "../resources/Contenido";
import Checkbox from "../components/Checkbox";
import LoadingBar from "../components/LoadingBar";
import { removeAllChecks } from "../Utils/Utils";
import Head from "next/head";

function Contenido() {
  const [task, handleTask] = useState<number>(0);
  const length = Contenido_res.length;

  return (
    <>
      <Head>
        <title>
          Completa todos los aspectos SEO en el contenido y copywriting de tu página web |
          SEOList.pro
        </title>
        <meta
          name="description"
          content="Comprueba y completa en formato «check» todos los aspectos de tu contenido en tu página web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="row w-100 justify-content-evenly py-5 mx-auto">
        <div className="col-12 col-md-7 d-flex flex-column">
          <div className="row d-flex justify-content-between">
            <div className="col-8 col-lg-10 fs-4">
              <span className="me-2 text-dark">Terminado</span>
              <span className="text-success">
                {task} de {length}
              </span>
            </div>
            <button
              className="col-4 col-lg-2 col-md-3 fs-8 bg-success text-white border-0 py-0 px-0 rounded"
              onClick={() => removeAllChecks(handleTask)}
            >
              Quitar todos
            </button>
          </div>
          <div className="row py-3 my-3">
            <div className="col-12">
              <LoadingBar />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-12 border bg-white shadow rounded">
              {Contenido_res.map((el) => {
                return (
                  <Checkbox
                    key={el.id}
                    el={el}
                    task={task}
                    handleTask={handleTask}
                    length={length}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 bg-white shadow rounded p-0 sticky">
          {/* {SEOArticles.map((el) => {
            return (
              <Article
                el={el}
              />
            )
          })} */}
        </div>
      </section>
    </>
  );
}

export default Contenido;
