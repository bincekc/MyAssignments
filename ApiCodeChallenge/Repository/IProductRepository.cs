using ApiCodeChallenge.Model;

namespace ApiCodeChallenge.Repository
{
    public interface IProductRepository
    {
        void AddProduct(Product product);
        void UpdateProduct(Product product);
        void DeleteProduct(int productId);

        List<Product> GetProductByName(string name);
        List<Product> GetProductByCategory(string category);
    }
}
