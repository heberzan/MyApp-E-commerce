// back/src/helpers/updateProducts.ts
import { AppDataSource } from '../config/dataSource';
import { Product } from '../entities/Product';
import { productsToPreLoad } from './preLoadProducts';

// Cargar variables desde .env.update si existe
import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../../.env.updateProducts');
dotenv.config({ path: envPath });

export const updateProductsInProduction = async () => {
  try {
    console.log(' Actualizando productos en producción...');

    await AppDataSource.initialize();
    console.log(' Database connected');

    const productRepo = AppDataSource.getRepository(Product);

    for (const productData of productsToPreLoad) {
      // Buscar producto por nombre (ajusta según tu lógica única)
      const existing = await productRepo.findOne({
        where: { name: productData.name },
      });

      if (existing) {
        // Actualizar existente
        existing.price = productData.price;
        existing.description = productData.description;
        existing.image = productData.image.trim(); // ← Eliminar espacios
        existing.stock = productData.stock;
        existing.categoryId = productData.categoryId;
        await productRepo.save(existing);
        console.log(` Actualizado: ${productData.name}`);
      } else {
        // Insertar nuevo
        const newProduct = productRepo.create({
          ...productData,
          image: productData.image.trim(), // ← Eliminar espacios
        });
        await productRepo.save(newProduct);
        console.log(` Creado: ${productData.name}`);
      }
    }

    console.log('Actualización completada');
    await AppDataSource.destroy();
  } catch (error) {
    console.error(' Error:', error);
    process.exit(1);
  }
};
// Ejecutar si se llama directamente con ts-node
if (require.main === module) {
  updateProductsInProduction();
}
