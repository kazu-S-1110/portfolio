import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VALUES = [
  {
    title: "本質的な対応を",
    content: "問題の根本原因を探り、根本的な解決を目指す。",
  },
  {
    title: "仕様とその背景を理解する",
    content:
      "なぜそのような仕様が必要なのか、背景や目的を理解することで、より良い提案と実装ができます。",
  },
  {
    title: "コミュニケーションは適切に、適当に",
    content:
      "適切なコミュニケーション方法を選び、必要以上に複雑にせず、シンプルに平易に伝えることを心がけています。",
  },
  {
    title: "ドキュメントを残し、ナレッジを共有する",
    content:
      "変更された仕様や履歴をドキュメントとして残し、ナレッジとして共有することで、同じ問題に直面したときに効率よく解決できるようにします。",
  },
  {
    title: "仕組み化する",
    content:
      "繰り返し発生する作業や問題は、自動化やツール化することで効率を高め、本来の仕事に時間を割けるようにします。",
  },
  {
    title: "人は習慣によってつくられる",
    content:
      "アリストテレスの名言。日々の習慣が自分を作る。良い習慣を身につけ、継続することを大切にしています。",
  },
  {
    title: "健康を大事に",
    content: "30代になってわかる。健康は大事。すぐに不健康になる。",
  },
];

export const WhatICherish = () => {
  return (
    <div className="mt-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-primary">
        大事にしていること
      </h3>
      <div className="max-w-2xl mx-auto">
        <Accordion type="multiple" className="w-full">
          {VALUES.map((value, idx) => (
            <AccordionItem key={idx} value={idx.toString()}>
              <AccordionTrigger className="text-primary">
                {value.title}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{value.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
