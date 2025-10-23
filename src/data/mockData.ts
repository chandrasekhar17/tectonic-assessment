import type { Look, Product } from '../types'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Emerald Bikini Top',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=300&h=400&fit=crop',
    description: 'Stunning emerald green bikini top with intricate pattern',
    category: 'Swimwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Emerald', 'Blue', 'Pink']
  },
  {
    id: '2',
    name: 'Round Retro Sunglasses',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=400&fit=crop',
    description: 'Stylish round sunglasses with retro vibes',
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Gold']
  },
  {
    id: '3',
    name: 'Layered Gold Necklace',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=400&fit=crop',
    description: 'Delicate layered gold chain necklace',
    category: 'Jewelry',
    sizes: ['One Size'],
    colors: ['Gold', 'Silver', 'Rose Gold']
  },
  {
    id: '4',
    name: 'Wide Leg Pants',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop',
    description: 'Comfortable wide leg pants with flowing silhouette',
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Beige', 'Navy']
  },
  {
    id: '5',
    name: 'Leather Jacket',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
    description: 'Classic black leather jacket for edgy street style',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown']
  },
  {
    id: '6',
    name: 'Elegant Blazer',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop',
    description: 'Sophisticated blazer for professional and casual wear',
    category: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Navy', 'Black']
  },
  {
    id: '7',
    name: 'Athletic Tracksuit',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1506629905607-45cf30bb967b?w=300&h=400&fit=crop',
    description: 'Comfortable athletic tracksuit for casual wear',
    category: 'Activewear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Red']
  },
  {
    id: '8',
    name: 'Casual Sweater',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=400&fit=crop',
    description: 'Cozy sweater perfect for casual everyday wear',
    category: 'Knitwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Brown', 'Gray']
  },
  {
    id: '9',
    name: 'Leather Wallet',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop',
    description: 'Premium leather wallet with multiple card slots',
    category: 'Accessories',
    sizes: ['One Size'],
    colors: ['Brown', 'Black', 'Tan']
  },
  {
    id: '10',
    name: 'Business Shirt',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=300&h=400&fit=crop',
    description: 'Crisp white business shirt for professional look',
    category: 'Shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Light Pink']
  }
]

export const mockLooks: Look[] = [
  {
    id: 'look1',
    title: 'Summer Vibes',
    description: 'Perfect outfit for beach days and summer parties',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    products: [mockProducts[0], mockProducts[1], mockProducts[2]],
    annotations: [
      { id: 'ann1', productId: '2', x: 50, y: 30, label: 'Round Retro Sunglasses' },
      { id: 'ann2', productId: '1', x: 50, y: 55, label: 'Emerald Bikini Top' },
      { id: 'ann3', productId: '3', x: 50, y: 45, label: 'Layered Gold Necklace' }
    ],
    celebrity: 'Fashion Influencer'
  },
  {
    id: 'look2',
    title: 'Street Style',
    description: 'Edgy urban outfit for city adventures',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    products: [mockProducts[4], mockProducts[3]],
    annotations: [
      { id: 'ann4', productId: '5', x: 50, y: 35, label: 'Leather Jacket' },
      { id: 'ann5', productId: '4', x: 50, y: 70, label: 'Wide Leg Pants' }
    ]
  },
  {
    id: 'look3',
    title: 'Business Casual',
    description: 'Professional yet stylish for work meetings',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=600&fit=crop',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    products: [mockProducts[5], mockProducts[8], mockProducts[9]],
    annotations: [
      { id: 'ann6', productId: '6', x: 50, y: 40, label: 'Elegant Blazer' },
      { id: 'ann11', productId: '9', x: 35, y: 65, label: 'Leather Wallet' },
      { id: 'ann12', productId: '10', x: 50, y: 50, label: 'Business Shirt' }
    ]
  },
  {
    id: 'look4',
    title: 'Athletic Casual',
    description: 'Comfortable sporty look for everyday activities',
    image: 'https://images.unsplash.com/photo-1506629905607-45cf30bb967b?w=400&h=600&fit=crop',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    products: [mockProducts[6]],
    annotations: [
      { id: 'ann7', productId: '7', x: 50, y: 50, label: 'Athletic Tracksuit' }
    ],
    celebrity: 'Fitness Influencer'
  },
  {
    id: 'look5',
    title: 'Cozy Autumn',
    description: 'Warm and comfortable outfit for cool weather',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    products: [mockProducts[7]],
    annotations: [
      { id: 'ann8', productId: '8', x: 50, y: 40, label: 'Casual Sweater' }
    ]
  },
  {
    id: 'look6',
    title: 'Evening Elegance',
    description: 'Sophisticated evening wear for special occasions',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    products: [mockProducts[5], mockProducts[0]],
    annotations: [
      { id: 'ann9', productId: '6', x: 48, y: 40, label: 'Elegant Blazer' },
      { id: 'ann10', productId: '1', x: 52, y: 60, label: 'Emerald Bikini Top' }
    ],
    celebrity: 'Red Carpet Stylist'
  }
]