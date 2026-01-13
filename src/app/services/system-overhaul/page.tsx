import { Navigation } from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { SystemOverhaul } from '../../../components/SystemOverhaul';
export default function SystemOverhaulPage() {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navigation />
      <main className="pt-24">
        <SystemOverhaul isLoading={false} />
      </main>
      <Footer isLoading={false} />
    </div>
  );
}
