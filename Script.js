import OBR from "https://unpkg.com/@owlbear-rodeo/sdk/dist/obr.min.js";

const ID = "yourname.boo-plugin"; // Use same ID as plugin.json

OBR.onReady(() => {
  OBR.tool.create({
    id: ID + "/tool",
    label: "Boo",
    icon: "👻", // ghost emoji icon in toolbar
    shortcut: "B",
    onClick() {
      OBR.popup.open({
        id: ID + "/popup",
        title: "Spooky",
        content: `<div style="padding: 20px; font-size: 24px;">boo</div>`,
        width: 200,
        height: 120
      });
    }
  });
});
