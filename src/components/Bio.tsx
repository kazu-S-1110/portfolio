import React from "react";

export const Bio = () => {
  const careerStartDate = new Date("2022-04-01");
  const currentDate = new Date();

  const yearsPassed = currentDate.getFullYear() - careerStartDate.getFullYear();

  const isBeforeAnniversaryThisYear =
    currentDate.getMonth() < careerStartDate.getMonth() ||
    (currentDate.getMonth() === careerStartDate.getMonth() &&
      currentDate.getDate() < careerStartDate.getDate());

  const careerYears = isBeforeAnniversaryThisYear
    ? yearsPassed - 1
    : yearsPassed;

  return (
    <p className="text-md/12 text-gray-400 max-w-2xl mx-auto">
      東京在住の「kazu」と申します。
      <br />
      コーディングが好きなWebエンジニアです。
      <br />
      <br />
      28歳でWebエンジニアになりました、遅咲きです。
      <br />
      現在{currentDate.getFullYear()}年で{careerYears}
      年目。Web系スタートアップで主にフロントエンドのエンジニアをしています。
      <br />
      <br />
      覚えることが多くて大変ですが、実装できた時の喜びや新しい技術を使って遊ぶ楽しさがありなんだかんだ好きな仕事なんだと思う今日この頃です。
    </p>
  );
};
