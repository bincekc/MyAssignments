using ApiCodeChallenge.Model;

namespace ApiCodeChallenge.Repository
{
    public interface IOrderRepository
    {
        //void AddOrder(Order order);
        //List<Order> GetProductByCategory(string product);


        List<Order> GetAll();
        void AddOrder(Order order);
        void DeleteOrdert(int productId);

    }

}