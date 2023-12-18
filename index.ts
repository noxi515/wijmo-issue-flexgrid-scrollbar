import { FlexGrid } from "@grapecity/wijmo.grid";

// ダミーデータ生成
const createItems = () => {
  const items = [] as any[];
  for (let i = 0; i < 100; i++) {
    const item = {} as any;
    items.push(item);
    for (let j = 0; j < 100; j++) {
      item[`prop-${(j + "").padStart(2, "0")}`] = j;
    }
  }
  return items;
};

// 同期でデータを読み込むFlexGrid
const initializeFlexGridSync = () => {
  const host = document.getElementById("grid-host-1");
  const grid = new FlexGrid(host, {
    itemsSource: [],
    isReadOnly: true,
    selectionMode: "None",
    headersVisibility: "Column",
    columns: [{ binding: "prop-00" }],
  });

  grid.itemsSource = createItems();
};

// 非同期でデータを読み込むFlexGrid
const initializeFlexGridAsync = () => {
  const host = document.getElementById("grid-host-2");
  const grid = new FlexGrid(host, {
    itemsSource: [],
    isReadOnly: true,
    selectionMode: "None",
    headersVisibility: "Column",
    columns: [{ binding: "prop-00" }],
  });

  setTimeout(() => {
    grid.itemsSource = createItems();
  }, 50);
};

initializeFlexGridSync();
initializeFlexGridAsync();
