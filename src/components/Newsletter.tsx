import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our next newsletter soon.",
    });
    setEmail('');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h2 className="font-playfair text-3xl">{t('newsletter.title')}</h2>
        <p className="text-muted-foreground">{t('newsletter.subtitle')}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-terra text-white transition-colors hover:bg-terra/90"
          >
            {t('newsletter.button')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;