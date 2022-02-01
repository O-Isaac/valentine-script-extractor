## Install & Usage

To install all dependecies use:

```bash
npm install
```

To get json format

```bash
npm run jsons

```

To get texts format

```bash
npm run bash
```

# Formats

JSON:

```json
{
  "servant": "Altria Pendragon (saber)",
  "collectionNo": 2,
  "scripts": [
    {
      "id": "9403350820",
      "url": "https://static.atlasacademy.io/JP/Script/94/9403/9403350820.txt"
    }
  ]
}
```

TEXT:

```
＠千子村正
[tVoice ValVoice_901100 0_V010]
それでな、ランサーのヤロウ、ついに[bgm BGM_EVENT_2 0.1][r]『オレに怖いものはねえ』なんてほざきやがった。[wait tVoice]
[k]

[charaFace A 13]

＠千子村正
[tVoice ValVoice_901100 0_V020]
こりゃ『[#饅頭:まんじゅう]怖い』に違いねえ、[r]真面目に聞いているのも馬鹿らしい。[wait tVoice]
[k]

＠千子村正
[tVoice ValVoice_901100 0_V030]
その手は桑名の焼き[#蛤:はまぐり]だって、[r]横になって適当に相づちをうっていたらよぉ、[wait tVoice]
[k]

[charaFace A 4]

＠千子村正
[tVoice ValVoice_901100 0_V040]
『あ、いや、わりい。一つあったわ。[r]　師匠の無理目の霊衣が怖い』[wait tVoice]
[k]
```

# Change Region

only you need change the endpoint in **index.js**

```js
const endpoint =
  "https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json";
```
