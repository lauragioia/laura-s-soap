import { useTranslation } from 'react-i18next';
import LanguageSelector from '@/components/LanguageSelector';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import { Product } from '@/types/product';

const products: Product[] = [
  {
    id: '1',
    sku: 'LAV-001',
    ean: '5901234123457',
    name: 'Lavender Dreams',
    description: 'Calming lavender soap with organic oils',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    category: 'soap',
    stock_quantity: 150,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    sku: 'ROSE-001',
    ean: '5901234123458',
    name: 'Rose Petal',
    description: 'Nourishing rose-infused soap',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    category: 'soap',
    stock_quantity: 120,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    sku: 'MTN-001',
    ean: '5901234123459',
    name: 'Mountain Fresh',
    description: 'Refreshing pine and eucalyptus blend',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    category: 'soap',
    stock_quantity: 85,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-cream">
      <LanguageSelector />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-playfair text-4xl">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-sage/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl text-center mb-12">
            {t('products.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Index;
