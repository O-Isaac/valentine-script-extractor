// Dependecies
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import fetch from "node-fetch";

// Variables config
const endpoint =
  "https://api.atlasacademy.io/export/JP/nice_servant_lore_lang_en.json";

// Functions

async function getServants() {
  const req = await fetch(endpoint);
  const res = await req.json();
  return res;
}

function getValentineScripts(servant) {
  const scripts = servant?.valentineScript;

  return scripts
    ? scripts.length > 0
      ? scripts.map((script) => ({ id: script.scriptId, url: script.script }))
      : []
    : [];
}

async function ValentineScripts() {
  let servants = await getServants();

  // Filter beasts
  servants = servants.filter((svt) => !svt.className.includes("beast"));

  const scripts = servants.map((servant) => {
    const valentine = getValentineScripts(servant);

    return {
      servant: servant.name + ` (${servant.className})`,
      collectionNo: servant.collectionNo,
      scripts: valentine,
    };
  });

  return scripts;
}

async function generateJSON() {
  const dirJSONS = join(process.cwd(), "jsons");

  if (!existsSync(dirJSONS)) mkdirSync(dirJSONS);

  console.log("JSONS: Generating....");

  const valentineScripts = await ValentineScripts();

  for (const script of valentineScripts) {
    writeFileSync(
      join(dirJSONS, script.collectionNo + ".json"),
      JSON.stringify(script, null, 2)
    );
  }

  console.log("JSONS: Complete!");
}

async function generateTEXT() {
  const dirJSONS = join(process.cwd(), "texts");

  if (!existsSync(dirJSONS)) mkdirSync(dirJSONS);

  console.log("TEXTS: Generating....");

  const valentineScripts = await ValentineScripts();

  for (const script of valentineScripts) {
    script.scripts.forEach(async ({ url, id }, index) => {
      const dirServant = join(dirJSONS, String(script.collectionNo));
      const req = await fetch(url);
      const textContent = await req.text();

      if (!existsSync(dirServant)) mkdirSync(dirServant);

      writeFileSync(join(dirServant, String(id) + ".txt"), textContent);
    });
  }
}

export { generateTEXT, generateJSON, ValentineScripts };
