import TinySegmenter from "tiny-segmenter";

/**
 * 日本語のカットアップを行うクラス
 */
export class Cutup {
  constructor(model) {
    this.src = model.src.value.replace(/\n/g, "");
    this.lower = model.lower.value;
    this.upper = model.upper.value;

    this.splitPoint = {};

    model.start.value.split(",").forEach((seg) => (this.splitPoint[seg] = 0));
    model.end.value.split(",").forEach((seg) => (this.splitPoint[seg] = 1));
    model.middle.value
      .split(",")
      .forEach((seg, i) => (this.splitPoint[seg] = i + 2));
  }

  /**
   * 文章の生成
   *
   * @return {String} カットアップされた文章
   */
  generateText() {
    this.checkProps();
    let sentences = this.splitText();
    return this.combineSentences(sentences)(0, "");
  }

  /**
   * フィールド変数のチェック
   *
   * フィールド変数に適切な値が設定されていることを確認する。<br />
   * 不正な値が存在する場合、例外を送出する。
   */
  checkProps() {
    if (this.upper < this.lower) {
      throw Error(
        "下限よりも上限の値の方が小さくなっています。\n上限の方が大きくなるよう設定してください。"
      );
    }
  }

  /**
   * 入力された文章の分解
   *
   * 入力された文章をランダムに組み合わせられる形に変換する。
   *
   * はじめに文章はTinySegmenterによって分かち書きした後、
   * 区切り文字から次の区切り文字までを結合し、sentenceとして保存される
   * （詳しくは./cutup.test.jsの「文章の分割」を参照）。<br />
   *
   * sentenceにはvalue、head、tailの3つの情報が格納される。<br />
   * valueは結合された文字列、headはその文字列の先頭にあたる区切り文字の番号、
   * tailは次のsentenceに繋がる区切り文字の番号が格納される。
   *
   * @return {Array<Object>} sentenceの集合
   */
  splitText() {
    const createSegments = () => {
      let segmenter = new TinySegmenter();
      return segmenter.segment(this.src);
    };

    const createSentences = (segs) => (acc, value, head, i) => {
      const create = createSentences(segs);

      if (i === segs.length - 1) {
        return acc.concat({
          value: value + segs[i],
          head: head,
          tail: 1,
        });
      }

      if (!this.splitPoint[segs[i]]) {
        return create(acc, value + segs[i], head, i + 1);
      }

      if (this.splitPoint[segs[i]] === 1) {
        let newList = acc.concat({
          value: value + segs[i],
          head: head,
          tail: 1,
        });
        return create(newList, segs[i + 1], 0, i + 2);
      }

      let newList = acc.concat({
        value: value,
        head: head,
        tail: this.splitPoint[segs[i]],
      });
      return create(newList, segs[i], this.splitPoint[segs[i]], i + 1);
    };

    let segs = createSegments();
    return createSentences(segs)([], "", 0, 0);
  }

  /**
   * ランダムにsentenceを選択する
   *
   * @return {Object} sentence
   */
  pickupSentences(target, sentences) {
    let selected = sentences.filter((sentence) => target === sentence.head);
    let i = Math.floor(Math.random() * selected.length);
    return selected[i];
  }

  /**
   * 複数のsentenceの値をランダムに組み合わせる
   *
   * headがtargetと同じ値を持つsentenceを取得し、
   * そのvalueをresultに結合する操作を、下限を超えるまで繰り返す。<br />
   * 上限を超えた場合は、最初から試行をやり直す。
   *
   * @return {String} カットアップの生成結果
   */
  combineSentences(sentences) {
    return (target, result) => {
      const combine = this.combineSentences(sentences);

      if (this.upper < result.length) {
        return combine(0, "");
      }

      if (this.lower <= result.length && target === 0) {
        return result;
      }

      let sentence = this.pickupSentences(target, sentences);
      let newTarget = (target) => {
        if (target === 1) return 0;
        else return target;
      };

      return combine(newTarget(sentence.tail), result + sentence.value);
    };
  }
}
