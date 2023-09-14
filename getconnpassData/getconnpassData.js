// データの更新・取得ができるライブラリ
const axios = require("axios");
// 受け取った HTML 文字列をパースして jQuery ライクに扱えるライブラリ
// 「パースする」＝データを解析し必要なデータを取り出すこと（例：JSON形式のデータから必要なデータを取り出して、Javaプログラムで利用出来るようにする）
const cheerio = require("cheerio");

const fetchData = async () => {
  const URL = "https://knowledgework.connpass.com/event/295473/participation/#participants";
  // axios.getじゃなくてaxiosでも動いたけど、データ取得するから多分こっちが正しい
  // axios(URL)にすると自動でgetになる
  // nodeのfetchでも取れるかも？
  // すべてのHTMLデータとなんかその他諸々の情報を取得
  const result = await axios.get(URL);
  // result内のHTMLデータが入っているdataを代入
  const htmlParser = result.data;
  // 下のコードで$を使う上での定義っぽい？
  // jQueryの文法的に$(function(){　$(a).b()　});みたいに書くので
  // 事前に受け取ったHTMLデータを検索するための関数（＄は元々jQueryでも関数的な役割）
  const $ = cheerio.load(htmlParser);

  // class="applicant_area"の中のtrタグを取得し、その中のclass=display_nameのテキストを取得して出力する処理を繰り返す
  // この辺からjQueryっぽい文法？
  // tbodyだと主催者も入るのでクラスで指定
  $(".applicant_area")
  // applicant_area内で<tr>を見つける
  // findは最初のtrを見つけるじゃなくて、全部のtrを見つける
    .find("tr")
    // eachはループ処理
    // ループしないといけないのは、<tr>を見つける処理じゃないの？
    .each(function (i) {
      // this=”それぞれ”のtr
      // <tr></tr>内のdisplay_nameを見つけて、テキスト化し、余計な空行を削除する
      // 空行が残っちゃうのはcheerio独特な挙動かも？
      const title = $(this).find(".display_name").text().trim();
      console.log(title);
    });
};

fetchData();

// https://tukkytech.com/blog/nodejs-cheerio/
// 表示名じゃなくてユーザー名がほしい
// 参加者＋キャンセルした人のユーザー名を取得
// TSに変換する
// Githubにあげる