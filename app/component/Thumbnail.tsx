"use client";
import { useRouter } from "next/navigation";

export default function Thumbnail(props: { idx: number; i: any }) {
  const router = useRouter();
  const { idx, i } = props;

  return (
    <div
      className="bg-white rounded-[9px] overflow-hidden cursor-pointer duration-300 ease-out hover:scale-[1.1]"
      key={i.url}
      onClick={() => router.push(`/articles/${idx}`)}
    >
      <div className="h-[200px] overflow-hidden">
        <img src={i.urlToImage} alt="" />
      </div>
      <div className="px-[10px] pb-[50px]">
        <h1 className="font-outfit font-bold text-[1.5rem]">{i.title}</h1>
        <p className="font-outfit">{i.description}</p>
      </div>
    </div>
  );
}
