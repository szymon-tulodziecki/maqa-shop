const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const Redis = require('ioredis');
const redis = new Redis();

app.get("/api/products", async (req, res) => {
  try {
    const category = req.query.category;
    let productIds;

    if (category) {
      const categories = category.split(',').map(c => c.trim());
      const sets = await Promise.all(categories.map(cat => redis.smembers(`kategoria:${cat}`)));
      productIds = [...new Set(sets.flat())];
    } else {
      const keys = await redis.keys('produkt:*');
      productIds = keys.map(key => key.split(':')[1]);
    }

    const products = await Promise.all(
      productIds.map(id => redis.hgetall(`produkt:${id}`))
    );

    res.json(products.map((p, index) => ({
      ...p,
      id: productIds[index],
      cena: parseFloat(p.cena),
      nowosc: p.nowosc === '1' || p.nowosc === 'true',
      bestseller: p.bestseller === '1' || p.bestseller === 'true',
      promocja: p.promocja === '1' || p.promocja === 'true',
      kategorie: p.kategorie ? JSON.parse(p.kategorie) : []
    })));
  } catch (error) {
    console.error('Błąd API:', error);
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API działa na porcie ${PORT}`);
});
