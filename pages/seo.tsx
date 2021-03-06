import React, { useState } from "react";
import SEO from "../resources/SEO";
import SEOArticles from "../resources/SEO-Articles";
import Checkbox from "../components/Checkbox";
import LoadingBar from "../components/LoadingBar";
import { removeAllChecks } from "../Utils/Utils";
import Article from "../components/Article";
import Head from "next/head"

function Seo() {
  const [task, handleTask] = useState<number>(0);
  const length = SEO.length;

  return (
    <>
      <Head>
        <title>
          Completa y comprueba todos los aspectos SEO de tu página web | SEOList.pro
        </title>
        <meta
          name="description"
          content="Comprueba y completa en formato «check» todos los aspectos SEO que debe tener tu página web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="row w-100 justify-content-evenly align-items-start py-5 mx-auto">
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
              {SEO.map((el) => {
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
          {SEOArticles.map((el) => {
            return <Article key={el.id} el={el} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Seo;
