// images
import { cart_sidebar, eye, facebook, heart_light_sidebar, heart_profile, information_circle_sidebar, instagram, mail, map, payments, phone, premium, shopping_outline, tabler_list, truck, twitter } from '@/assets/images'

export const tabsNav = [
  { name: "Best sellers" },
  { name: "Mobile phones" },
  { name: "Tablets" },
  { name: "Laptops" },
  { name: "Desktops" },
  { name: "Accessories" }
]

export const cualities_footer = [
  {title: 'Fast delivery', text: 'Delivery up to 5 days', icon: truck},
  {title: 'Quick payment', text: 'Choose your payment method', icon: payments},
  {title: 'Best quality', text: 'Only original products', icon: premium}
]

export const links_socials = [
  {image: instagram, link: '/'},
  {image: facebook, link: '/'},
  {image: twitter, link: '/'},
]

export const sidebar = [
  {text: 'Help Center', icon: information_circle_sidebar, link: '/profile'},
  {text: 'Wish list', icon: heart_light_sidebar, link: '/'},
  {text: 'Bucket', icon: cart_sidebar, link: '/basket'}
]

export const profile = [
  {text: 'My orders', icon: tabler_list, link: '/'},
  {text: 'My basket', icon: shopping_outline, link: '/basket'},
  {text: 'Wish list', icon: heart_profile, link: '/'},
  {text: 'Viewed products', icon: eye, link: '/'},
]

export const contact_info = [
  {text: 'Świerkowa 15, Warsaw, 00-123, Poland', icon: map},
  {text: '+48 440 500 600', icon: phone},
  {text: 'tech_cloud@gmail.com', icon: mail}
]

export const links_footer = [
  { text: 'FAQ', link: '/'},
  { text: 'About us', link: '/'},
  { text: 'Terms and conditions', link: '/'},
  { text: 'Privacy policy', link: '/'},
  { text: 'Cookies policy', link: '/'}
]

export const links_footer2 = [
  { text: 'Payment', link: '/'},
  { text: 'Shipping', link: '/'},
  { text: 'Guarantee', link: '/'},
  { text: 'Returns policy', link: '/'},
  { text: 'Cooperation', link: '/'}
]

export const mobile_phones = [
  { text: 'Apple', link: '/'},
  { text: 'Samsung', link: '/'},
  { text: 'Motorola', link: '/'},
  { text: 'Xiaomi', link: '/'},
  { text: 'Oppo', link: '/'},
]

export const tablets = [
  { text: 'Apple', link: '/'},
  { text: 'Samsung', link: '/'},
  { text: 'Lenovo', link: '/'},
  { text: 'Xiaomi', link: '/'},
  { text: 'LG', link: '/'},
]

export const laptops = [
  { text: 'Apple', link: '/'},
  { text: 'HP', link: '/'},
  { text: 'Lenovo', link: '/'},
  { text: 'Dell', link: '/'},
  { text: 'ASUS', link: '/'},
]

export const desktops = [
  { text: 'Monitors', link: '/'},
  { text: 'Keyboards and mouses', link: '/'},
  { text: 'Loudspeakers', link: '/'},
  { text: 'Computer softwares', link: '/'},
  { text: 'Adapters', link: '/'},
]

export const Accessories = [
  { text: 'Protective glasses', link: '/'},
  { text: 'Cases and covers', link: '/'},
  { text: 'Chargers', link: '/'},
  { text: 'Headphones', link: '/'},
  { text: 'Cables and adapters', link: '/'},
]
