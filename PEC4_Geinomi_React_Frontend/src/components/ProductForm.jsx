import { useEffect, useState } from 'react';

const initialForm = {
  name: '',
  description: '',
  category: 'Mochilas',
  price: '',
  stock: '',
  capacity: '',
  weight: '',
  material: '',
  color: '',
  image: '',
  status: 'available',
  featured: false,
  createdBy: 'admin@geinomi.com'
};

function ProductForm({ selectedProduct, onSubmit, onCancel, isSubmitting }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (selectedProduct) {
      setForm({
        name: selectedProduct.name || '',
        description: selectedProduct.description || '',
        category: selectedProduct.category || 'Mochilas',
        price: selectedProduct.price || '',
        stock: selectedProduct.stock || '',
        capacity: selectedProduct.capacity || '',
        weight: selectedProduct.weight || '',
        material: selectedProduct.material || '',
        color: selectedProduct.color || '',
        image: selectedProduct.image || '',
        status: selectedProduct.status || 'available',
        featured: Boolean(selectedProduct.featured),
        createdBy: selectedProduct.createdBy || 'admin@geinomi.com'
      });
    } else {
      setForm(initialForm);
    }
  }, [selectedProduct]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock)
    };

    onSubmit(productData);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit} id="crear">
      <div className="section-heading">
        <p className="eyebrow">Formulario conectado a la API</p>
        <h2>{selectedProduct ? 'Editar producto' : 'Crear nuevo producto'}</h2>
        <p>
          Este formulario envía datos reales al backend usando una petición {selectedProduct ? 'PUT' : 'POST'}.
        </p>
      </div>

      <div className="form-grid">
        <label>
          Nombre
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Categoría
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="Mochilas">Mochilas</option>
            <option value="Bolsas">Bolsas</option>
            <option value="Camping">Camping</option>
            <option value="Senderismo">Senderismo</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Botellas térmicas">Botellas térmicas</option>
          </select>
        </label>

        <label>
          Precio
          <input name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} required />
        </label>

        <label>
          Stock
          <input name="stock" type="number" min="0" value={form.stock} onChange={handleChange} required />
        </label>

        <label>
          Capacidad
          <input name="capacity" value={form.capacity} onChange={handleChange} placeholder="Ej. 35L" required />
        </label>

        <label>
          Peso
          <input name="weight" value={form.weight} onChange={handleChange} placeholder="Ej. 1.2 kg" required />
        </label>

        <label>
          Material
          <input name="material" value={form.material} onChange={handleChange} required />
        </label>

        <label>
          Color
          <input name="color" value={form.color} onChange={handleChange} required />
        </label>

        <label>
          URL de imagen
          <input name="image" value={form.image} onChange={handleChange} placeholder="https://..." required />
        </label>

        <label>
          Estado
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="available">Disponible</option>
            <option value="out_of_stock">Sin stock</option>
            <option value="draft">Borrador</option>
          </select>
        </label>
      </div>

      <label className="checkbox-label">
        <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
        Producto destacado
      </label>

      <label>
        Descripción
        <textarea name="description" value={form.description} onChange={handleChange} rows="4" required />
      </label>

      <div className="form-actions">
        <button type="submit" className="btn primary" disabled={isSubmitting}>
          {isSubmitting ? 'Guardando...' : selectedProduct ? 'Actualizar producto' : 'Guardar producto'}
        </button>
        {selectedProduct && (
          <button type="button" className="btn ghost" onClick={onCancel}>
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  );
}

export default ProductForm;
