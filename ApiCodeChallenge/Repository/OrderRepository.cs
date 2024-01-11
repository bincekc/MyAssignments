using ApiCodeChallenge.Model;

namespace ApiCodeChallenge.Repository
{
    public class OrderRepository : IOrderRepository
    {
        List<Order> orders = new List<Order>();
        public void AddOrder(Order order)
        {
            try
            {
                orders.Add(order);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void DeleteOrdert(int productId)
        {
            try
            {

                foreach (Order order in orders)
                {
                    if (order.ProductId == productId)
                    {
                        orders.Remove(order);
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }

        }

        public List<Order> GetAll()
        {
            return orders;
        }
    }
}
