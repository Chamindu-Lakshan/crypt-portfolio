import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Wallet,
  Plus,
  Eye,
  EyeOff,
  RefreshCw
} from "lucide-react";
import { useState } from "react";
import AssetCard from "./AssetCard";

const mockAssets = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    balance: "0.75",
    value: 32750.25,
    change24h: 2.5,
    price: 43667,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "12.5",
    value: 28750.00,
    change24h: -1.2,
    price: 2300,
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    balance: "45.2",
    value: 12680.40,
    change24h: 4.8,
    price: 280.5,
  },
  {
    symbol: "USDT",
    name: "Tether",
    balance: "5000",
    value: 5000.00,
    change24h: 0.01,
    price: 1.00,
  },
];

const Dashboard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const totalBalance = mockAssets.reduce((sum, asset) => sum + asset.value, 0);
  const totalChange = mockAssets.reduce((sum, asset) => sum + (asset.value * asset.change24h / 100), 0);
  const totalChangePercent = (totalChange / totalBalance) * 100;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-gradient-card shadow-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Portfolio Value
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                className="h-8 w-8 p-0"
              >
                {isBalanceVisible ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRefresh}
                className="h-8 w-8 p-0"
                disabled={isRefreshing}
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-crypto bg-clip-text text-transparent">
              {isBalanceVisible ? `$${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}` : "••••••"}
            </div>
            <div className="flex items-center space-x-2 mt-2">
              {totalChangePercent >= 0 ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <span className={`text-sm ${totalChangePercent >= 0 ? 'text-success' : 'text-destructive'}`}>
                {totalChangePercent >= 0 ? '+' : ''}
                {totalChangePercent.toFixed(2)}% (${totalChange.toFixed(2)})
              </span>
              <span className="text-sm text-muted-foreground">24h</span>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Assets
              </CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAssets.length}</div>
              <p className="text-xs text-muted-foreground">
                Active positions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Best Performer
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">BNB</div>
              <p className="text-xs text-success">+4.8% today</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-card shadow-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Quick Actions
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Add Exchange
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <DollarSign className="w-6 h-6 mb-2" />
              <span className="text-sm">Buy Crypto</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Wallet className="w-6 h-6 mb-2" />
              <span className="text-sm">Sync Wallet</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <TrendingUp className="w-6 h-6 mb-2" />
              <span className="text-sm">View Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <RefreshCw className="w-6 h-6 mb-2" />
              <span className="text-sm">Refresh All</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Assets Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Your Assets</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{mockAssets.length} assets</Badge>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAssets.map((asset) => (
            <AssetCard key={asset.symbol} asset={asset} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;