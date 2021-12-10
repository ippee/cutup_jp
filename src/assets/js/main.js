import { Cutup } from "./cutup";
import { openShareLink } from "./share";
import { copyResult } from "./clipboard";

/**
 * アプリケーションの状態
 *
 * モデルが保持する各状態をステートと呼ぶ。
 */
const model = {
  // 星 - 岡本かの子 (https://www.aozora.gr.jp/cards/000076/files/1291_23059.html)
  // TinySegmentorで分かち書きをする都合上、旧仮名遣いを新仮名遣いで書き直している。
  src: `　晴れた秋の夜は星の瞬きが、いつもより、ずっとヴィヴィットである。ことに月のない夜は星の光が一層燦然として美しい。それ等の星々をじっと凝視していると、光の強い大きな星は段々とこちらに向って動いて来るような気がして怖いようだ。事実太洋を航海しているとき闇夜の海上の彼方から一点の光がこちらに向って近づいて来る。何であろうと一心にそれを見守っていると、突然その光の下に黒々とした山のような巨船の姿を見出してびっくりしたことがある。星を見詰めていると何か判らない巨大なものがその星を乗せてこちらに迫って来るような気がする時もある。そういう錯覚は一種の恐怖に似て神秘的な楽しさでもある。
　星の瞬きは太古から人間にいろいろな暗示や空想を与えている。星によって人間の運勢を占うということは、古来、東西共通に行われたことで、たとえそれに、科学的根拠があるにしても、そもそもの初めは太古の人間が、星辰の運行にいろいろの神秘的な意味を持たせ、それを人間の生活に結びつけて来たものである。星が常に何事かを下界に向けて信号し続けているように明滅したり、時期によって地球から見る人の眼にその位置を変えたり、鼓豆虫のようにすいすいと天空を流れたり、時には孔雀の尾のように長い尾を引く恵星が現われたりすることなどは、すべて動くものに生命を見出した太古の人にとっては、星もまた一つの生きものであったと思われたらしい。私達でも星をじっと見詰めていると、星が生きもののような気がして来る。
　エジプト、アラビヤ、インド、などの乾燥した土地では、天体を非常に近く感ずる。それは空中の湿度が低いため星辰の光が一層燦然と輝くからであるという。それだけに、それ等の土地の太古の住民は、天体の運行に興味を持ち、ちょうど漁師が風と雲によって天候を予知するように、星辰を観測することによって、何彼と生活上の便宜を得た。そういうわけで、占星術のごときも、エジプト、アラビア、インド等に、一番古く発達したのであった。
　私は、渡欧の船中、インド洋で眺めた南十字星の美しさは、いつまでも忘れ難い。コバルト色に深く澄み渡った南の空に、大粒の宝玉のように燦々と光り輝く十字星は、天空一ぱいに散乱する群星を圧していた。スエズで一たん船を降りて、夜中自動車でエジプトの首都カイロに向った時、荒漠たるアラビヤ砂漠の中で眺めた星もまた美しかった。インド洋上といい、アラビヤ砂漠の中といい、私は星を仰ぎ見る度に古代の人の心に立ち帰って見るのであった。今日のように、機械の発達しない太古の人達はインド洋やアラビヤ砂漠を往来するのに星を唯一の羅針とした。昔も今も変りなく燦然と輝くあの南十字星がそんな役割を勤めたかと思うと、ただ単に美しいと鑑賞するだけでは済まないようにさえ思う。
　エジプトでは、紀元前四千二百四十一年にすでに暦が存在したという。そして当時の埃及人が一年を三百六十五日に分けていたこともまた、一つの驚異に値することである。こうした事実は、古代埃及人の天体の運行に関する知識から生れたものであって、テーベ（ナイル河の上流の古都）にある紀元前千三百年頃のエジプト王セティ一世の墳墓の天井には星座の図が描いてあるのを見ても判る。更に、セティ一世より五十年ばかり後のラムセス二世の墓にも星を描いた壁画がある。この二つの絵を見ると星は人間や鳥獣をもって象徴されていて、それらの鳥獣も頚から下は人間の体をしている。そして一番偉い星は天狼星で、これは完全な人間の姿をもって現わされ、王冠を頂き笏を手にしている。面白いことには群星は素足でいるが、主立った星は古代埃及独特の独木舟に乗っている。
　古代埃及人は、地球の裏には魔者の住んでいる暗黒の大海があって、太陽は東から西へと一日の行程が終ると、この地球の裏の魔海を夜間舟で渡って、翌朝までにまた元の東に帰るのだと信じていたというから察するに星もまた太陽と同様に、舟で暗黒の海を渡ると考えられたのかも知れない。星を鳥獣で象徴したのは、鷹を太陽の化身と考えたのと同じ意味からかも知れない。
　満天に散在する星の一群を綴り合せて、いろいろな形を想像してできたのが星座である。星座は人間の詩的空想の産物であって、いかに沢山の星が天にあるからといっても、それらが精密な物体を型造る程沢山あるわけではなく、いくつか点在する星と星との間に人間が勝手な空想の線を描いて、あるものは白鳥を象り、あるものは獅子に象ったりしたのである。従って星座の数も造らうと思えばいくらでも際限なくできたはずで、十九世紀頃には知られているものだけでも百九十の多きに達したという。それが段々整理されて現在では八十八星座が公認されている。古代から伝わる星座の名称を調べて見ると、昔の星座の名の方が何となく詩的で、例えばその中には、牛飼い、冠、琴、白鳥、乙女、というようなロマンチックなものから、狼、大熊、小熊、海蛇、などの怖ろしい動物に見立てたものまであるが、十八世紀以後の星座名は、八分儀、定規、望遠鏡、軽気球、竜骨等機械が多いのは、文明の変遷が人間の空想の範囲にまで侵入していて面白い。
　私は、エジプトに旅をした時、一夜、首都カイロから自動車でギゼーのピラミッドを訪れた。それはちょうど日本の秋を思わせるような涼しい星月夜であった。駱駝に乗ってピラミッドの周辺を逍遥しての帰るさ立寄ったホテルの露台の籐椅子にもたれて私は埃及の空に輝く星々を心ゆくまで眺めることができた。日本などでは到底肉眼では見ることのできない星が小さいながらもはっきり輝いている。黒々と屹立するピラミッドの頂点辺りに一際大きく光つていたのは古代埃及人が一番尊敬した天狼星でもあらうか。エジプトでは四年に一度天狼星が日の出と同時に現われるので、こうした天文現象の文献が古代埃及の年代を計算する一助となっているということである。
　私は埃及の星空を眺めながら、私の知っている限りの星座の名を想い出して、それを探し求めた。しかし、星座図が手元になかったのではっきり見極めがつかなかったが、どうやらそれらしいものをいくつか発見することはできた。だがそれよりも私は自分で星と星との間に勝手な線を描いて、自分の好むままの空想図を組み立てて見ることの方が一層楽しかった。東京の留守宅の半面図を描くことも、日本からエジプトまで来た私の足跡を地図に描くこともできた。
　星を眺めていると、星と語った古代人の稚純な気持ちが、自分にも見出されるような気がする。
　秋の晴れた夜、私は星と語りによく家の屋上に昇つて行く。北の空には柄杓のかたちをした北斗七星がその柄杓の柄を東に向けて横たはっている。それと少し離れて北極星が一際鮮やかに輝いている。他の星がことごとく夜毎に少しずつ位置を変えて行くのに北極星だけはいつも同じ位置にいる。地軸の北端の真上にある北極星は小熊星座の主星である。この星座の形が小熊を連想させるとは私にはどうしても受取れないが、小熊という名はいかにも北極の星らしく、その光質までが白光を帯びているようである。
　北極星を眺めていると、海辺から帰る鵜烏が一羽、二羽、淋しい啼声をたてながら星空おかすめ去る。地上には薄の穂が夜目にも白く風に靡いている――秋の夜の星空は四季を通じて一ばん私たちに親しく懐しく感ぜられる。`,
  start: "「",
  end: "。,」,？",
  middle: "は,へ,を,の,で,から,に,て,が,も,、",
  lower: 50,
  upper: 60,
  result: "",
};

