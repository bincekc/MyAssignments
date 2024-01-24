class Book{
    constructor(isbn,bookname,booktitle,bookauthor,quantityofbooks,bookprice){
            this.isbn=isbn;
            this.bookname=bookname;
            this.booktitle=booktitle;
            this.bookauthor=bookauthor;
            this.quantityofbooks=quantityofbooks;
            this.bookprice=bookprice;
    }
        calculate(){
            return this.quantityofbooks*this.bookprice;
        }
        Displaybook(){
            console.log(`ISBN:${this.isbn} BookName:${this.bookname} Booktitle:${this.booktitle} Bookauthor:${this.bookauthor}
            Quantity:${this.quantityofbooks} BookPrice:${this.bookprice}`);
        }
 
        Displayamount(){
            const amount=this.calculate();
            console.log(`Bill Amount:${amount}`);
        }
}
 
const book=new Book("1234","life of pi","Price of Life","john","25","150");
book.Displaybook();
book.Displayamount();
 