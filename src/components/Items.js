export const partItems = [];
export const total = {
  body: 17,
  eyes: 24,
  hairs: 73,
  mouths: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  earrings: 32,
  noses: 1,
  neckwear: 18,
  layer_1: 5,
  layer_2: 5,
  layer_3: 9,
  facial_hair: 17,
};

const partDetails = {
  body: { origin: "character/body/", z_index: 0 },
  eyes: { origin: "character/eyes/", z_index: 4 },
  hairs: { origin: "character/hair/", z_index: 6 },
  mouths: { origin: "character/mouths/", z_index: 4 },
  eyebrows: { origin: "character/eyebrows/", z_index: 4 },
  hats: { origin: "character/accessories/hats/", z_index: 7 },
  glasses: { origin: "character/accessories/glasses/", z_index: 5 },
  earrings: { origin: "character/accessories/earrings/", z_index: 6 },
  noses: { origin: "character/noses/", z_index: 4 },
  neckwear: { origin: "character/accessories/neckwear/", z_index: 4 },
  layer_1: {
    origin: "character/clothes/layer_1/",
    z_index: 1,
    classify: "clothing_1",
  },
  layer_2: {
    origin: "character/clothes/layer_2/",
    z_index: 2,
    classify: "clothing_2",
  },
  layer_3: {
    origin: "character/clothes/layer_3/",
    z_index: 3,
    classify: "clothing_3",
  },
  facial_hair: { origin: "character/facial_hair/", z_index: 4 },
};

export function getAllPart() {
  for (const part in total) {
    const size = total[part];
    const details = partDetails[part] || {};
    const origin = details.origin || "";
    const z_index = details.z_index;
    const classify = details.classify || part;
    const png = ".png";

    for (let index = 0; index < size; index++) {
      let key = `${part}_${index + 1}`;
      let link = `${origin}${index + 1}${png}`;
      partItems.push({ key, link, classify, z_index });
    }
  }
}

getAllPart();
console.log(partItems);