/**
 * modelの更新
 *
 * メッセージというクライアントの操作内容を元にmodelを更新する。
 * メッセージには "type" という属性があり、そこに具体的な操作内容が記述されている。<br />
 * modelの更新後、view関数によってその変更をHTMLに反映する。
 *
 * @param {Object} model アプリケーションの状態
 * @param {Function} view modelをHTMLに反映する関数
 * @param {Object} msg メッセージ
 */
const update = (model, view) => (msg) => {
  // modelの更新、及びviewによって反映するステートの名前を取得
  let targets = (() => {
    switch (msg.type) {
      case "Change":
        model[msg.target] = msg.newValue;

        // クライアント側のフォームの変更をモデルに反映しているため、
        // viewの更新を行う必要はない
        return [];

      case "Cutup":
        try {
          let cutup = Cutup.newInstanceFromModel(model);
          model.result = cutup.generateText();
          return ["result"];
        } catch (e) {
          alert(e);
          return [];
        }

      default:
        throw Error("Received an unknown message.");
    }
  })();

  view(model, targets);
};

/**
 * modelをHTMLに反映
 *
 * targetsにはステート名が格納されており、そのステートに関連するノードのみを更新する。
 *
 * @param {Object} model アプリケーションの状態
 * @param {Array<String>} targets 対象のステート名
 */
const view = (model, targets) => {
  targets.forEach((target) => {
    document.querySelectorAll(`[state="${target}"]`).forEach((elem) => {
      switch (elem.tagName) {
        case "INPUT":
        case "TEXTAREA":
          elem.value = model[target];
        default:
          elem.innerText = model[target];
      }
    });
  });
};

const main = (model, update, view) => {
  view(model, Object.keys(model)); // viewの初期化

  const dispatch = update(model, view); // クライアント側の操作内容を発信する関数

  // ハンドラの登録
  ["src", "start", "end", "middle", "lower", "upper"].forEach((state) => {
    document.getElementById(`form-${state}`).addEventListener(
      "input",
      (e) => {
        dispatch({
          type: "Change",
          target: state,
          newValue: e.currentTarget.value,
        });
      },
      false
    );
  });

  ["form"].forEach((state) => {
    document.getElementById(state).onsubmit = () => {
      dispatch({ type: "Cutup" });
      return false;
    };
  });

  document
    .getElementById("copy")
    .addEventListener("click", () => copyResult(model.result), false);

  ["twitter", "facebook", "pocket"].forEach((target) => {
    document
      .getElementById(`share-${target}`)
      .addEventListener("click", () => openShareLink(target), false);
  });
};

document.addEventListener(
  "DOMContentLoaded",
  () => main(model, update, view),
  false
);
