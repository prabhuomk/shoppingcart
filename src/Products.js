import { Cart } from "./Cart";

export function Products({ count, SetCount }) {
  const products = [
    {
      title: "Laptop",
      src:
        "https://www.lenovo.com/medias/ww-lenovo-laptop-v15-amd-hero.png?context=bWFzdGVyfHJvb3R8NDM4OTQyfGltYWdlL3BuZ3xoZTYvaDg2LzEwNzc4MDE1NzYwNDE0LnBuZ3xjZDdhZjRjMjAzMjgwMDVlY2I4NjM0YWZlM2UzNGM1MWM4NTAwMzg0YzA1MTFhNDQwMWMzYzdiMzQ5ZWYwYmFi",
      price: "Rs 40000"
    },

    {
      title: "Mobile",
      src:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-f127gzkgins/gallery/in-galaxy-f12-4gb-ram-sm-f127gzkgins-419015713?$684_547_PNG$",
      price: "Rs 10000"
    },

    {
      title: "Dining Table",
      src: "https://www.royaloakindia.com/uploads/DSC_302859.webp",
      price: "Rs 8000"
    },

    {
      title: "Dress",
      src:
        "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/608x608/products/11460/111535/New-Men-Blazer-Fashion-Luxury-Woolen-Blends-Patchwork-Slim-Suit-Jackets-Business-Suit-Male-Wedding-Dress__90492.1574418842.jpg?c=2",
      price: "Rs 2000"
    },

    {
      title: "Ipad",
      src:
        "https://www.reliancedigital.in/medias/Apple-MYL92HN-A-Tablets-491901095-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjA5MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGM3L2hjMC85MzgzOTIxNTQ5MzQyLmpwZ3w5NWEwYmM3NGU2N2M3Mjg4NDc0MzkyODcwMjg1ZDRlYWU0YzI4ZDBlYmVlYjcyM2M4MzE1YjhlMGUxYWMzYzVj",
      price: "Rs 50000"
    }
  ];

  return (
    <div className="ShoppingCart">
      {products.map((data) => (
        <div>
          <Cart
            title={data.title}
            src={data.src}
            price={data.price}
            count={count}
            SetCount={SetCount}
          />
        </div>
      ))}
    </div>
  );
}
