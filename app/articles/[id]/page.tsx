"use client";

import Loading from "@/app/component/Loading";
import { getArtikel } from "@/app/function/getData";
import { Breadcrumb } from "antd";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export default function Page({ params }: { params: { id: number } }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtikel(setArticles, setLoading);
  }, []);

  const article = articles[params.id];
  return (
    <Content className="min-h-screen lg:px-[100px] px-[20px]">
      {/* navigasi */}
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          { key: "home", title: <Link href={"/"}>home</Link> },
          { key: "articles", title: <Link href={"/"}>articles</Link> },
          {
            key: `${params.id}`,
            title: <Link href={`/articles/${params.id}`}>{params.id}</Link>,
          },
        ]}
      ></Breadcrumb>

      {/* content */}
      {loading ? (
        <Loading />
      ) : (
        <div className="lg:p-[100px] bg-white">
          <header>
            <h1 className="font-impact font-bold text-[2rem]">
              {article.title}
            </h1>
            <p>{article.description}</p>
          </header>
          <article>
            <img
              src={article.urlToImage}
              className="w-[70%] mx-auto my-[20px]"
              alt=""
            />
            <p>
              {article.content}{" "}
              <a href={article.url} className="text-blue-500 underline">
                click here
              </a>
            </p>
          </article>
        </div>
      )}
    </Content>
  );
}
