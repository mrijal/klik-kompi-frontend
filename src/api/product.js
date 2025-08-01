export async function fetchProducts() {
  const res = await fetch('http://localhost:5000/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return await res.json();
}

// src/api/product.js
export const getAllProducts = async () => {
  const res = await fetch('http://localhost:5000/products')
  if (!res.ok) throw new Error('Gagal mengambil data produk')
  return await res.json()
}

export const getProductById = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`)
  if (!res.ok) throw new Error('Gagal mengambil detail produk')
  return await res.json()
}
