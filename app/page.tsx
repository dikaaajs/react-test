"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Thumbnail from "./component/Thumbnail";
import { getArtikel } from "./function/getData";
import Loading from "./component/Loading";
const { Content } = Layout;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtikel(setArticles, setLoading);
  }, []);

  return (
    <Content className="min-h-screen bg-slate-100">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 gap-[30px] px-[50px] py-[50px]">
          {articles[0] !== null &&
            articles.map((i: any, idx: number) => {
              return <Thumbnail i={i} idx={idx} />;
            })}
        </div>
      )}
    </Content>
  );
};

export default App;
