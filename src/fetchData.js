async function loadData() {
    const res = await fetch('digiTools.json');
    const data = await res.json();
    return data;
}

export const productsPromise = loadData();
