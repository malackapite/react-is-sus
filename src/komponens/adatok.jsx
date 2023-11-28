export const adatLista = []

for (let i = 0; i < 10; i++) {
    const image = {
        id: i,
        leiras: 'Leírás',
        alt: 'Kép címe',
        src: `https://picsum.photos/200/300?random=${i}`
    };

    adatLista.push(image);
}