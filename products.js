// products.js

const allProducts = [
    // Men's Products
    { id: 1, category: 'men', name: "Formal Suit", price: "₹29,999", image: "https://i.pinimg.com/1200x/dd/5a/33/dd5a33f6dfba6b6be6d18c09bfd72044.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 2, category: 'men', name: "Leather Jacket", price: "₹18,500", image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 3, category: 'men', name: "Casual Shirt", price: "₹4,200", image: "https://i.pinimg.com/1200x/c0/45/59/c04559cab2048f55ac27b009f2c74911.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 4, category: 'men', name: "Dress Trousers", price: "₹6,900", image: "https://i.pinimg.com/1200x/a6/b9/19/a6b919daadc41e617a26a3af5d3f1a54.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 5, category: 'men', name: "Classic Polo", price: "₹3,500", image: "https://i.pinimg.com/736x/3b/b3/48/3bb348268f2acd20533fa9f6faf131be.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 6, category: 'men', name: "Premium Sneakers", price: "₹14,999", image: "https://i.pinimg.com/1200x/a1/cb/ad/a1cbade99c9b4dea5d658f0a5182949a.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 7, category: 'men', name: "Wool Sweater", price: "₹7,200", image: "https://i.pinimg.com/736x/1e/51/f2/1e51f20bad3452530ebe6b6da791147c.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 8, category: 'men', name: "Chinos", price: "₹5,800", image: "https://i.pinimg.com/736x/67/e6/00/67e6000759afaa5eb681d6960af20bc4.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 9, category: 'men', name: "Denim Jeans", price: "₹6,500", image:"https://i.pinimg.com/1200x/6c/d8/4c/6cd84c694ee0b67d4a21adb2b3b5951e.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 10, category: 'men', name: "Casual Blazer", price: "₹12,000", image: "https://i.pinimg.com/1200x/69/13/33/69133337e5e4ef6ed4e38d9c16d155f3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    // Women's Products
    { id: 11, category: 'women', name: "Evening Dress", price: "₹27,500", image: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 12, category: 'women', name: "Silk Blouse", price: "₹7,200", image: "https://i.pinimg.com/1200x/42/d3/ef/42d3ef5b7bace0826fa36c0f231a704e.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 13, category: 'women', name: "High-Waist Trousers", price: "₹8,500", image: "https://i.pinimg.com/1200x/d2/8d/31/d28d317696e57a295d8b93261393ed08.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 14, category: 'women', name: "Wool Trench Coat", price: "₹22,000", image: "https://i.pinimg.com/1200x/cc/b2/ca/ccb2cacace89e2d5b56aba1f384ca991.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 15, category: 'women', name: "Leather Handbag", price: "₹15,500", image: "https://i.pinimg.com/736x/98/cd/33/98cd33b971becfa3fe07a9e98f90b8d3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 16, category: 'women', name: "Suede Ankle Boots", price: "₹11,800", image: "https://i.pinimg.com/736x/b9/d8/b3/b9d8b3d2ec49c03306b8f42a65002eba.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 17, category: 'women', name: "Summer Maxi Dress", price: "₹9,800", image: "https://i.pinimg.com/1200x/b6/e5/85/b6e585676ffc6d3d17fbfeabdc1dd76e.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 18, category: 'women', name: "Cashmere Scarf", price: "₹6,400", image: "https://i.pinimg.com/1200x/f5/3e/5c/f53e5c5f944dff448c4499b88e0289d3.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 19, category: 'women', name: "Designer Sunglasses", price: "₹14,000", image: "https://i.pinimg.com/736x/ad/d1/3d/add13d7b799c811eb46a27fe92233af6.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 20, category: 'women', name: "Tailored Blazer", price: "₹16,500", image: "https://i.pinimg.com/736x/73/b8/aa/73b8aace701d3371df0f4686823b1aef.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    // Accessories Products
    { id: 21, category: 'accessories', name: "Luxury Watch", price: "₹45,000", image: "https://i.pinimg.com/736x/ea/87/51/ea8751f3816013dfcca04c796e09e6de.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 22, category: 'accessories', name: "Designer Handbag", price: "₹18,000", image: "https://i.pinimg.com/736x/40/21/ca/4021ca7cb1562425c151e362d7ca8615.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 23, category: 'accessories', name: "Statement Necklace", price: "₹9,500", image: "https://i.pinimg.com/736x/95/12/b8/9512b814d22a2fcc0e9b4d3a0251b4a2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 24, category: 'accessories', name: "Leather Wallet", price: "₹4,200", image: "https://i.pinimg.com/736x/a6/23/61/a62361b8fa4da273e1a328ac5e3318c6.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 25, category: 'accessories', name: "Silk Scarf", price: "₹3,500", image: "https://i.pinimg.com/736x/8f/90/f8/8f90f8fa67e325dff7e8132276967c54.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 26, category: 'accessories', name: "Classic Sunglasses", price: "₹6,800", image: "https://i.pinimg.com/736x/dc/00/14/dc00141929e2c6f97f1d6b0ba5500a6d.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 27, category: 'accessories', name: "Silver Cufflinks", price: "₹5,000", image: "https://i.pinimg.com/1200x/95/99/eb/9599ebb4d5d8541a09846f0b59971f3d.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 28, category: 'accessories', name: "Pearl Earrings", price: "₹7,200", image: "https://i.pinimg.com/1200x/72/77/2f/72772f16d811bba51a61103eb7cd5453.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 29, category: 'accessories', name: "Leather Belt", price: "₹3,900", image: "https://i.pinimg.com/736x/06/8c/30/068c30097deb9cbcc0089d2c73e675ec.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 30, category: 'accessories', name: "Luxury Perfume", price: "₹10,500", image: "https://i.pinimg.com/736x/cb/da/e5/cbdae5b18ab5808c829e3e568d3d4857.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

function findProductById(id) {
    // The '==' is used here because the ID from onclick might be a string
    return allProducts.find(p => p.id == id);
}