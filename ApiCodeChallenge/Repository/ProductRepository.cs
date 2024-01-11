using ApiCodeChallenge.Model;
using System.Net;
using static System.Reflection.Metadata.BlobBuilder;

namespace ApiCodeChallenge.Repository
{
    public class ProductRepository : IProductRepository
    {
        public static List<Product> products = new List<Product>(); 
        public void AddProduct(Product product)
        {
            try
            {
                products.Add(product);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    

        public void DeleteProduct(int productId)
        {
            try
            {
                foreach (var product in products)
                {
                    if (product.ProductId == productId)
                    {
                        products.Remove(product);
                        break;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Product> GetProductByCategory(string category)
        {

            List<Product> prodBycat = new List<Product>();
            try
            {
                foreach (var pro in products)
                {
                    if (pro.Category == category)
                    {
                        prodBycat.Add(pro);
                        return prodBycat;
                    }
                }
                return null;
            }
            catch (Exception)
            {

                throw;
            }
        }
    

        public List<Product> GetProductByName(string name)
        {
            List<Product> prodByname = new List<Product>();
            try
            {
                foreach (var pro in products)
                {
                    if (pro.ProductName == name)
                    {
                        prodByname.Add(pro);
                        return prodByname;
                    }
                }
                return null;
            }
            catch (Exception)
            {

                throw;
            }
        }
    

        public void UpdateProduct(Product product)
        {
            try
            {
                foreach (var pro in products)
                {
                    if (pro.ProductId == pro.ProductId)
                    {
                        pro.ProductName = pro                                                  .ProductName;
                        pro.Category = pro.Category;
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
