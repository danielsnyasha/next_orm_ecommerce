const sampleData = {
    products: [
      {
        name: 'HIGH PERFORMANCE DESKTOP',
        slug: 'high-performance-desktop',
        category: "Desktop Computers",
        images: [
          '/assets/images/desktop/1.jpg',
          '/assets/images/desktop/2.jpg',
          '/assets/images/desktop/3.jpg'
        ],
        price: '799.99',  // Converted to string
        brand: 'Dell',
        rating: 4.7,
        numReviews: 25,
        stock: 10,
        description: 'Experience top-notch performance with this high-end desktop, perfect for gaming and professional use.',
        banner: '/assets/images/desktop/1.jpg',
        isFeatured: true,
        createdAt: new Date().toISOString(),  // Converted to ISO string
      },
      {
        name: 'POWER GAMING DESKTOP',
        slug: 'power-gaming-desktop',
        category: "Desktop Computers",
        images: [
          '/assets/images/desktop/4.jpg',
          '/assets/images/desktop/5.jpg',
          '/assets/images/desktop/6.jpg'
        ],
        price: '1499.99',  // Converted to string
        brand: 'Alienware',
        rating: 4.8,
        numReviews: 40,
        stock: 0,
        description: 'Unleash your gaming potential with this powerful gaming desktop, featuring top-of-the-line graphics and processing power.',
        banner: '/assets/images/desktop/4.jpg',
        isFeatured: true,
        createdAt: new Date().toISOString(),  // Converted to ISO string
      },
      {
        name: 'PROFESSIONAL WORK DESKTOP',
        slug: 'professional-workstation-desktop',
        category: "Desktop Computers",
        images: [
          '/assets/images/desktop/7.jpg',
          '/assets/images/desktop/8.jpg',
          '/assets/images/desktop/9.jpg'
        ],
        price: '1299.99',  // Converted to string
        brand: 'Lenovo',
        rating: 4.6,
        numReviews: 18,
        stock: 8,
        description: 'High-performance workstation desktop designed for professionals who demand the best in computing power.',
        banner: '/assets/images/desktop/7.jpg',
        isFeatured: false,
        createdAt: new Date().toISOString(),  // Converted to ISO string
      },
      {
        name: 'ULTRA SLIM LAPTOP',
        slug: 'ultra-slim-laptop',
        category: "Laptops",
        images: [
          '/assets/images/laptops/a.jpg',
          '/assets/images/laptops/b.jpg',
          '/assets/images/laptops/c.jpg'
        ],
        price: '999.99',  // Converted to string
        brand: 'Apple',
        rating: 4.9,
        numReviews: 15,
        stock: 5,
        description: 'Sleek, ultra-slim laptop with cutting-edge features and long battery life, ideal for professionals on the go.',
        banner: '/assets/images/laptops/a.jpg',
        isFeatured: true,
        createdAt: new Date().toISOString(),  // Converted to ISO string
      },
      {
        name: 'BUDGET FRIENDLY LAPTOP',
        slug: 'budget-friendly-laptop',
        category: "Laptops",
        images: [
          '/assets/images/laptops/u.jpg',
          '/assets/images/laptops/e.jpg',
          '/assets/images/laptops/f.jpg'
        ],
        price: '499.99',  // Converted to string
        brand: 'HP',
        rating: 4.3,
        numReviews: 30,
        stock: 20,
        description: 'Affordable and reliable laptop with essential features for everyday use and productivity.',
        banner: '/assets/images/laptops/oo.jpg',
        isFeatured: false,
        createdAt: new Date().toISOString(),  // Converted to ISO string
      },
      {
        name: 'PORTABLE GAMING LAPTOP',
        slug: 'portable-gaming-laptop',
        category: "Laptops",
        images: [
          '/assets/images/laptops/g.jpg',
          '/assets/images/laptops/h.jpg',
          '/assets/images/laptops/i.jpg'
        ],
        price: '1199.99',  // Converted to string
        brand: 'Asus',
        rating: 4.7,
        numReviews: 22,
        stock: 6,
        description: 'Powerful and portable gaming laptop, equipped with the latest hardware for an immersive gaming experience.',
        banner: '/assets/images/laptops/g.jpg',
        isFeatured: true,
        createdAt: new Date().toISOString(),  // Converted to ISO string
      },
    ]
  }
  
  export default sampleData;
  