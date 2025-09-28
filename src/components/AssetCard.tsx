import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Asset {
  symbol: string;
  name: string;
  balance: string;
  value: number;
  change24h: number;
  price: number;
}

interface AssetCardProps {
  asset: Asset;
}

const AssetCard = ({ asset }: AssetCardProps) => {
  const isPositive = asset.change24h >= 0;

  const getCryptoIcon = (symbol: string) => {
    const iconMap: Record<string, string> = {
      BTC: "₿",
      ETH: "Ξ", 
      BNB: "BNB",
      USDT: "₮",
    };
    return iconMap[symbol] || symbol.charAt(0);
  };

  const getCryptoColor = (symbol: string) => {
    const colorMap: Record<string, string> = {
      BTC: "text-crypto-gold",
      ETH: "text-crypto-blue",
      BNB: "text-warning",
      USDT: "text-success",
    };
    return colorMap[symbol] || "text-primary";
  };

  return (
    <Card className="bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-300 cursor-pointer group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-lg font-bold ${getCryptoColor(asset.symbol)}`}>
            {getCryptoIcon(asset.symbol)}
          </div>
          <div>
            <p className="font-semibold">{asset.symbol}</p>
            <p className="text-xs text-muted-foreground">{asset.name}</p>
          </div>
        </div>
        <Badge variant={isPositive ? "default" : "destructive"} className="flex items-center space-x-1">
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{isPositive ? '+' : ''}{asset.change24h.toFixed(2)}%</span>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <p className="text-sm text-muted-foreground">Balance</p>
            <p className="text-lg font-semibold">{asset.balance} {asset.symbol}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Value</p>
            <p className="text-xl font-bold text-foreground">
              ${asset.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-sm font-medium">
              ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetCard;