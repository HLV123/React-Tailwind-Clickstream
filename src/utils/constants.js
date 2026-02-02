// Local Images
export const IMAGES = {
  hero: "/images/hero.jpg",
  gallery: [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ],
  team: [
    "/images/team1.jpg",
    "/images/team2.jpg",
    "/images/team3.jpg",
  ],
  testimonial: "/images/testimonial.jpg",
};

export const NAV_LINKS = [
  { name: 'Trang chủ', href: '#home' },
  { name: 'Dịch vụ', href: '#services' },
  { name: 'Dự án', href: '#portfolio' },
  { name: 'Đội ngũ', href: '#team' },
  { name: 'Liên hệ', href: '#contact' },
];

export const SERVICES = [
  {
    id: 1,
    icon: 'Monitor',
    title: 'Thiết kế Website & Phần mềm doanh nghiệp',
    description: 'Tạo ra những website hiện đại, responsive và tối ưu trải nghiệm người dùng và những phần mềm hoạt động hiệu quả tích hợp Database.',
  },
  {
    id: 2,
    icon: 'BarChart3',
    title: 'Ứng dụng R Language để Visualize Data',
    description: 'Tạo ra giao diện đẹp mắt và hiệu năng cao cho việc phân tích và trực quan hóa dữ liệu.',
  },
  {
    id: 3,
    icon: 'Eye',
    title: 'Computer Vision Solutions',
    description: 'Ứng dụng Computer Vision để giải quyết nhu cầu thực tiễn. Nâng cấp xử lý thông tin qua camera.',
  },
  {
    id: 4,
    icon: 'Database',
    title: 'Big Data & Data Science',
    description: 'Áp dụng Big Data và Data Science để nghiên cứu và phân tích các pattern trong cuộc sống.',
  },
];

export const PROJECTS = [
  { id: 1, img: IMAGES.gallery[0], title: 'Website Doanh nghiệp', category: 'Website' },
  { id: 2, img: IMAGES.gallery[1], title: 'R Studio Analytics', category: 'Data Science' },
  { id: 3, img: IMAGES.gallery[2], title: 'Big Data Platform', category: 'Data Science' },
  { id: 4, img: IMAGES.gallery[3], title: 'Object Detection System', category: 'Computer Vision' },
  { id: 5, img: IMAGES.gallery[4], title: 'AI Chatbot Assistant', category: 'AI/ML' },
  { id: 6, img: IMAGES.gallery[5], title: 'Image Management System', category: 'Software' },
];

export const PROJECT_FILTERS = ['Tất cả', 'Website', 'Data Science', 'Computer Vision', 'AI/ML', 'Software'];

export const TEAM_MEMBERS = [
  { id: 1, img: IMAGES.team[0], name: 'Nguyễn Minh Tuấn', role: 'Website Lead', social: '@minhtuandev' },
  { id: 2, img: IMAGES.team[1], name: 'Trần Đức Anh', role: 'Data Science Lead', social: '@ducanh_ds' },
  { id: 3, img: IMAGES.team[2], name: 'Lê Hoàng Nam', role: 'Computer Vision Lead', social: '@namcv_ai' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "LeVanHung đã giúp chúng tôi cải thiện gần như toàn bộ vấn đề của chúng tôi và chúng tôi cảm thấy rất hài lòng.",
    author: "Nguyễn Văn Nam",
    role: "CEO, TechViet Corp",
    img: IMAGES.testimonial,
  },
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: '20',
    unit: 'triệu',
    description: 'Phù hợp cho startup và doanh nghiệp nhỏ',
    features: ['Website 5-10 trang', 'Responsive design', 'Database cơ bản', 'Hỗ trợ 30 ngày'],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '50',
    unit: 'triệu',
    description: 'Giải pháp toàn diện cho doanh nghiệp vừa',
    features: ['Website + Phần mềm', 'Dashboard Analytics', 'Data Visualization', 'Computer Vision cơ bản', 'Hỗ trợ 90 ngày'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Liên hệ',
    unit: '',
    description: 'Dành cho doanh nghiệp lớn',
    features: ['Full-stack Development', 'Big Data Infrastructure', 'AI/ML Solutions', 'Bảo trì 24/7'],
    highlighted: false,
  },
];

export const CONTACT_INFO = [
  { icon: 'MapPin', label: 'Địa chỉ', value: 'Số 1 Trung tâm Quận 1 Phường Sài Gòn, TP.HCM' },
  { icon: 'Mail', label: 'Email', value: 'nirabanana@gmail.com' },
  { icon: 'Phone', label: 'Điện thoại', value: '+84 123 456 789' },
];

export const FOOTER_LINKS = [
  { title: 'Dịch vụ', links: ['Website', 'Data Science', 'Computer Vision', 'Big Data'] },
  { title: 'Công ty', links: ['Về chúng tôi', 'Đội ngũ', 'Tuyển dụng', 'Blog'] },
  { title: 'Hỗ trợ', links: ['FAQ', 'Liên hệ', 'Chính sách', 'Điều khoản'] },
];

export const STATS = [
  { number: '100+', label: 'Dự án' },
  { number: '50+', label: 'Khách hàng' },
  { number: '3', label: 'Năm kinh nghiệm' },
];
