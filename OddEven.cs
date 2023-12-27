using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFirstConsoleApp
{
    internal class OddEven
    {
        static void Main()
        {
            Console.WriteLine("Enter a number");
           int n= int.Parse(Console.ReadLine());
            if (n % 2 == 0)
            {
                Console.WriteLine("The number is even");
            }
            else
            {
                Console.WriteLine("The Num is odd");
            }
        }
    }
}
