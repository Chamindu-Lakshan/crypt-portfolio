import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  TrendingUp, 
  Zap, 
  Lock,
  BarChart3,
  Wallet,
  ArrowRight
} from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your crypto is protected with enterprise-level security and encryption"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics", 
      description: "Track performance across all exchanges with live price updates"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Connect exchanges via APIs and automate your portfolio management"
    },
    {
      icon: Lock,
      title: "Secure API Storage",
      description: "API keys are encrypted and stored using industry best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Content */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Wallet className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-crypto bg-clip-text text-transparent">
                Secure Crypto
              </span>
              <br />
              <span className="text-foreground">Portfolio Management</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect all your exchange accounts, track performance in real-time, and manage your 
              cryptocurrency portfolio with bank-grade security and automated workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8 py-6"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-border/50 hover:bg-secondary/20"
              >
                View Demo
                <BarChart3 className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-crypto bg-clip-text text-transparent">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-crypto bg-clip-text text-transparent">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Supported Exchanges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-crypto bg-clip-text text-transparent">
                  $50M+
                </div>
                <div className="text-sm text-muted-foreground">Assets Under Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CryptoFolio?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built by crypto traders, for crypto traders. Get the tools you need to manage your portfolio like a pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Supported Exchanges */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Supported Exchanges</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Bybit</div>
            <div className="text-2xl font-bold">Binance</div>
            <div className="text-2xl font-bold">Bitget</div>
            <div className="text-2xl font-bold">MEXC</div>
            <div className="text-2xl font-bold">Coinbase</div>
            <div className="text-2xl font-bold">Kraken</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;