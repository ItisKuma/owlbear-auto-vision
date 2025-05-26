export function onLoad(ctx) {
  ctx.scene.onPropAdded(prop => {
    const name = prop.name.toLowerCase();

    const visionMap = {
      "30ft": 30,
      "60ft": 60,
      "darkvision": 60,
      "torch": 20
    };

    let matchedRadius = null;

    for (const key in visionMap) {
      if (name.includes(key)) {
        matchedRadius = visionMap[key];
        break;
      }
    }

    if (matchedRadius !== null) {
      ctx.scene.updateProp(prop.id, {
        "fog-vision": {
          enabled: true,
          range: matchedRadius
        }
      });
    }
  });
}
