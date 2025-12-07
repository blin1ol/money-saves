import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import amazonLogo from "@/assets/amazon_logo.png";
const LandingPage = () => {
  const offerUrl = "https://uplevelrewarded.com/aff_c?offer_id=1836&aff_id=12594";
  return <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => <div key={i} className="absolute text-white/60 animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20 + 10}px`,
        animationDelay: `${Math.random() * 2}s`
      }}>
            ❄
          </div>)}
      </div>

      {/* Decorative lights */}
      <div className="absolute top-0 left-0 right-0 flex justify-around py-4">
        {[...Array(12)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full animate-pulse" style={{
        backgroundColor: i % 3 === 0 ? '#ff0000' : i % 3 === 1 ? '#00ff00' : '#ffd700',
        animationDelay: `${i * 0.2}s`
      }} />)}
      </div>

      <Card className="max-w-2xl w-full bg-green-950/80 backdrop-blur-sm border-2 border-red-500/50 shadow-2xl shadow-red-500/20 relative z-10">
        <CardContent className="p-8 md:p-12 text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={amazonLogo} alt="Amazon" className="h-20 md:h-28" />
          </div>

          {/* Question */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">Want to Get a $750 Amazon Gift Card</h1>

          <p className="text-green-200 text-lg">🎁 Special Holiday Offer! 🎁</p>

          <div className="text-left max-w-lg mx-auto space-y-3 text-white">
            <p className="text-base md:text-lg">
              <span className="font-semibold text-green-300">Step 1:</span> Enter your email & basic info
            </p>
            <p className="text-base md:text-lg">
              <span className="font-semibold text-green-300">Step 2:</span> Complete 2-3 Deals
            </p>
            <p className="text-base md:text-lg">
              <span className="font-semibold text-green-300">Step 3:</span> Claim your reward and repeat anytime!
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <Button asChild size="lg" className="h-14 px-12 text-lg font-semibold bg-red-600 text-white hover:bg-red-500 transition-all duration-300 hover:scale-105 border-2 border-red-400 shadow-lg shadow-red-500/30">
              <a href={offerUrl} rel="noopener noreferrer">
                🎅 Start Now
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default LandingPage;