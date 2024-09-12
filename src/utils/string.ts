import { franc } from 'franc-min'

export * from './github.js'

export function translateString(string: string | null) {
  if (!string)
    return ''

  if (franc(string) === 'cmn') {
    return string
  }
  else {
    return string
    // 翻译
    // consola.log("需要翻译");
    // await translate(resp.data.description, { to: "zh-CN" })
    //   .then((res) => {
    //     consola.log(res.text);
    //     desc = res.text;
    //   })
    //   .catch((e) => {
    //     consola.log(e);
    //     desc = resp.data.description;
    //   });
  }
}
